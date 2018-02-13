import {Action} from "@omnia/fx/store";
import {tasksStoreModule} from "./PimTasks.module.store";
//import {Pim} from "../../services/pim.service";

/**Action to update state */
export function LoadUserTasks(userName:string):Action{
    return {
        namespace : tasksStoreModule.namespace,
        handler: tasksStoreModule.actions.loadTasks,
        payload:userName
    };
}
