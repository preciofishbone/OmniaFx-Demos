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

import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';
import { BasicService } from '../../services/BasicService';
import * as BasicStyles from './BasicComponent.css';
import BasicSubComponent, { ErrorDetails } from './BasicSubComponent';
import { BasicComponentLoc } from './loc/BasicComponentLoc';

@Component
export class BasicComponent extends Vue implements IWebComponentInstance {

    @Inject(BasicService) private basicService: BasicService;
    @Inject(HttpClient) private httpClient: HttpClient;
    @Inject(OmniaContext) private omniaContext: OmniaContext;
    @Inject(SharePointContext) private spContext: SharePointContext;

    public mounted() {
        WebComponentBootstrapper.registerElementInstance(this, this.$el);
    }

    onOk() {
        Console.logInfo('Subcomponent clicked');
    }

    onError(details: ErrorDetails) {
        Console.logInfo(details);
    }


    public render(h) {
        return <div>
            <div>I am a web component 5</div>
            <BasicSubComponent onOk={this.onOk} onError={this.onError}></BasicSubComponent>
          </div>;
    }
}

WebComponentBootstrapper.registerElement((manifest) => {    
    document
        .querySelectorAll('.omf-header')[0]
        .appendChild(document.createElement(manifest.elementName));
    Vue.customElement(manifest.elementName, new BasicComponent().$options);
});
