import {ActionContext} from "vuex";
import {GlobalState,GlobalStore,StoreModule} from "@omnia/fx/store";
import {MediaReference,SearchMediaSettings} from "../models";
import * as Mutations from "./media.mutations";
import {ImageService,imageService} from "../services/image.service";

/** Definition of the Store Module */
export interface MediaStoreModule extends StoreModule<MediaState, GlobalState> {    
    
    imageService:ImageService;
    
    getters: {
        areImagesLoaded():boolean;
    }
    mutations: {
        setImages(state: MediaState, images:MediaReference[]):void;
    }    
    actions:{
        loadImages(store:ActionContext<MediaState,GlobalState>, searchSettings:SearchMediaSettings):void;
    }
}

/**
 * The state for the module mock
 */
export interface MediaState{
    images:MediaReference[];
    video:MediaReference[];
}

/**
 * Module for images
 */
export const mediaStoreModule:MediaStoreModule = { 

    namespaced : true,
    /**The namespace of the mock */
    namespace : "media.module",
    
    imageService : imageService,


    /** Implementation of State */
    state:{
         images: null,
         video: null            
    },     

    /** Implementation of Getters */
    getters : {
        areImagesLoaded():boolean{
            return mediaStoreModule.state.images !== null;
        }
    },
    /** Implementations of Mutation */
    mutations : {
        setImages(state: MediaState, images:MediaReference[]):void {
            state.images = images;
        }
    },
    /** Implementations of Actions*/
    actions : {
        loadImages(store:ActionContext<MediaState,GlobalState>, searchSettings:SearchMediaSettings):void {
            mediaStoreModule.imageService.getImages(searchSettings);
        }
     }
}