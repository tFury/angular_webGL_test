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

//#region LOGGER
import {
    Logger,
    ELoglevel,
    ETransportType
} from "letslog";

const logger = new Logger({
    baseComment: "loadBabylon.component.ts",
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

        this._babylonModel = new BabylonModel(this.babylonElement);

        let loader = new babylon.AssetsManager(this._babylonModel.scene);
        let task = loader.addMeshTask("complexeCube", "", "assets/", "complexeCube.babylon");
        babylon.OBJFileLoader.OPTIMIZE_WITH_UV = true;

        task.onSuccess = (object) => {

            for (const iterator of object.loadedMeshes) {
                iterator.position = new BABYLON.Vector3(0, -9, 0);
                iterator.checkCollisions = true;
            }
            console.log("onSuccess", object);
        };

        loader.load();


        this._babylonModel.engine.runRenderLoop(() => {
            this._babylonModel.scene.render();
        });
    }



}
