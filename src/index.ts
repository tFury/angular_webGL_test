//#region IMPORTS
import "core-js/es7/reflect";
import "zone.js/dist/zone";
import "core-js/es6/reflect";

// import "three/examples/js/loaders/OBJLoader";
// import "three/examples/js/loaders/MTLLoader";
// import "three/examples/js/loaders/GLTFLoader";
// import "three/examples/js/loaders/ColladaLoader";
import "babylonjs-loaders";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
//#endregion


platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
    