import {mediaStoreModule} from "./media.module.store";
import {Mutation} from "@omnia/fx/store";
import {MediaReference} from "../models";

/**Mutation to set state */
export function SetState(images:MediaReference[]):Mutation{
    return {
        namespace : mediaStoreModule.namespace,
        handler: mediaStoreModule.mutations.setImages,
        payload:images
    };
}


