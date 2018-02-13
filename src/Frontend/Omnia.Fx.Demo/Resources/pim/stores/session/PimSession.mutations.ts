import {Mutation} from "@omnia/fx/store";
import {pimSessionStoreModule,PimState} from "./PimSession.module.store";
import {PimSession} from "../../models";
//import {Pim} from "../../services/pim.service";

/**Action to update state */
export function SetSessionState(session:PimSession):Mutation{
    return {
        namespace : pimSessionStoreModule.namespace,
        handler: pimSessionStoreModule.mutations.setSessionState,
        payload:session
    };
}
