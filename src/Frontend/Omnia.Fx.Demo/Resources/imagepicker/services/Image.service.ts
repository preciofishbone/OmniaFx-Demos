import {MediaReference,SearchMediaSettings} from "../models";
import {GlobalStore} from "@omnia/fx/store";
import * as MediaMutations from "../store/media.mutations"

/**
 * Interface for image service
 */
export interface ImageService{
    getImages(searchSettings:SearchMediaSettings);
}

/**
 * Service object for images
 */
export const imageService:ImageService = {    
    /** Gets images */
    getImages(searchSettings:SearchMediaSettings){
        let result = new Array<MediaReference>();        
        result.push({
            path : "fakepath1",
            name: "fakeName1"
        });
        result.push({
            path : "fakepath2",
            name: "fakeName2"            
        });
        result.push({
            path : "fakepath3",
            name: "fakeName3"            
        });               
        GlobalStore.commit(MediaMutations.SetState(result));
    }
}

 