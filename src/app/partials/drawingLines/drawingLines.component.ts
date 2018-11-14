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
//     Line
// } from "three";
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
    templateUrl: "./drawingLines.component.html",
    styleUrls: [
        "./drawingLines.component.scss"
    ]
})
export class DrawingLineComponent implements OnInit {

    @ViewChild("threeElement") threeElement: ElementRef;

    private baseSenary: BaseScenary;

    ngOnInit() {
        setTimeout(() => {

            // this.baseSenary = new BaseScenary(this.threeElement.nativeElement);

            // var material = new LineBasicMaterial({ color: 0x0000ff });
            // var geometry = new Geometry();

            // geometry.vertices.push(new Vector3(-1, 0, 0));
            // geometry.vertices.push(new Vector3(0, 1, 0));
            // geometry.vertices.push(new Vector3(1, 0, 0));

            // var line = new Line(geometry, material);

            // this.baseSenary.addToScene(line);

            // setInterval(() => {
            //     line.rotation.x += 0.01;
            //     line.rotation.y += 0.01;
            // }, 1000 / 60);

            // this.baseSenary.animate();

        }, 300);
    }

}
