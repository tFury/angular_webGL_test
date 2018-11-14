//#region Imports
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes, RouterModule } from "@angular/router";

import { NavigationModule } from "../components/navigationPanel/navigationPanel.module";
import { MainComponent } from "./partials/main/main.component";
import { DrawingLineComponent } from "./partials/drawingLines/drawingLines.component";
import { RotatingCubeComponent } from "./partials/rotationCube/rotatingCube.component";
import { ObjectLoaderComponent } from "./partials/objectLoad/objectLoader.component";
import { TextComponent } from "./partials/text/text.component";
import { AppComponent } from "./app.component";
import { CameraAnimationComponent } from "./partials/cameraAnimation/cameraAnimation.component";
import { HouseAnimationComponent } from "./partials/house/houseAnimation.component";
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
    },
    {
        path: "camera_animation",
        component: CameraAnimationComponent
    },
    {
        path: "house_animation",
        component: HouseAnimationComponent
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
        CameraAnimationComponent,
        HouseAnimationComponent,
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
