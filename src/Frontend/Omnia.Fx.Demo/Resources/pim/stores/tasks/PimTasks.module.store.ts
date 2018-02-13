import {ActionContext} from "vuex";
import {GlobalState,GlobalStore,StoreModule} from "@omnia/fx/store";
//import {MediaReference,SearchMediaSettings} from "../models";
import {MutationCatalog} from "../Index";
import {ActionCatalog} from "../Index";
import {PimTask} from "../../models";
import {PimService,IPimService} from "../../services/Pim.service";
import {pimSessionStoreModule} from "../session/PimSession.module.store";


/** Definition of the Store Module */
export interface PimTasksStoreModule extends StoreModule<TaskState, GlobalState> {    
    
    pimService:IPimService;
    
    getters: {
        areTasksLoaded():boolean;
    }
    mutations: {
        setTasks(state: TaskState, tasks:PimTask[]):void;
    }    
    actions:{
        loadTasks(store:ActionContext<TaskState,GlobalState>, userName:string):void;
    }
}

/**
 * The state for the module mock
 */
export interface TaskState{
    tasks:PimTask[];
}

/**
 * Module for images
 */
export const tasksStoreModule:PimTasksStoreModule = { 

    namespaced : true,
    /**The namespace of the mock */
    namespace : "PimStore.module",
    
    pimService : PimService,

    /** Implementation of State */
    state:{
         tasks: null            
    },     

    /** Implementation of Getters */
    getters : {
        areTasksLoaded():boolean{
            return tasksStoreModule.state.tasks !== null;
        }
    },
    /** Implementations of Mutation */
    mutations : {
        setTasks(state: TaskState, tasks:PimTask[]):void {
            state.tasks = tasks;
        }
    },
    /** Implementations of Actions*/
    actions : {        
        loadTasks(store:ActionContext<TaskState,GlobalState>, userName:string):void {
            if(pimSessionStoreModule.getters.isSessionLoaded())
            {
                tasksStoreModule.pimService.getTasks(userName);
            }
            else{
                GlobalStore.subscribe((mutation,state) =>{
                    let type:string = mutation.type;
                    if(pimSessionStoreModule.getters.isSessionLoaded() &&
                        !tasksStoreModule.getters.areTasksLoaded())
                    {
                        tasksStoreModule.pimService.getTasks(userName);
                    }        
                })
                GlobalStore.dispatch(ActionCatalog.Session.CreateSession());
            }
        }
     }
}
GlobalStore.registerModule(tasksStoreModule);