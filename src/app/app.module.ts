//#region Imports
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes, RouterModule } from "@angular/router";

import { NavigationModule } from "../components/navigationPanel/navigationPanel.module";
import { MainComponent } from "./partials/main/main.component";
import { LoadObjectComponent } from "./partials/loadObject/loadObject.component";
import { LoadBabylonComponent } from "./partials/loadBabylon/loadBabylon.component";
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
        path: "load_object",
        component: LoadObjectComponent
    },
    {
        path: "load_babylon",
        component: LoadBabylonComponent
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
        LoadObjectComponent,
        LoadBabylonComponent,
        MainComponent
    ],
})
export class AppModule {

    constructor(
    ) {
        logger.debug("Constructor of App.Module called");
    }

}
