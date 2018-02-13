import {
    Console,
    HttpClient,
    Inject,ContextMessages,    
    Localize,
    OmniaContext,
    SharePointContext
} from '@omnia/fx';
import {
    IWebComponentInstance,
    WebComponentBootstrapper
} from '@omnia/fx/bootstrap';
import {TaskViewerStyles} from "./Taskviewer.css"

import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';
import {tasksStoreModule} from "../stores"
import * as Actions from "../stores/tasks/PimTasks.actions";
import * as Mutations from "../stores/tasks/PimTasks.mutations";
import {GlobalStore} from "@omnia/fx/store";
import {PimTask} from "../models";

@Component
export class TaskViewerComponent extends Vue implements IWebComponentInstance {

    @Inject(HttpClient) private httpClient: HttpClient;
    @Inject(OmniaContext) private omniaContext: OmniaContext;
    @Inject(SharePointContext) private spContext: SharePointContext;   

    
    /** 
     * mountded function
    */
    public mounted() {
        WebComponentBootstrapper.registerElementInstance(this, this.$el);    
        GlobalStore.subscribe(this.onStoreChanged.bind(this));        
        GlobalStore.dispatch(Actions.LoadUserTasks("fakeUser"));      
        this.$forceUpdate();
    }

    /**
     * eventhandler for store changes
     * @param mutation for store change
     */
    public onStoreChanged(mutation){        
        if(!tasksStoreModule.getters.areTasksLoaded()){
            return;
        }        
        this.$forceUpdate();
    }    

    private buildTaskMarkup(h){
        let result = [];
        tasksStoreModule.state.tasks.forEach((task) =>{
            result.push(
                <tr class={TaskViewerStyles.TableRow}>                        
                    <td><a href="http://aftonbladet.se" target="_blank"> {task.name}</a></td>
                    <td>{task.description}</td>
                    <td>{task.status}</td>                                        
                </tr>        
            )
        });
        return result;
    }    


    /**
     * Render the component
     * @param h 
     */
    public render(h) {
        if(!tasksStoreModule.getters.areTasksLoaded()){
            return <div/>
        }
        return <div>
            <table class={TaskViewerStyles.Table}>
                <thead>
                    <tr >
                        <th>Name</th>
                        <th>Description</th>
                        <th>Status</th>                                        
                    </tr>
                </thead>                
                <tbody>
                    {this.buildTaskMarkup(h)}
                </tbody>
            </table>
          </div>;
    }
}

WebComponentBootstrapper.registerElement((manifest) => {    
    document
        .querySelectorAll('.omf-header')[0]
        .appendChild(document.createElement(manifest.elementName));
    Vue.customElement(manifest.elementName, new TaskViewerComponent().$options);
});




