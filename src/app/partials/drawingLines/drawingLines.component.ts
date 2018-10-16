//#region IMPORTS
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh, LineBasicMaterial, Geometry, Vector3, Line } from "three";
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
    templateUrl: "./drawingLines.component.html",
    styleUrls: [
        "./drawingLines.component.scss"
    ]
})
export class DrawingLineComponent implements OnInit {

    @ViewChild("threeElement") threeElement: ElementRef;

    scene: Scene;
    camera: PerspectiveCamera;
    renderer: WebGLRenderer;
    test = 1;

    ngOnInit() {
        setTimeout(() => {

            const w = this.threeElement.nativeElement.clientHeight;
            const h = this.threeElement.nativeElement.clientWidth;

            logger.debug(`init w: ${w} - h: ${h}`);
            this.scene = new Scene();
            this.camera = new PerspectiveCamera(75, h / w, 0.1, 1000);
            this.renderer = new WebGLRenderer();
            this.renderer.setSize(h, w);

            this.camera.position.set(0, 0, 100);
            this.camera.lookAt(0, 0, 0);



            var material = new LineBasicMaterial( { color: 0x0000ff } );

            var geometry = new Geometry();
            geometry.vertices.push(new Vector3( -10, 0, 0) );
            geometry.vertices.push(new Vector3( 0, 10, 0) );
            geometry.vertices.push(new Vector3( 10, 0, 0) );

            var line = new Line( geometry, material );

            this.scene.add( line );

            this.threeElement.nativeElement.appendChild(this.renderer.domElement);
            this.animate();
        }, 300);
    }

    animate() {
        this.camera.rotateZ(0.005);
        requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);
    }

}
