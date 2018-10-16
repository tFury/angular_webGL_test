//#region Imports
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavigationModule } from "../components/navigationPanel/navigationPanel.module";
import { DrawingLineComponent } from "./partials/drawingLines/drawingLines.component";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./partials/main/main.component";

import { RotatingCubeComponent } from "./partials/rotationCube/rotatingCube.component";
import { ObjectLoaderComponent } from "./partials/objectLoad/objectLoader.component";


import { AppComponent } from "./app.component";
//#endregion

//#region LOGGER
import { Logger, ELoglevel, ETransportType } from "letslog";
import { TextComponent } from "./partials/text/text.component";

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
        path: "rotation_cube",
        component: RotatingCubeComponent
    },
    {
        path: "drawing_line",
        component: DrawingLineComponent
    },
    {
        path: "text",
        component: TextComponent
    },
    {
        path: "object_loader",
        component: ObjectLoaderComponent
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
        RotatingCubeComponent,
        DrawingLineComponent,
        ObjectLoaderComponent,
        TextComponent,
        MainComponent
    ],
})
export class AppModule {

    constructor(
    ) {
        logger.debug("Constructor of App.Module called");
    }

}
