//#region IMPORTS
import { BaseScenary } from "../../../model/threeElements/baseScenary";

import {
    Component,
    OnInit,
    ViewChild,
    ElementRef
} from "@angular/core";
// import {
//     Scene,
//     PerspectiveCamera,
//     WebGLRenderer,
//     BoxGeometry,
//     MeshBasicMaterial,
//     Mesh
// } from "three";
//#endregion

//#region LOGGER
import {
    Logger,
    ELoglevel,
    ETransportType
} from "letslog";
import { interval } from "rxjs";

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

    baseScenary: BaseScenary;

    // geometry: BoxGeometry;
    // material: MeshBasicMaterial;
    // cube: Mesh;

    ngOnInit() {
        // setTimeout(() => {

        //     this.baseScenary = new BaseScenary(this.threeElement.nativeElement);

        //     this.geometry = new BoxGeometry(1, 1, 1);
        //     this.material = new MeshBasicMaterial({ color: 0x00ff00 });
        //     this.cube = new Mesh(this.geometry, this.material);

        //     this.baseScenary.addToScene(this.cube);
        //     this.baseScenary.animate();

        //     setInterval(() => {
        //         this.cube.rotation.x += 0.01;
        //         this.cube.rotation.y += 0.01;
        //     }, 1000/60);

        // }, 300);
    }
}
