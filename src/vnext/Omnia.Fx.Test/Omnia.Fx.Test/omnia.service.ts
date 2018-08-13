import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from "@omnia/fx/models"
import * as serve from "@omnia/tooling-vue/src/tasks/serve"

Composer
    .registerManifest(new Guid("03df96b6-c29d-4d45-ba79-d84b8bee9b2c"), "Omnia.Fx.Test")
    .registerService({ description: "Description of Omnia.Fx.Test" })
    .AsWebApp()
    .withBuildOptions({
        include: ["client"],
        bundleOptions: {
            commonsChunk: {
                name: new Guid("9e7a893e-9657-4ff2-82c4-038d2e4cb8d6"),
                minChunks:2
            }
        }
    });

  
