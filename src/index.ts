//#region IMPORTS
import "core-js/es7/reflect";
import "zone.js/dist/zone";
import "core-js/es6/reflect";
import "babylonjs-loaders";
import "cannon";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
//#endregion


platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
