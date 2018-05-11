import { Composer } from '@omnia/tooling/composers';

Composer
    .registerManifest('95870f51-a7b1-4d73-868c-4814fbac263f', "Omnia Fx Demos")
    .registerService({ description: "Omnia Fx Demos" })
    .AsWebApp()