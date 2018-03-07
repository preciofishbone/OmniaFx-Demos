import {Action} from "@omnia/fx/store";
import {componentStoreModule} from "./Component.module.store";

/**
 * Action to load components
*/
export function loadComponents():Action{
    return {
        namespace : componentStoreModule.namespace,
        handler: componentStoreModule.actions.load,
        payload:null
    };
}
