let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
let cube = new THREE.Mesh(geometry, material);

let boxes = [];
let numBoxes = 9;
for (let x = -numBoxes; x <= numBoxes; x++) {
  for (let y = -numBoxes; y <= numBoxes; y++) {
    let geometry = new THREE.BoxGeometry(1, 1, 1);
    let material = new THREE.MeshNormalMaterial();
    let cube = new THREE.Mesh(geometry, material);

    cube.position.x = x * 1.1;
    cube.position.y = y * 1.1;
    boxes.push(cube);
    scene.add(cube);
  }
}

let step = 0;

camera.position.z = 15;

function animate() {
  requestAnimationFrame(animate);

  for (var box of boxes) {
    step += 0.0001;

    var x = box.position.x;
    var y = box.position.y;

    box.position.z = Math.sin(step + Math.sqrt(x * x + y * y));
  }

  renderer.render(scene, camera);
}
animate();
