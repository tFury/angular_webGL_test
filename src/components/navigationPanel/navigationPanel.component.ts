//#region IMPORTS
import { INavElement } from "../../model/navigationElements/navElement";
import { Router } from "@angular/router";

import {
    Component,
    Input,
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
    selector: "navigation-panel",
    templateUrl: "./navigationPanel.component.html",
    styleUrls: [
        "./navigationPanel.component.scss"
    ]
})
export class NavigationPanelComponent implements OnInit {

    @Input() elements: INavElement[] = [];

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        logger.info("NavigationPanelComponent");
    }

    action(element: INavElement) {
        this.router.navigateByUrl(element.path);
    }
}
