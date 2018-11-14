//#region IMPORTS
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
// import "three/examples/js/loaders/OBJLoader";
// import * as THREE from "three";
//#endregion

//#region LOGGER
import { Logger, ELoglevel, ETransportType } from "letslog";

const logger = new Logger({
    baseComment: "app.module.ts",
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
    templateUrl: "./objectLoader.component.html",
    styleUrls: [
        "./objectLoader.component.scss"
    ]
})
export class ObjectLoaderComponent implements OnInit {

    @ViewChild("threeElement") threeElement: ElementRef;

    // scene: THREE.Scene;
    // camera: THREE.PerspectiveCamera;
    // renderer: THREE.WebGLRenderer;
    test = 1;

    ngOnInit() {
        // setTimeout(() => {

        //     const w = this.threeElement.nativeElement.clientHeight;
        //     const h = this.threeElement.nativeElement.clientWidth;
        //     logger.debug(`init w: ${w} - h: ${h}`);

        //     this.camera = new THREE.PerspectiveCamera(5, h / w, 0.1, 1000);
        //     this.camera.position.z = 0;

        //     this.scene = new THREE.Scene();

        //     var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
        //     this.scene.add( ambientLight );
        //     var pointLight = new THREE.PointLight( 0xffffff, 0.8 );
        //     this.camera.add( pointLight );
        //     this.scene.add( this.camera );



        //     this.renderer = new THREE.WebGLRenderer();
        //     this.renderer.setSize(h, w);

        //     this.camera.position.set(0, 0, 100);
        //     this.camera.lookAt(0, 0, 0);


        //     var loader = new THREE.OBJLoader();


        //     loader.load("assets/LetterA.obj",
        //         (object) => {

        //             object.rotateX(270/180*Math.PI);
        //             object.rotateZ(-40/180*Math.PI);

        //             console.log("Camera", this.camera);

        //             this.scene.add(object);
        //             // debugger;
        //             this.threeElement.nativeElement.appendChild(this.renderer.domElement);
        //             this.animate(object);
        //         },
        //         (xhr) => {
        //             console.log((xhr.loaded / xhr.total * 100) + "% loaded");
        //         },
        //         (error) => {
        //             console.log("An error happened");
        //         }
        //     );


        // }, 300);
    }

    animate(object: any) {

        // object.rotation.x += 0.01;
        // object.rotation.y += 0.01;

        // requestAnimationFrame(() => this.animate(object));
        // this.renderer.render(this.scene, this.camera);
    }

}
