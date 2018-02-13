import { Composer } from '@omnia/fx/tooling';
Composer
    .registerManifest('710f5fca-4e9c-4be6-8065-036074dd35dc', 'omnia.pim.taskviewer.wc')
    .registerWebComponent({
        elementName: 'omnia-pim-taskviewer',
        entryPoint: './Taskviewer.component.tsx',
    })
    .withLoadRules()
    .loadByDomMatching({ cssSelector: '.omf-header' });
