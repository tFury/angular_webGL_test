//#region IMPORTS
import * as babylon from "babylonjs";
import "babylonjs-loaders";
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
import { load } from "@angular/core/src/render3";

const logger = new Logger({
    baseComment: "houseAnimation.component.ts",
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
    templateUrl: "./houseAnimation.component.html",
    styleUrls: [
        "./houseAnimation.component.scss"
    ]
})
export class HouseAnimationComponent implements OnInit {

    @ViewChild("babylonElement") babylonElement: ElementRef;

    private _canvas: HTMLCanvasElement;
    private _engine: babylon.Engine;
    private _scene: babylon.Scene;
    private _camera: babylon.ArcRotateCamera;
    private _light: babylon.Light;

    ngOnInit() {
        this._canvas = this.babylonElement.nativeElement;
        this._engine = new babylon.Engine(this._canvas, true);
        this._engine.enableOfflineSupport = false;
        this._scene = this.createScene(this._engine);
        this._camera = this.createCamera(this._scene, this._canvas);
        this._light = this.createLight(this._scene, this._camera);

        BABYLON.SceneLoader.ImportMesh("", "assets/", "object.babylon",
            this._scene, (newMeshes) => {
                newMeshes.forEach((mesh) => {
                    mesh.rotation = new BABYLON.Vector3(BABYLON.Tools.ToRadians(
                        45), 0, 0);
                });
            });

        this._engine.runRenderLoop(() => {
            this._scene.render();
        });
    }

    private createScene(engine: babylon.Engine): babylon.Scene {
        let scene = new BABYLON.Scene(engine);
        scene.clearColor = new babylon.Color4(1.0, 1.0, 1.0, 1.0);

        return scene;
    }

    private createCamera(scene: babylon.Scene, canvas: HTMLCanvasElement): babylon.ArcRotateCamera {
        let camera = new BABYLON.ArcRotateCamera("arcCam",
            BABYLON.Tools.ToRadians(0),
            BABYLON.Tools.ToRadians(0),
            10.0,
            new BABYLON.Vector3(5, 20, 15),
            scene);
        camera.attachControl(canvas, true);
        return camera;
    }

    private createLight(scene: babylon.Scene, camera: babylon.ArcRotateCamera): babylon.Light {
        let light = new BABYLON.PointLight("PointLight", new BABYLON.Vector3(5, 20, 15), scene);
        light.parent = camera;
        light.intensity = 1.5;

        return light;
    }


}
