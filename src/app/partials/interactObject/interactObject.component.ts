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
    baseComment: "interactObject.component.ts",
    loglvl: ELoglevel.TRACE,
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
    templateUrl: "./interactObject.component.html",
    styleUrls: [
        "./interactObject.component.scss"
    ]
})
export class InteractObjectComponent implements OnInit {

    @ViewChild("babylonElement") babylonElement: ElementRef;

    private _babylonModel: BabylonModel;
    private inSelection = false;
    private selectedMesh: babylon.AbstractMesh;

    ngOnInit() {

        this._babylonModel = new BabylonModel(this.babylonElement);

        this._babylonModel.engine.runRenderLoop(() => {
            this._babylonModel.scene.render();
        });

        this.loadMesh();

        this.babylonElement.nativeElement.addEventListener("pointerdown", (e) => {
            var pickInfo = this._babylonModel.scene.pick(
                this._babylonModel.scene.pointerX,
                this._babylonModel.scene.pointerY,
                (mesh) => {
                    return mesh.state === "dragable" ? true : false;
                }
            );
            if (pickInfo.hit) {

                this.inSelection = !this.inSelection;
                if (this.inSelection) {
                    this.selectedMesh = pickInfo.pickedMesh;
                } else {
                    this.selectedMesh = null;
                }
            }
        }, false);

        this.babylonElement.nativeElement.addEventListener("pointermove", () => {
            if (this.inSelection) {
                this.selectedMesh.rotate(new babylon.Vector3(0, 0, 1), 20);
            }
        }, false);
    }

    private loadMesh() {
        let loader = new babylon.AssetsManager(this._babylonModel.scene);
        let task1 = loader.addMeshTask("simpleCubeGreen", "", "assets/", "simpleCubeGreen.babylon");
        babylon.OBJFileLoader.OPTIMIZE_WITH_UV = true;

        task1.onSuccess = (object) => {
            for (const mesh of object.loadedMeshes) {
                logger.info(mesh);
                mesh.checkCollisions = true;
                mesh.state = "dragable";
                mesh.setAbsolutePosition(new BABYLON.Vector3(0, 1, 0));
                console.log(mesh.absolutePosition);
            }
        };

        let task2 = loader.addMeshTask("simpleCubeRed", "", "assets/", "simpleCubeRed.babylon");
        babylon.OBJFileLoader.OPTIMIZE_WITH_UV = true;

        task2.onSuccess = (object) => {
            for (const mesh of object.loadedMeshes) {
                logger.info(mesh);
                mesh.checkCollisions = true;
                mesh.state = "dragable";
                mesh.setAbsolutePosition(new BABYLON.Vector3(5, 1, 5));
                console.log(mesh.absolutePosition);
            }
        };
        loader.load();
    }

}
