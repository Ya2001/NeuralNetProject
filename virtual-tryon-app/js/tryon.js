console.log("Starting Babylon.js scene...");
const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas, true);
console.log("Babylon.js engine created.");

const createScene = function () {
    const scene = new BABYLON.Scene(engine);
    console.log("Scene created.");

    scene.clearColor = new BABYLON.Color3(1, 1, 1); // Set white background

    // const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
    // sphere.position.y = 1;
    // console.log("Sphere added to scene.");

    const camera = new BABYLON.ArcRotateCamera("camera1", -Math.PI / 2, Math.PI / 2.5, 10, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    console.log("Camera added to scene and attached to canvas.");

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
    light.intensity = 0.7;
    console.log("Light added to scene.");

    return scene;
};

const scene = createScene();
console.log("Scene fully created.");

engine.runRenderLoop(() => {
    scene.render();
    console.log("Rendering scene...");
});

window.addEventListener('resize', function () {
    engine.resize();
    console.log("Canvas resized.");
});

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        console.log("Camera access granted, stream:", stream);
        const videoElement = document.createElement('video');
        videoElement.srcObject = stream;
        videoElement.play();
        document.body.appendChild(videoElement); // Append the video element to the page for debugging
        console.log("Video element added to page.");
    })
    .catch(err => {
        console.error("Error accessing camera:", err);
    });
