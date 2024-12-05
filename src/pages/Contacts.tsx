import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import {
  Engine,
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  Mesh,
  MeshBuilder,
} from "@babylonjs/core";

const Contacts = () => {
  // create the canvas html element and attach it to the webpage
  const canvas = document.createElement("canvas");
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.id = "gameCanvas";
  document.body.appendChild(canvas);

  // initialize babylon scene and engine
  const engine = new Engine(canvas, true);
  const scene = new Scene(engine);

  const camera: ArcRotateCamera = new ArcRotateCamera(
    "Camera",
    Math.PI / 2,
    Math.PI / 2,
    2,
    Vector3.Zero(),
    scene
  );
  camera.attachControl(canvas, true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const light1: HemisphericLight = new HemisphericLight(
    "light1",
    new Vector3(1, 1, 0),
    scene
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sphere: Mesh = MeshBuilder.CreateSphere(
    "sphere",
    { diameter: 1 },
    scene
  );

  // hide/show the Inspector
  window.addEventListener("keydown", (ev) => {
    // Shift+Ctrl+Alt+I
    if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.key === "i") {
      if (scene.debugLayer.isVisible()) {
        scene.debugLayer.hide();
      } else {
        scene.debugLayer.show();
      }
    }
  });

  // run the main render loop
  engine.runRenderLoop(() => {
    scene.render();
  });

  return (
    <div>
      <h1>Contacts</h1>
      <img width={200} src="/image.jpg" />
      <img width={200} src="/image-3.jpg" />
      {Array.from({ length: 1000 }).map((_, index) => (
        <p key={index}>Filler content to simulate a large component...</p>
      ))}
    </div>
  );
};

export default Contacts;
