import {ActionContext} from "vuex";
import {GlobalState,GlobalStore,StoreModule} from "@omnia/fx/store";
//import {MediaReference,SearchMediaSettings} from "../models";
import * as Mutations from "./PimTasks.mutations";
import {PimTask} from "../../models";
import {PimService,IPimService} from "../../services";

/** Definition of the Store Module */
export interface PimTasksStoreModule extends StoreModule<MediaState, GlobalState> {    
    
    pimService:IPimService;
    
    getters: {
        areTasksLoaded():boolean;
    }
    mutations: {
        setTasks(state: MediaState, tasks:PimTask[]):void;
    }    
    actions:{
        loadTasks(store:ActionContext<MediaState,GlobalState>, userName:string):void;
    }
}

/**
 * The state for the module mock
 */
export interface MediaState{
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
        setTasks(state: MediaState, tasks:PimTask[]):void {
            state.tasks = tasks;
        }
    },
    /** Implementations of Actions*/
    actions : {        
        loadTasks(store:ActionContext<MediaState,GlobalState>, userName:string):void {
            tasksStoreModule.pimService.GetTasks(userName);
        }
     }
}
GlobalStore.registerModule(tasksStoreModule);