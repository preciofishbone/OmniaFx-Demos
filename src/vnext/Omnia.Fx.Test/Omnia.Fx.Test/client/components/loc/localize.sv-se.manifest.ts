import { Composer } from "@omnia/tooling/composers";
import { Guid, LocaleNames } from "@omnia/fx/models";
import { MyLocalize } from "../../models/Localize";

Composer.registerManifest(new Guid("76ca491c-0fad-43e3-8478-058139f5ee4d"))
    .registerLocalization({ localeName: LocaleNames.SvSe })
    .namespace("mytest")
    .add<MyLocalize>({
        title: "My test"
    });