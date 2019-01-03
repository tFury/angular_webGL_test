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
import { restoreView } from "@angular/core/src/render3";

const logger = new Logger({
    baseComment: "simpleTowerGame.component.ts",
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
    templateUrl: "./simpleTowerGame.component.html",
    styleUrls: [
        "./simpleTowerGame.component.scss"
    ]
})
export class SimpleTowerGameComponent implements OnInit {

    @ViewChild("babylonElement") babylonElement: ElementRef;

    private _babylonModel: BabylonModel;

    ngOnInit() {
        this._babylonModel = new BabylonModel(this.babylonElement);


        let a = new babylon.OBJFileLoader();

        babylon.SceneLoader.LoadAssetContainerAsync("assets/", "towerGameCube.babylon", this._babylonModel.scene)
            .then((res) => {
                res.meshes[0].state = "dragable";


                let ankleInGrad = 90 * Math.PI / 180;
                let countRow = 0;
                let numberOfBlocks = 60;
                let test = res.meshes[0];


                res.meshes.pop();

                for (let i = 0; i < numberOfBlocks; i++) {


                    let newMeshes = test.clone(`cube-${i}`, null);
                    res.meshes.push(this.makePhysicsObject(newMeshes, this._babylonModel.scene, 1, i));
                }

                for (let i = 0; i < numberOfBlocks; i++) {

                    let blockPos = i % 3;

                    if (countRow % 2 === 0) {
                        res.meshes[i].setAbsolutePosition(new babylon.Vector3(0, 0.5 * countRow, 2.5 * blockPos));
                    }

                    if (countRow % 2 === 1) {
                        res.meshes[i].setAbsolutePosition(new babylon.Vector3(2.5 * blockPos - 3, 0.5 * countRow, 1));
                        res.meshes[i].rotate(new babylon.Vector3(0, 1, 0), ankleInGrad);
                    }

                    if (i % 3 === 2) {
                        countRow++;
                    }

                }
                res.removeAllFromScene();
                res.addAllToScene();

                this._babylonModel.engine.runRenderLoop(() => {
                    this._babylonModel.scene.render();
                });
            })
            .catch(e => logger.error("ERROR", e));

        this.babylonElement.nativeElement.addEventListener("pointerdown", (e) => {
            var pickInfo = this._babylonModel.scene.pick(
                this._babylonModel.scene.pointerX,
                this._babylonModel.scene.pointerY,
                (mesh) => {
                    return mesh.state === "dragable" ? true : false;
                }
            );
            if (pickInfo.hit) {

                let i = this._babylonModel.scene.meshes.findIndex((a) => {
                    if (a.name === pickInfo.pickedMesh.parent.name) {
                        return true;
                    }
                });
                console.log("###", i);
                this._babylonModel.scene.meshes.splice(i, 1);
                logger.info("####", pickInfo);
            }
        }, false);

    }

    makePhysicsObject(newMeshe: any, scene: any, scaling: any, i: number) {
        var physicsRoot = new BABYLON.Mesh(`physicsRoot-${i}`, scene);
        physicsRoot.position.y -= 0.9;
        newMeshe.isVisible = true;
        physicsRoot.addChild(newMeshe);

        physicsRoot.getChildMeshes().forEach((m) => {
                m.scaling.x = Math.abs(m.scaling.x);
                m.scaling.y = Math.abs(m.scaling.y);
                m.scaling.z = Math.abs(m.scaling.z);
                m.physicsImpostor = new BABYLON.PhysicsImpostor(m, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0.1 }, scene);
        });

        physicsRoot.scaling.scaleInPlace(scaling);
        physicsRoot.physicsImpostor = new BABYLON.PhysicsImpostor(physicsRoot,
            BABYLON.PhysicsImpostor.BoxImpostor, { mass: 3 }, scene);

        return physicsRoot;
    }



}

