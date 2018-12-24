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

        this._babylonModel = new BabylonModel(this.babylonElement);
        let loader = new babylon.AssetsManager(this._babylonModel.scene);
        let task = loader.addMeshTask("complexeCube", "", "assets/", "complexeCube.babylon");
        babylon.OBJFileLoader.OPTIMIZE_WITH_UV = true;

        task.onSuccess = (object) => {

            for (const mesh of object.loadedMeshes) {
                console.log("mesh", object);

                mesh.position = new BABYLON.Vector3(0, -9, 0);
                mesh.checkCollisions = true;
            }
            console.log("onSuccess", object);
        };

        loader.load();


        this._babylonModel.engine.runRenderLoop(() => {
            this._babylonModel.scene.render();
        });
    }



}
