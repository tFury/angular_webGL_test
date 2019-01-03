//#region Imports
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes, RouterModule } from "@angular/router";

import { NavigationModule } from "../components/navigationPanel/navigationPanel.module";
import { MainComponent } from "./partials/main/main.component";
import { LoadBabylonComponent } from "./partials/loadBabylon/loadBabylon.component";
import { InteractObjectComponent } from "./partials/interactObject/interactObject.component";
import { SimpleTowerGameComponent } from "./partials/simpleTowerGame/simpleTowerGame.component";
import { SetupSceneComponent } from "./partials/setupScene/setupScene.component";
import { AppComponent } from "./app.component";
//#endregion

//#region LOGGER
import {
    Logger,
    ELoglevel,
    ETransportType
} from "letslog";

const logger = new Logger({
    baseComment: "app.module.ts",
    loglvl: ELoglevel.DEBUG,
    transports: [
        {
            showBaseComment: true,
            showDate: false,
            showLoglevel: true,
            type: ETransportType.console
        }
    ]
});
//#endregion

const appRoutes: Routes = [
    {
        path: "",
        component: MainComponent
    },
    {
        path: "load_babylon",
        component: LoadBabylonComponent
    },
    {
        path: "interact_object",
        component: InteractObjectComponent
    },
    {
        path: "base_scenery",
        component: SetupSceneComponent
    },
    {
        path: "Simple_tower_game",
        component: SimpleTowerGameComponent
    }
];

@NgModule({
    bootstrap: [
        AppComponent
    ],

    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false,
                onSameUrlNavigation: "reload",
                useHash: true
            }
        ),
        BrowserModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        NavigationModule,
    ],

    entryComponents: [
        AppComponent
    ],

    declarations: [
        AppComponent,
        LoadBabylonComponent,
        InteractObjectComponent,
        SimpleTowerGameComponent,
        SetupSceneComponent,
        MainComponent
    ],
})
export class AppModule {

    constructor(
    ) {
        logger.debug("Constructor of App.Module called");
    }

}
