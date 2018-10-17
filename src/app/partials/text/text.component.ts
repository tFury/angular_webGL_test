//#region IMPORTS
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
    Scene, PerspectiveCamera, WebGLRenderer,
    BoxGeometry, MeshBasicMaterial, Mesh, LineBasicMaterial, Geometry, Vector3, Line, TextGeometry, BufferGeometry, MeshPhongMaterial, FontLoader, DirectionalLight, PointLight
} from "three";
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
    templateUrl: "./text.component.html",
    styleUrls: [
        "./text.component.scss"
    ]
})
export class TextComponent implements OnInit {

    @ViewChild("threeElement") threeElement: ElementRef;

    scene: Scene;
    camera: PerspectiveCamera;
    renderer: WebGLRenderer;
    test = 1;
    font;

    ngOnInit() {
        setTimeout(() => {

            const w = this.threeElement.nativeElement.clientHeight;
            const h = this.threeElement.nativeElement.clientWidth;

            logger.debug(`init w: ${w} - h: ${h}`);
            this.scene = new Scene();
            this.camera = new PerspectiveCamera(100, h / w, 0.1, 1500);
            this.renderer = new WebGLRenderer();
            this.renderer.setSize(h, w);

            this.camera.position.set(0, 0, 100);
            this.camera.lookAt(0, 0, 0);

            var dirLight = new DirectionalLight(0xffffff, 0.125);
            dirLight.position.set(0, 0, 1).normalize();
            this.scene.add(dirLight);

            var pointLight = new PointLight(0xffffff, 1.5);
            pointLight.position.set(0, 100, 90);
            this.scene.add(pointLight);
            let text = null;

            var loader = new FontLoader();
            loader.load("assets/" + "optimer" + "_" + "bold" + ".typeface.json", (response) => {
                this.font = response;


                try {
                    text = new TextGeometry("text", {
                        font: this.font,
                        size: 70,
                        height: 20,
                        curveSegments: 4,
                        bevelThickness: 2,
                        bevelSize: 1.5,
                        bevelEnabled: true
                    });
                } catch (error) {
                    console.error(error);
                }
                text.computeBoundingBox();
                text.computeVertexNormals();


                var centerOffset = -0.5 * (text.boundingBox.max.x - text.boundingBox.min.x);

                let textGeo = new BufferGeometry().fromGeometry(text);
                let materials = [
                    new MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
                    new MeshPhongMaterial({ color: 0xffffff }) // side
                ];
                let textMesh1 = new Mesh(textGeo, materials);
                textMesh1.position.x = centerOffset;
                textMesh1.position.y = 0;
                textMesh1.position.z = 0;
                textMesh1.rotation.x = 0;
                textMesh1.rotation.y = Math.PI * 2;

                this.scene.add(textMesh1);

                this.threeElement.nativeElement.appendChild(this.renderer.domElement);
                this.animate();

            });

        }, 300);
    }

    animate() {
        try {
            this.camera.rotateZ(0.005);
            requestAnimationFrame(() => this.animate());
            this.renderer.render(this.scene, this.camera);
        } catch (error) {
            console.error(error);
        }
    }


}
