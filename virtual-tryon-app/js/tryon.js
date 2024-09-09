// No need to import Babylon.js when using the CDN
const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas, true);

const createScene = function () {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera1", -Math.PI / 2, Math.PI / 2.5, 10, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    camera.setTarget(BABYLON.Vector3.Zero());

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
    light.intensity = 0.7;

    return scene;
};

const scene = createScene();

engine.runRenderLoop(() => {
    scene.render();
});

window.addEventListener('resize', function () {
    engine.resize();
});

// Handle camera permissions
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        console.log("Camera access granted");
        // Set up camera access here
    })
    .catch(err => {
        console.error("Error accessing camera:", err);
    });
