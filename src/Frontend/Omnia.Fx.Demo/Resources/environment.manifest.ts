import { Composer, DevelopmentEnvironment} from '@omnia/fx/tooling';
import {PFX_PASSWORD} from '../tools/configs.consts';

DevelopmentEnvironment.hosting
    .use({
        portNumber: 569,
        https: true,
        pfxPath: './tools/certificate.pfx',
        pfxPassphrase: PFX_PASSWORD,
    });
