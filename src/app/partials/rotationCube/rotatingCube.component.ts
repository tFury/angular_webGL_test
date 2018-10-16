//#region IMPORTS
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from "three";
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
    templateUrl: "./rotatingCube.component.html",
    styleUrls: [
        "./rotatingCube.component.scss"
    ]
})
export class RotatingCubeComponent implements OnInit {

    @ViewChild("threeElement") threeElement: ElementRef;

    scene: Scene;
    camera: PerspectiveCamera;
    renderer: WebGLRenderer;

    geometry: BoxGeometry;
    material: MeshBasicMaterial;
    cube: Mesh;

    ngOnInit() {
        setTimeout(() => {

            const w = this.threeElement.nativeElement.clientHeight;
            const h = this.threeElement.nativeElement.clientWidth;

            logger.debug(`init w: ${w} - h: ${h}`);
            // debugger;
            this.scene = new Scene();
            this.camera = new PerspectiveCamera(75, h / w, 0.1, 1000);
            this.renderer = new WebGLRenderer();

            this.geometry = new BoxGeometry(1, 1, 1);
            this.material = new MeshBasicMaterial({ color: 0x00ff00 });
            this.cube = new Mesh(this.geometry, this.material);

            this.renderer.setSize(h, w);

            this.scene.add(this.cube);

            this.camera.position.z = 5;

            this.threeElement.nativeElement.appendChild(this.renderer.domElement);


            this.animate();
        }, 300);
    }

    animate() {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;

        requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);
    }

}
