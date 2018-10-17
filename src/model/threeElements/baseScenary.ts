//#region IMPORTS
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Object3D
} from "three";
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

    scene: Scene;
    camera: PerspectiveCamera;
    renderer: WebGLRenderer;

    private baseElement: HTMLElement;
    private width: number;
    private heigth: number;

    constructor(htmlElement: HTMLElement) {
        logger.debug("constructor called");

        this.baseElement = htmlElement;
        this.width = this.baseElement.clientWidth;
        this.heigth = this.baseElement.clientHeight;

        const fov = 75;
        const aspect = this.heigth/this.width;
        const near = 0.1;
        const far = 2000;

        this.scene = new Scene();

        this.camera = new PerspectiveCamera(fov, aspect, near, far);
        this.camera.position.z = 5;
        this.camera.lookAt(0, 0, 0);

        this.renderer = new WebGLRenderer();

        this.renderer.setSize(this.heigth, this.width);
        this.baseElement.appendChild(this.renderer.domElement);

    }

    /**
     * addToScene
     * @param object a 3D Object to set to scene
     */
    public addToScene(object: Object3D) {
        this.scene.add(object);
    }

    /**
     * animate
     */
    public animate() {
        requestAnimationFrame(() => {
            this.animate();
        });
        this.render();
    }

    private render() {
        this.renderer.render(this.scene, this.camera);
    }

}