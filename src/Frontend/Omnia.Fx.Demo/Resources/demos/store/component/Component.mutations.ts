import {Mutation} from "@omnia/fx/store";
import {componentStoreModule} from "./Component.module.store";
import {ComponentReference} from "../../models/component";

/**
 * Mutation to set state
 * */
export function setState(components:ComponentReference[]):Mutation{
    return {
        namespace : componentStoreModule.namespace,
        handler: componentStoreModule.mutations.set,
        payload:components
    };
}
