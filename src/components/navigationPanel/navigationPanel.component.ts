//#region IMPORTS
import { INavElement } from "../../model/navigationElements/navElement";
import { Router } from "@angular/router";

import {
    Component,
    Input,
    OnInit
} from "@angular/core";
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
        console.log("NavigationPanelComponent");
    }

    action(element: INavElement) {
        this.router.navigateByUrl(element.path);
    }
}
