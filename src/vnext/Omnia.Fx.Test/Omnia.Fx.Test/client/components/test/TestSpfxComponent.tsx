import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import {
    vueCustomElement,
    IWebComponentInstance,
    WebComponentBootstrapper,
    Localize,
    Inject
} from "@omnia/fx";

import {OpenSpfxWebPartSettingsFormTopic } from "@omnia/fx/spfx"

import { MyLocalize } from '../../models/Localize';
import { MySettings } from '../../models/MySettings';
import { SettingsServiceConstructor, SettingsService, SecurityProviders } from '@omnia/fx/services';
import { TestSharepointService } from '../../services';

@Component
export default class TestSpfxComponent extends Vue implements IWebComponentInstance {
    @Prop() settingsKey: string;

    @Inject<SettingsServiceConstructor>(SettingsService, { securityProviderId: SecurityProviders.Tenant.Admin }) protected settingsService: SettingsService<any>;
    @Inject(TestSharepointService) private testService: TestSharepointService;
    @Localize("MyTest") private loc: MyLocalize;

    private settingsOpen: boolean = false;
    private settings: MySettings = {};

    created() {
        this.settingsService.getValue(this.settingsKey).then((settings) => {
            if (settings != null) {
                this.settings = settings;
            }
        });

        if (!this.settingsService.onKeyValueUpdated(this.settingsKey).isSubscribing(this.onNewSettings)) {
            this.settingsService.onKeyValueUpdated(this.settingsKey).subscribe(this.onNewSettings);
        }
    }

    mounted() {
        WebComponentBootstrapper.registerElementInstance(this, this.$el);

        OpenSpfxWebPartSettingsFormTopic(this.settingsKey).subscribe(this.subcribeOpenSettingForm);

        this.testService.getData();
    }

    beforeDestroy() {
        OpenSpfxWebPartSettingsFormTopic(this.settingsKey).unsubscribe(this.subcribeOpenSettingForm);
    }

    subcribeOpenSettingForm() {
        this.settingsOpen = true;
    }

    private onNewSettings(updatedValue: MySettings) {
        this.settings = updatedValue;
    }

    private openSettings() {
        this.settingsOpen = true;
    }

    private close() {
        this.settingsOpen = false;
    }


    render(h) {
        return (
            <div>
                <h1>Hello im a omnia spfx extension</h1>
                <h1>My Setting: {this.settings.name}</h1>
                {this.settingsOpen ?
                    <my-test-spfx-settings
                        opened={this.settingsOpen}
                        settingskey={this.settingsKey}
                        onClosed={this.close}>
                    </my-test-spfx-settings>
                    : null
                }
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, TestSpfxComponent);
});