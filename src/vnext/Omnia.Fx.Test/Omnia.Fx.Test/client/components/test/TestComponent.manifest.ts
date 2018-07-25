import { Composer } from '@omnia/tooling/composers';
import { Guid } from "@omnia/fx/models"

Composer
    .registerManifest(new Guid("c2ab7b2e-2e09-4f8c-8771-98174d161e07"), "omnia.fx.test.mycomponent")
    .registerWebComponent({
        elementName: "my-test",
        entryPoint: "./testcomponent.jsx"
    })
    .withLoadRules()
    .loadByUrlMatching({ startsWith: '/' });