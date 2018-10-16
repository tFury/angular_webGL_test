//#region IMPORTS
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
//#endregion

@Component({
    selector: "main",
    templateUrl: "./main.component.html",
})
export class MainComponent {

    constructor(
        private router: Router
    ) { }

}
