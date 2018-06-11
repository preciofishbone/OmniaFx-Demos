import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import {
    vueCustomElement,
    IWebComponentInstance,
    WebComponentBootstrapper,
    Localize,
    Inject
} from "@omnia/fx";



@Component
export default class ActionMenuComponent extends Vue implements IWebComponentInstance {

    mounted() {

        WebComponentBootstrapper
            .registerElementInstance(this, this.$el);

        alert('im loaded');

    }


    render(h) {
        return (
            <div>Header</div>
        )
    }
}


WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, ActionMenuComponent);
});