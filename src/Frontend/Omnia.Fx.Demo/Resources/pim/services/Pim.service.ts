import {ActionCatalog,MutationCatalog} from "../stores";
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
import {PimSession} from "../models";

/**
 * Interface for image service
 */
export interface IPimService{
    getTasks(userName:string);
    loadSession();
    getSPToken();
}

export interface IContextInfo {
    d: {
        GetContextWebInformation: {
            FormDigestTimeoutSeconds,
            FormDigestValue
        }
    }
}

/**
 * Pim Service
 */

export const PimService:IPimService = {

    getTasks(userName:string){        
        let requestUrl = "https://pfinriverwebapi-test.azurewebsites.net/api/v1/task?username=henrik.natstrand@live.com&maxcount=10";
        fetch(requestUrl,{
                method : "GET",
                headers: { "Accept": "application/json; odata=verbose" },
                mode : "cors"

        })        
        .then(function(data:Response){
            data.json().then((data) =>{
                let result:Array<PimTask> = <Array<PimTask>>data;
                GlobalStore.commit(MutationCatalog.Tasks.SetState(result));
            });                       
        })
        .catch(function(error){
            alert('error:' + error);
        })        
    },

    loadSession(){
         let fakeSession:PimSession = {
            token : "fakeToken",
            username: "fakeUsername"
         };     
         setTimeout(() => {
            let fakeSession:PimSession = {
                token : "fakeToken",
                username: "fakeUsername"
            }
            GlobalStore.commit(MutationCatalog.Session.SetSessionState(fakeSession));         
        },1000);           
        //PimService.getSPToken();
    },
    getSPToken(){
        let requestUrl = "https://m365x964999.sharepoint.com/sites/omniafx-dj/_api/contextinfo";
        fetch(requestUrl,{
                method : "POST",
                headers: { "Accept": "application/json; odata=verbose" },
                mode : "cors",
                credentials: "same-origin"
        })        
        .then(function(data:Response){
            debugger;
            data.json().then((data) =>{
                let result:IContextInfo = <IContextInfo>data;
                alert("token:" + result.d.GetContextWebInformation.FormDigestValue);
            });                       
        })
        .catch(function(error){
            alert('error:' + error);
        })        

    }
    
}