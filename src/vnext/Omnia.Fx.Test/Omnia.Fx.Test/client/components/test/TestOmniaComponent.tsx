﻿import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import {
    vueCustomElement,
    IWebComponentInstance,
    WebComponentBootstrapper,
    Localize,
    Inject
} from "@omnia/fx";

import { MyLocalize } from '../../models/Localize';
import { TestOmniaService } from '../../services';
declare var Zepto: ZeptoStatic;

@Component
export default class TestOmniaComponent extends Vue implements IWebComponentInstance {
    @Inject(TestOmniaService) private testService: TestOmniaService;
    @Localize("MyTest") private loc: MyLocalize;

    mounted() {
        WebComponentBootstrapper.registerElementInstance(this, this.$el);

        this.testService.getData();
    }

    render(h) {
        return (
            <div>
                <h1>Hello im a extension that adds my-test to body</h1>
                <h2>My localize: {this.loc.Title}</h2>
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, TestOmniaComponent);

    Zepto(() => {
        document.body.appendChild(document.createElement("my-test"));
    });

});