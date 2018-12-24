//#region IMPORTS
import { BabylonModel } from "../../../model/babylon/babylonModel";
import * as babylon from "babylonjs";

import {
    Component,
    OnInit,
    ViewChild,
    ElementRef
} from "@angular/core";
//#endregion

@Component({
    selector: "main",
    templateUrl: "./loadBabylon.component.html",
    styleUrls: [
        "./loadBabylon.component.scss"
    ]
})
export class LoadBabylonComponent implements OnInit {

    @ViewChild("babylonElement") babylonElement: ElementRef;

    private _babylonModel: BabylonModel;

    ngOnInit() {
        //
    }



}
