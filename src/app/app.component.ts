//#region IMPORTS
import { Router } from "@angular/router";
import { INavElement } from "../model/navigationElements/navElement";

import {
    Component,
    OnInit
} from "@angular/core";
//#endregion

//#region LOGGER
import {
    Logger,
    ELoglevel,
    ETransportType
} from "letslog";

const logger = new Logger({
    baseComment: "app.component.ts",
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

@Component({
    selector: "app",
    templateUrl: "./app.component.html",
    styleUrls: [
        "./app.component.scss"
    ]
})
export class AppComponent implements OnInit {

    navElements: INavElement[] = [];

    constructor(
        private router: Router,
    ) {
        logger.debug("Constructor AppComponent called");
    }

    ngOnInit() {
        this.navElements = this.getNavElements();
    }

    routeTo(path: string) {
        this.router.navigateByUrl(path);
    }

    private getNavElements(): INavElement[] {
        return [
            {
                name: "Main",
                path: "/"
            },
            {
                name: "Rotating Cube",
                path: "rotation_cube"
            },
            {
                name: "Drawing Line",
                path: "drawing_line"
            },
            {
                name: "Text",
                path: "text"
            },
            {
                name: "Object Loader",
                path: "object_loader"
            },
            {
                name: "Camera Animation",
                path: "camera_animation"
            },
            {
                name: "House Animation",
                path: "house_animation"
            }
        ];
    }

}
