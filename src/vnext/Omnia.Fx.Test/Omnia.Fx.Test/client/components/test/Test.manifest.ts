import { Composer } from '@omnia/tooling/composers';
import { Guid, FontAwesomeIcon } from "@omnia/fx/models"

Composer.registerManifest("70a65ae4-4c71-4f5e-a29b-bece97c98f57", "my.spfx.component.setting")
    .registerWebComponent({
        elementName: "my-test-spfx-settings",
        entryPoint: "./TestSpfxComponentSettings.jsx",
        typings: ["./ITestSpfxComponentSettings.ts"]
    });

Composer
    .registerManifest(new Guid("c2ab7b2e-2e09-4f8c-8771-98174d161e07"), "my.spfx.component")
    .registerWebComponent({
        elementName: "my-test-spfx",
        entryPoint: "./TestSpfxComponent.jsx"
    })
    .withDefinition({
        title: "$Localize:MyTest.Title;",
        description: "$Localize:MyTest.Title;",
        icon: new FontAwesomeIcon("fas fa-bell")
    })
    .registerSpfxWebpart()


Composer
    .registerManifest(new Guid("a187466d-7c32-421f-8238-3c5cac523856"), "my.omnia.component")
    .registerWebComponent({
        elementName: "my-test-omnia",
        entryPoint: "./TestOmniaComponent.jsx"
    })
    .withLoadRules()
    .loadByUrlMatching({ startsWith: '/' });
