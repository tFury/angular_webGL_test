//#region IMPORTS
// import {
//     Scene,
//     PerspectiveCamera,
//     WebGLRenderer,
//     Object3D,
//     Color,
//     GridHelper,
//     OrthographicCamera,
//     AmbientLight,
//     PointLight,
//     OrbitControls
// } from "three";
// import "three/examples/js/controls/OrbitControls.js";
//#endregion

//#region LOGGER
import {
    Logger,
    ELoglevel,
    ETransportType
} from "letslog";

const logger = new Logger({
    baseComment: "baseScenary.ts",
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

export class BaseScenary {

    // scene: Scene;
    // camera: PerspectiveCamera;
    // renderer: WebGLRenderer;

    private baseElement: HTMLElement;
    private width: number;
    private heigth: number;

    constructor(htmlElement: HTMLElement) {
        logger.debug("constructor called");

        // this.baseElement = htmlElement;
        // this.width = this.baseElement.clientWidth;
        // this.heigth = this.baseElement.clientHeight;

        // const fov = 25;
        // const aspect = this.width / this.heigth;
        // const near = 1;
        // const far = 1000;
        // const gridHelper = new GridHelper(10, 20);

        // this.scene = new Scene();
        // // this.scene.background = new Color( 0xf0f0f0 );

        // this.camera = new PerspectiveCamera(fov, aspect, near, far);
        // // this.camera.position.set(15, 50, -15);
        // this.camera.position.set(25, 25, 0);
        // // this.camera.position.x = 15;
        // // this.camera.position.y = 10;
        // // this.camera.position.z = -15;
        // this.camera.lookAt(0, 0, 0);

        // // var ambientLight = new AmbientLight(0xffffff, 0.2);
        // // this.addToScene(ambientLight);

        // var pointLight = new PointLight(0xffffff, 0.8);
        // this.scene.add(this.camera);
        // this.camera.add(pointLight);


        // this.addToScene(gridHelper);

        // this.renderer = new WebGLRenderer({ antialias: true });
        // this.renderer.setPixelRatio(window.devicePixelRatio);
        // this.renderer.setSize(this.width, this.heigth);
        // this.baseElement.appendChild(this.renderer.domElement);

        // // const controls = new OrbitControls( this.camera, this.renderer.domElement );
        // // (controls as any).screenSpacePanning = true;
        // // controls.minDistance = 5;
        // // controls.maxDistance = 40;
        // // controls.target.set( 0, 2, 0 );
        // // controls.update();


    }

    // /**
    //  * addToScene
    //  * @param object a 3D Object to set to scene
    //  */
    // public addToScene(object: Object3D) {
    //     this.scene.add(object);
    // }

    // /**
    //  * animate
    //  */
    // public animate() {
    //     requestAnimationFrame(() => {
    //         this.animate();
    //     });
    //     this.render();
    // }

    // private render() {
    //     this.renderer.render(this.scene, this.camera);
    // }

}