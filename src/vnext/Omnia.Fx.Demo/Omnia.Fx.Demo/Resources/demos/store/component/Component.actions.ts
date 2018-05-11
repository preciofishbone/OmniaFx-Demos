import {Action} from "@omnia/fx/store";
import {componentStoreModule} from "./Component.module.store";

class LoadComponentAction extends Action<any> {
    namespace = componentStoreModule.namespace;
    handler = componentStoreModule.actions.load;}

/**
 * Action to load components
*/
export function loadComponents():Action<any>{
    return new LoadComponentAction();
}
