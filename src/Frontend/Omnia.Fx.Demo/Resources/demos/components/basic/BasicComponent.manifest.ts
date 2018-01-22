import { Composer } from '@omnia/fx/tooling';

Composer
    .registerManifest('e7c63705-0542-48b7-9615-71c3846b1219', 'omnia.fx.demo.basicwc')
    .registerWebComponent({
        elementName: 'omniafx-demo-basic',
        entryPoint: './BasicComponent.tsx',
    })
    .withLoadRules()
    .loadByDomMatching({ cssSelector: '.omf-header' });
