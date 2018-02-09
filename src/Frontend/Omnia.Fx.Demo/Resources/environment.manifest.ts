import { Composer, DevelopmentEnvironment} from '@omnia/fx/tooling';
import {pfxPassphrase} from '../tools/configs.consts';

DevelopmentEnvironment.hosting
    .use({
        portNumber: 569,
        https: true,
        pfxPath: './tools/certificate.pfx',
        pfxPassphrase: pfxPassphrase,
    });
