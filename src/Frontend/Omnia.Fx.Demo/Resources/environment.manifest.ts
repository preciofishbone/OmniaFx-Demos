import { Composer, DevelopmentEnvironment} from '@omnia/fx/tooling';

DevelopmentEnvironment.hosting
    .use({
        portNumber: 569,
        https: true,
        pfxPath: './iisexpress.pfx',
        pfxPassphrase: '!omnia!',
    });
