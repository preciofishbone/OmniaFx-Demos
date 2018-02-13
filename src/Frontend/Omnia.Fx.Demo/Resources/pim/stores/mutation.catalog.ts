import * as SessionMutations from "./session/PimSession.mutations";
import * as TaskMutation from "./tasks/PimTasks.mutations";

export const MutationCatalog =
{
    Session : SessionMutations,
    Tasks: TaskMutation
}