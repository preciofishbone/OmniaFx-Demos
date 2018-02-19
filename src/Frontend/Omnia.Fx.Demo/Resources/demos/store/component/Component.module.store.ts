import {ActionContext} from "vuex";
import {GlobalState,GlobalStore,StoreModule} from "@omnia/fx/store";
import {ComponentReference,ComponentRegistry}from "../../models";
import * as Mutations from "./Component.mutations";
import { component } from 'vue-tsx-support';

/** Definition of the Store Module */
export interface ComponentStoreModule extends StoreModule<ComponentState, GlobalState> {       
    
    getters: {
        isInitialized():boolean;
    }
    mutations: {
        set(state: ComponentState, images:ComponentReference[]):void;
    }    
    actions:{
        load(store:ActionContext<ComponentState,GlobalState>, payload):void;
    }
}

/**
 * The state for the module mock
 */
export interface ComponentState{
    components:ComponentReference[];
}

/**
 * Module for images
 */
export const componentStoreModule:ComponentStoreModule = { 

    namespaced : true,
    /**The namespace of the mock */
    namespace : "component.module",  

    /** Implementation of State */
    state:{
        components: null
    },     

    /** Implementation of Getters */
    getters : {
        isInitialized():boolean{
            return componentStoreModule.state.components !== null;
        }
    },
    /** Implementations of Mutation */
    mutations : {
        set(state: ComponentState, components:ComponentReference[]):void {
            componentStoreModule.state.components = components;
        }
    },
    /** Implementations of Actions*/
    actions : {
        load(store:ActionContext<ComponentState,GlobalState>, payload):void {
            if(componentStoreModule.getters.isInitialized()){
                return;
            }
            GlobalStore.commit(Mutations.setState(ComponentRegistry));
        }
     }
}
GlobalStore.registerModule(componentStoreModule);     