import {Action} from "@omnia/fx/store";
import {pimSessionStoreModule} from "./PimSession.module.store";
//import {Pim} from "../../services/pim.service";

/**Action to update state */
export function CreateSession():Action{
    return {
        namespace : pimSessionStoreModule.namespace,
        handler: pimSessionStoreModule.actions.createSession,
        payload:null
    };
}
