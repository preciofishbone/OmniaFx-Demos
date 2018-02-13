import {Action} from "@omnia/fx/store";
import {mediaStoreModule} from "./media.module.store";
import {SearchMediaSettings} from "../models/SearchMediaSettings";

/**Action to update state */
export function LoadImages(searchSettings:SearchMediaSettings):Action{
    return {
        namespace : mediaStoreModule.namespace,
        handler: mediaStoreModule.actions.loadImages,
        payload:searchSettings
    };
}
