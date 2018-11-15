import * as babylon from "babylonjs";
import { ElementRef } from "@angular/core";

export class BabylonModel {

    private _engine: babylon.Engine;
    private _scene: babylon.Scene;
    private _camera: babylon.Camera;
    private _light: babylon.Light;
    private _ground: babylon.Mesh;
    private _canvas: HTMLCanvasElement;

    public get scene(): babylon.Scene {
        return this._scene;
    }

    public get engine(): babylon.Engine {
        return this._engine;
    }

    constructor(canvasElement: ElementRef) {
        this._canvas = canvasElement.nativeElement;
        this._engine = new babylon.Engine(this._canvas, true);
        this._engine.enableOfflineSupport = false;

        this._scene = this.createScene(this._engine);
        this._camera = this.createFreeCamera(this._scene, this._canvas);
        this._light = this.createLight(this._scene, this._camera);
        this._ground = this.createGround(this._scene);
    }

    private createScene(engine: babylon.Engine): babylon.Scene {
        let scene = new BABYLON.Scene(engine);
        scene.clearColor = new babylon.Color4(1.0, 1.0, 1.0, 1.0);
        scene.gravity = new BABYLON.Vector3(0, -0.1, 0);
        scene.collisionsEnabled = true;

        return scene;
    }

    private createGround(scene: babylon.Scene): babylon.Mesh {
        var ground = BABYLON.Mesh.CreatePlane("ground", 100.0, scene);
        var material = new BABYLON.StandardMaterial("groundMat", scene);
        material.diffuseColor = this.calcColor3("#763622");
        material.backFaceCulling = false;

        ground.material = material;
        ground.position = new BABYLON.Vector3(5, -10, -15);
        ground.rotation = new BABYLON.Vector3(Math.PI / 2, 0, 0);

        ground.checkCollisions = true;

        return ground;
    }

    private createFreeCamera(scene: babylon.Scene, canvas: HTMLCanvasElement): babylon.UniversalCamera {
        let camera = new BABYLON.UniversalCamera("uniCam",
            new babylon.Vector3(0, -8, -20),
            scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(canvas, true);
        camera.speed = 0.1;
        camera.applyGravity = true;
        camera.ellipsoid = new BABYLON.Vector3(0.3, 0.8, 0.2);
        camera.checkCollisions = true;
        camera.fov = 1;

        return camera;
    }

    private createArcCamera(scene: babylon.Scene, canvas: HTMLCanvasElement): babylon.ArcRotateCamera {
        let camera = new BABYLON.ArcRotateCamera("arcCam",
            BABYLON.Tools.ToRadians(0),
            BABYLON.Tools.ToRadians(0),
            10.0,
            new BABYLON.Vector3(5, 20, 15),
            scene);
        camera.attachControl(canvas, true);
        return camera;
    }

    private createLight(scene: babylon.Scene, camera: babylon.Camera): babylon.Light {
        let light = new BABYLON.PointLight("PointLight", new BABYLON.Vector3(5, 20, 15), scene);
        light.parent = camera;
        light.intensity = 1.5;

        return light;
    }

    private calcColor3(colorCode: string): babylon.Color3 {
        const hex = colorCode.charAt(0) === "#" ? colorCode.substring(1, 7) : colorCode;
        var r = parseInt(hex.substring(0, 2), 16) / 255;
        var g = parseInt(hex.substring(2, 4), 16) / 255;
        var b = parseInt(hex.substring(4, 5), 16) / 255;

        return new babylon.Color3(r, g, b);
    }
}
