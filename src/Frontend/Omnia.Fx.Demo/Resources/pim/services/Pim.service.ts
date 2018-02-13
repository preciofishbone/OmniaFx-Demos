import * as Mutations from "../stores/tasks/PimTasks.mutations";
import {PimTask} from "../models/Pimtask";
import {
    Console,
    HttpClient,
    Inject,ContextMessages,    
    Localize,
    OmniaContext,
    SharePointContext
} from '@omnia/fx';
import { GlobalStore } from '@omnia/fx/store';

/**
 * Interface for image service
 */
export interface IPimService{
    GetTasks(userName:string);
}

/**
 * Pim Service
 */

export const PimService : IPimService = {

    GetTasks(userName:string){        
        let requestUrl = "https://pfinriverwebapi-test.azurewebsites.net/api/v1/task?username=henrik.natstrand@live.com&maxcount=10";
        fetch(requestUrl,{
                method : "GET",
                headers: { "Accept": "application/json; odata=verbose" },
                mode : "cors"

        })        
        .then(function(data:Response){
            data.json().then((data) =>{
                let result:Array<PimTask> = <Array<PimTask>>data;
                GlobalStore.commit(Mutations.SetState(result));
            });                       
        })
        .catch(function(error){
            alert('error:' + error);
        })        
    }
}