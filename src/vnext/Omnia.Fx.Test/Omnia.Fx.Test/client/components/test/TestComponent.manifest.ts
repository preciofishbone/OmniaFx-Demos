import { Composer } from '@omnia/tooling/composers';
import { Guid } from "@omnia/fx/models"
import { FontAwesomeIcon } from '@omnia/fx-models/Icon';
import "@omnia/fx/spfx/tooling";

Composer
    .registerManifest(new Guid("c2ab7b2e-2e09-4f8c-8771-98174d161e07"), "omnia.fx.test.mycomponent")
    .registerWebComponent({
        elementName: "my-test",
        entryPoint: "./TestComponent.jsx"
    })
    .withDefinition({
        title: "$Localize:MyTest.Title;",
        description: "$Localize:MyTest.Title;",
        icon: new FontAwesomeIcon("fas fa-bell")
    })
    .registerSpfxWebpart()
    //.withLoadRules()
    //.loadByUrlMatching({ startsWith: '/' });

Composer
    .registerManifest(new Guid("a187466d-7c32-421f-8238-3c5cac523856"), "omnia.fx.test.mycomponent2")
    .registerWebComponent({
        elementName: "my-test-2",
        entryPoint: "./TestComponent2.jsx"
    })
    .withLoadRules()
    .loadByUrlMatching({ startsWith: '/' });
