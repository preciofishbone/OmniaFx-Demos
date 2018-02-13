import {tasksStoreModule} from "./PimTasks.module.store";
import {Mutation} from "@omnia/fx/store";
import {PimTask} from "../../models/pimtask";

/**Mutation to set state */
export function SetState(images:PimTask[]):Mutation{
    return {
        namespace : tasksStoreModule.namespace,
        handler: tasksStoreModule.mutations.setTasks,
        payload:images
    };
}


