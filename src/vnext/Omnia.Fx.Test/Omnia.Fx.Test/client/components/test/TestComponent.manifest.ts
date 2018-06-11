import { Composer } from '@omnia/tooling/composers';

Composer
    .registerManifest("c2ab7b2e-2e09-4f8c-8771-98174d161e07", "Omnia.Fx.Test.MyComponent")
    .registerWebComponent({
        elementName: "my-test",
        entryPoint: "./testcomponent.jsx"
    })
    .withLoadRules()
    .loadByUrlMatching({ startsWith: '/' });