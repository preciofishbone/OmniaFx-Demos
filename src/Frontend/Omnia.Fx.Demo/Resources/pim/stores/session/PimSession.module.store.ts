import {ActionContext} from "vuex";
import {GlobalState,GlobalStore,StoreModule} from "@omnia/fx/store";
//import {MediaReference,SearchMediaSettings} from "../models";
import * as Mutations from "./PimSession.mutations";
import * as Action from "./PimSession.actions";
import {PimTask} from "../../models";
import {PimService,IPimService} from "../../services/Pim.service";
import {PimSession} from "../../models";

/**
 * The state for the module mock
 */
export interface PimState{
    session:PimSession
}

/** Definition of the Store Module */
export interface PimSessionStoreModule extends StoreModule<PimState, GlobalState> {    
    
    pimService:IPimService;
    
    getters: {
        isSessionLoaded():boolean;
    }
    mutations: {
        setSessionState(state: PimState,  newState:PimState):void;
    }    
    actions:{
        createSession(store:ActionContext<PimState,GlobalState>, userName:string):void;
    }
}



/**
 * Module for images
 */
export const pimSessionStoreModule:PimSessionStoreModule = { 

    namespaced : true,
    /**The namespace of the mock */
    namespace : "PimSessionStore.module",
    
    pimService : PimService,

    /** Implementation of State */
    state:{
        session : null
    },     

    /** Implementation of Getters */
    getters : {
        isSessionLoaded():boolean{
            return pimSessionStoreModule.state.session !== null;
        }
    },
    /** Implementations of Mutation */
    mutations : {
        setSessionState(state: PimState, newState:PimState):void {
            pimSessionStoreModule.state = newState;
        }
    },
    /** Implementations of Actions*/
    actions : {        
        createSession(store:ActionContext<PimState,GlobalState>):void {
            if(!pimSessionStoreModule.getters.isSessionLoaded())
            {
                debugger;
                pimSessionStoreModule.pimService.loadSession();
            }
        }
     }
}
GlobalStore.registerModule(pimSessionStoreModule);
