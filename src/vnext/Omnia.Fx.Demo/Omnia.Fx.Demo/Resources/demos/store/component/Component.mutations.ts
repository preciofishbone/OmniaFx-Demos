import { Mutation } from "@omnia/fx/store";
import { MutationPayload } from "vuex";   
import {componentStoreModule} from "./Component.module.store";
import {ComponentReference} from "../../models/component";

class SetStateMutation extends Mutation<ComponentReference[]> {
    namespace = componentStoreModule.namespace;
    handler = componentStoreModule.mutations.set;
}
/**
 * Mutation to set state
 * */
export function setState(components: ComponentReference[]): Mutation<ComponentReference[]>{
    var state = new SetStateMutation();
    state.payload = components;
    return state;
}
