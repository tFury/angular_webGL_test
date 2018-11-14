//#region IMPORTS
import { BaseScenary } from "../../../model/threeElements/baseScenary";
import {
    Component,
    OnInit,
    ViewChild,
    ElementRef
} from "@angular/core";
// import {
//     LineBasicMaterial,
//     Geometry,
//     Vector3,
//     Line,
//     AmbientLight,
//     PointLight,
//     OBJLoader,
//     Group,
//     MTLLoader,
//     GLTFLoader,
//     ColladaLoader
// } from "three";
// import { GLTFLoader } from "three/examples/js/loaders/GLTFLoader";
// import { GLTFLoader as GLTFLoaderType } from "../../../helper";
//#endregion


//#region LOGGER
import {
    Logger,
    ELoglevel,
    ETransportType
} from "letslog";

const logger = new Logger({
    baseComment: "cameraAnimation.component.ts",
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
    templateUrl: "./cameraAnimation.component.html",
    styleUrls: [
        "./cameraAnimation.component.scss"
    ]
})
export class CameraAnimationComponent implements OnInit {

    @ViewChild("threeElement") threeElement: ElementRef;

    private baseSenary: BaseScenary;
    // object: Group;

    ngOnInit() {
        setTimeout(() => {

            this.baseSenary = new BaseScenary(this.threeElement.nativeElement);



            // var ambientLight = new AmbientLight(0xcccccc, 0.4);
            // var pointLight = new PointLight(0xffffff, 0.8);
            // this.baseSenary.addToScene(ambientLight);
            // this.baseSenary.addToScene(pointLight);


            // var objLoader = new OBJLoader();
            // var mtlLoader = new MTLLoader();
            // var gltfLoader = new GLTFLoader();
            // var colladeLoader = new ColladaLoader();

            // colladeLoader.load("assets/test.dae", (res) => {
            //     this.baseSenary.addToScene(res.scene);
            //     this.baseSenary.animate();
            //     document.addEventListener("keydown", (event) => { this.rotateObject(event); }, false);
            // });

            // gltfLoader.load("assets/ship.gltf", (gltf) => {
            //     // debugger;
            //     this.object = (gltf as any).scene;
            //     this.baseSenary.addToScene(this.object);


            //     this.baseSenary.animate();
            //     document.addEventListener("keydown", (event) => { this.rotateObject(event); }, false);
            // }, undefined, (e) => {
            //     console.error( e );
            // } );

            // mtlLoader.load("assets/ship.mtl", (material) => {
            //     material.preload();
            //     objLoader.setMaterials(material);

            //     objLoader.load("assets/ship.obj",
            //         (object) => {
            //             this.object = object;

            //             // object.rotateX(0 / 180 * Math.PI);
            //             object.rotateY(180 / 180 * Math.PI);
            //             // object.rotateZ(30 / 180 * Math.PI);

            //             this.baseSenary.addToScene(object);
            //             this.baseSenary.animate();

            //             document.addEventListener("keydown", (event) => { this.rotateObject(event); }, false);

            //         },
            //         (xhr) => {
            //             console.log((xhr.loaded / xhr.total * 100) + "% loaded");
            //         },
            //         (error) => {
            //             console.log("An error happened");
            //         }
            //     );
            // });

        }, 300);
    }

    rotateObject(event: KeyboardEvent) {
        console.log("EVENT", event);

        // switch (event.keyCode) {
        //     case 37:
        //         this.object.rotateX(1/180*Math.PI);
        //         break;

        //     case 38:
        //         this.object.rotateY(1/180*Math.PI);
        //         break;

        //     case 39:
        //         this.object.rotateX(-1/180*Math.PI);
        //         break;

        //     case 40:
        //         this.object.rotateY(-1/180*Math.PI);

        //         break;

        //     default:
        //         break;
        // }

    }

}
