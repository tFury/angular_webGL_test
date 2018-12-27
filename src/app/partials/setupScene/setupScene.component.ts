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
    baseComment: "setupScene.component.ts",
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
    templateUrl: "./setupScene.component.html",
    styleUrls: [
        "./setupScene.component.scss"
    ]
})
export class SetupSceneComponent implements OnInit {

    @ViewChild("babylonElement") babylonElement: ElementRef;

    private _camera: babylon.Camera;
    private _canvas: HTMLCanvasElement;
    private _engine: babylon.Engine;
    private _ground: babylon.Mesh;
    private _light: babylon.Light;
    private _scene: babylon.Scene;

    ngOnInit() {

        this._canvas = this.babylonElement.nativeElement;
        this._engine = new babylon.Engine(this._canvas, true);
        this._engine.enableOfflineSupport = false;

        this._scene = this._createScene(this._engine);
        this._camera = this.createFreeCamera(this._scene, this._canvas);
        this._light = this.createLight(this._scene, this._camera, new BABYLON.Vector3(5, 20, 15));
        this._ground = this.createGround(this._scene);

        this._engine.runRenderLoop(() => {
            this._scene.render();
        });
    }

    private _createScene(engine: babylon.Engine): babylon.Scene {
        let scene = new BABYLON.Scene(engine);
        scene.clearColor = new babylon.Color4(1.0, 1.0, 1.0, 1.0);
        scene.gravity = new BABYLON.Vector3(0, -0.1, 0);
        scene.collisionsEnabled = true;

        return scene;
    }

    private createFreeCamera(scene: babylon.Scene, canvas: HTMLCanvasElement): babylon.UniversalCamera {
        let camera = new BABYLON.UniversalCamera("uniCam",
            new babylon.Vector3(0, -8, -10),
            scene);
        camera.setTarget(new BABYLON.Vector3(0, -8, 0));
        camera.attachControl(canvas, true);
        camera.speed = 0.1;
        camera.applyGravity = true;
        camera.ellipsoid = new BABYLON.Vector3(0.3, 0.8, 0.2);
        camera.checkCollisions = true;
        camera.fov = 1;

        return camera;
    }

    private createLight(scene: babylon.Scene, camera: babylon.Camera, position: babylon.Vector3): babylon.Light {
        let light = new BABYLON.PointLight("PointLight", position, scene);
        light.parent = camera;
        light.intensity = 1.5;

        return light;
    }

    private createGround(scene: babylon.Scene): babylon.Mesh {
        var ground = BABYLON.Mesh.CreatePlane("ground", 20.0, scene);
        var material = new BABYLON.StandardMaterial("groundMat", scene);
        material.diffuseColor = this.calcColor3("#763622");
        material.backFaceCulling = false;

        ground.material = material;
        ground.position = new BABYLON.Vector3(5, -10, -15);
        ground.rotation = new BABYLON.Vector3(Math.PI / 2, 0, 0);

        ground.checkCollisions = true;

        return ground;
    }

    private calcColor3(colorCode: string): babylon.Color3 {
        const hex = colorCode.charAt(0) === "#" ? colorCode.substring(1, 7) : colorCode;
        var r = parseInt(hex.substring(0, 2), 16) / 255;
        var g = parseInt(hex.substring(2, 4), 16) / 255;
        var b = parseInt(hex.substring(4, 5), 16) / 255;

        return new babylon.Color3(r, g, b);
    }

}
