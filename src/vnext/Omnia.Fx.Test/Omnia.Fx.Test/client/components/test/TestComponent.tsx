import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import {
    vueCustomElement,
    IWebComponentInstance,
    WebComponentBootstrapper,
    Localize,
    Inject
} from "@omnia/fx";

declare var Zepto: ZeptoStatic;


@Component
export default class ActionMenuComponent extends Vue implements IWebComponentInstance {

    mounted() {

        WebComponentBootstrapper
            .registerElementInstance(this, this.$el);

    }


    render(h) {
        return (
            <h1>Hello im a extension that adds my-test to body</h1>
        )
    }
}


WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, ActionMenuComponent);

    Zepto(() => {
        document.body.appendChild(document.createElement("my-test"));
    }); 

});