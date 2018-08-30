import Vue from 'vue';
import { Component, Watch, Prop } from 'vue-property-decorator';
import {
    vueCustomElement,
    IWebComponentInstance,
    WebComponentBootstrapper,
    Localize,
    Inject
} from "@omnia/fx";

import { SettingsServiceConstructor, SettingsService } from "@omnia/fx/services";
import { SettingsPaneModel } from '@omnia/fx/ux';
import { MyLocalize } from '../../models/Localize';
import { MySettings } from '../../models/MySettings';
import { ITestSpfxComponentSettings } from './ITestSpfxComponentSettings';
import { TestSharepointService } from '../../services';

@Component
export default class TestSpfxComponentSettings extends Vue implements IWebComponentInstance, ITestSpfxComponentSettings {
    @Prop() opened: boolean;
    @Prop() settingsKey: string;
    @Prop() onClosed: () => void;

    @Inject<SettingsServiceConstructor>(SettingsService) protected settingsService: SettingsService<MySettings>;
    @Inject(TestSharepointService) private testService: TestSharepointService;
    @Localize("MyTest") private loc: MyLocalize;

    private settingsPaneModel: SettingsPaneModel = { visible: this.opened }
    private settings: MySettings = {};

    created() {
        this.settingsService.getValue(this.settingsKey).then((settings) => {
            if (settings != null) {
                this.settings = settings;
            }
        });
    }

    mounted() {
        WebComponentBootstrapper.registerElementInstance(this, this.$el);
    }

    // close dialog
    private close() {
        this.settingsPaneModel.visible = false;

        if (this.onClosed) {
            this.onClosed();
        }
    }

    //save settings
    private save(): Promise<boolean> {
        return new Promise<boolean>((resolveSaved) => {
            this.settingsService.setValue(this.settingsKey, this.settings).then((savedSettings) => {
                this.settings = savedSettings;
                resolveSaved(true);
                this.close();
            });
        });
    }

    render(h) {
        if (this.settingsPaneModel.visible) {
            return (
                <omfx-settings-pane
                    contentClass="omfx-theme"
                    headerClass="omfx-theme-primary-bg"
                    title={this.loc.WebpartSettingFormTitle}
                    model={this.settingsPaneModel}
                    onSave={this.save}
                    onCancel={this.close}
                    showButtons={true}>
                    <div>
                        <v-text-field v-model={this.settings.name} label={this.loc.Title}></v-text-field>
                    </div>
                </omfx-settings-pane>
            );
        } else {
            return null;
        }
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, TestSpfxComponentSettings);
});