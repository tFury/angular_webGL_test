//#region IMPORTS
import { BaseScenary } from "../../../model/threeElements/baseScenary";
import {
    Component,
    OnInit,
    ViewChild,
    ElementRef
} from "@angular/core";
import {
    Mesh,
    TextGeometry,
    BufferGeometry,
    MeshPhongMaterial,
    FontLoader,
    DirectionalLight,
    PointLight
} from "three";
//#endregion

//#region LOGGER
import {
    Logger,
    ELoglevel,
    ETransportType
} from "letslog";

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

    baseScenary: BaseScenary;

    font;

    ngOnInit() {
        setTimeout(() => {

            this.baseScenary = new BaseScenary(this.threeElement.nativeElement);

            var dirLight = new DirectionalLight(0xffffff, 0.125);
            dirLight.position.set(0, 0, 1).normalize();
            this.baseScenary.addToScene(dirLight);

            var pointLight = new PointLight(0xffffff, 1.5);
            pointLight.position.set(0, 100, 90);
            this.baseScenary.addToScene(pointLight);

            let text = null;

            var loader = new FontLoader();
            loader.load("assets/optimer_bold.typeface.json", (response) => {
                this.font = response;

                text = new TextGeometry("text", {
                    font: this.font,
                    size: 70,
                    height: 20,
                    curveSegments: 4,
                    bevelThickness: 2,
                    bevelSize: 1.5,
                    bevelEnabled: true
                });

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

                this.baseScenary.addToScene(textMesh1);

                setInterval(() => {

                    textMesh1.rotation.x += 0.01;
                    textMesh1.rotation.y += 0.01;
                });

                this.baseScenary.camera.position.z = 150;
                this.baseScenary.animate();
            });

        }, 300);
    }
}
