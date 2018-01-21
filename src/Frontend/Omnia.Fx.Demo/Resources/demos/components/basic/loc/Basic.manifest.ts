import { Composer } from "@omnia/fx/tooling";
import { LocaleNames } from "@omnia/fx/src/models";
import { BasicComponentLoc } from "./BasicComponentLoc";

Composer
    .openResourceManifest("e7c63705-0542-48b7-9615-71c3846b1219")
    .registerLocalization()
    .namespace("Omnia.Fx.Demo.Basic")
    .add<BasicComponentLoc>({
        title: ' Component Title'
    })
    

