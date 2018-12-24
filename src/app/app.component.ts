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
                name: "Setup base scenery",
                path: "base_scenery"
            },
            {
                name: "load model via babylon",
                path: "load_babylon"
            },
            {
                name: "interact with object",
                path: "interact_object"
            }
        ];
    }

}
