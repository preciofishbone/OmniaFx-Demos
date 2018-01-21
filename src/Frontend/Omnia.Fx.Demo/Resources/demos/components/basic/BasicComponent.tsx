import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { BasicService } from '../../services/BasicService';
import * as BasicStyles from './BasicComponent.css';
import BasicSubComponent from './BasicSubComponent';
import {
    Inject,
    Localize,
    Console,
    IWebComponentInstance,
    WebComponentBootstrapper,
    HttpClient,
    OmniaContext,
    SharePointContext
} from '@omnia/fx';
import { BasicComponentLoc } from './loc/BasicComponentLoc';


@Component
export class BasicComponent extends Vue implements IWebComponentInstance {

    @Inject(BasicService) private basicService: BasicService;
    @Inject(HttpClient) private httpClient: HttpClient;
    @Inject(OmniaContext) private omniaContext: OmniaContext;
    @Inject(SharePointContext) private spContext: SharePointContext;

    mounted() {

        WebComponentBootstrapper.registerElementInstance(this, this.$el);

    }

    render(h) {
        return (
            <div>
                I am a web component
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {

    document
        .querySelectorAll('.omf-header')[0]
        .appendChild(document.createElement(manifest.elementName));

    Vue.customElement(manifest.elementName, new BasicComponent().$options);

});
