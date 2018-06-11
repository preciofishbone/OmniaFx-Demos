import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";

Composer
    .registerManifest("03df96b6-c29d-4d45-ba79-d84b8bee9b2c", "Omnia.Fx.Test")
    .registerService({ description: "Description of Omnia.Fx.Test" })
    .AsWebApp()
    .withBuildOptions({
        include: ["client"],
        moduleOptions: {}
    });
  
   