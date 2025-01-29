// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { TransformControls } from "three/examples/jsm/controls/TransformControls";

// class SceneSetup {
//   constructor() {
//     this.scene = new THREE.Scene();
//     this.camera = new THREE.PerspectiveCamera(
//       95,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       100
//     );
//     this.camera.position.set(9.5, 8.5, 2.5); // Set initial camera position
//     this.renderer = new THREE.WebGLRenderer({ antialias: true });
//     this.renderer.setSize(window.innerWidth, window.innerHeight);
//     document
//       .getElementById("canvas-container")
//       .appendChild(this.renderer.domElement);
//     this.controls = new OrbitControls(this.camera, this.renderer.domElement);

//     this.transformControls = new TransformControls(
//       this.camera,
//       this.renderer.domElement
//     );
//     this.scene.add(this.transformControls);

//     this.setupScene();
//     this.setupLights();
//     this.createGrid();
//     this.setupControls();
//     this.setupEventListeners();
//     this.setupDragAndDrop();
//     this.animate();
//   }

//   setupScene() {
//     // Add any initial setup for the scene here
//     this.createBoundingBox();
//   }

//   createBoundingBox() {
//     const boxWidth = 30; // Width of the bounding box
//     const boxHeight = 15; // Height of the bounding box
//     const boxDepth = 30; // Depth of the bounding box

//     const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
//     const edges = new THREE.EdgesGeometry(geometry);
//     const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
//     const boundingBox = new THREE.LineSegments(edges, material);

//     boundingBox.position.set(0, boxHeight / 2, 0); // Position the bounding box so it starts from the ground level
//     this.scene.add(boundingBox);
//   }

//   setupLights() {
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     this.scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(5, 5, 5).normalize();
//     this.scene.add(directionalLight);
//   }

//   createGrid() {
//     const gridHelper = new THREE.GridHelper(30, 30);
//     this.scene.add(gridHelper);
//   }

//   setupControls() {
//     this.controls.enableDamping = true;
//     this.controls.dampingFactor = 0.25;
//     this.controls.enableZoom = true;

//     this.transformControls.addEventListener("dragging-changed", (event) => {
//       this.controls.enabled = !event.value;
//     });
//   }

//   setupEventListeners() {
//     window.addEventListener("resize", this.onWindowResize.bind(this), false);
//   }

//   onWindowResize() {
//     this.camera.aspect = window.innerWidth / window.innerHeight;
//     this.camera.updateProjectionMatrix();
//     this.renderer.setSize(window.innerWidth, window.innerHeight);
//   }

//   setupDragAndDrop() {
//     const shapeItems = document.querySelectorAll("#sidebar .model-item");
//     shapeItems.forEach((item) => {
//       item.addEventListener("dragstart", this.onDragStart.bind(this));
//     });

//     this.renderer.domElement.addEventListener(
//       "dragover",
//       this.onDragOver.bind(this)
//     );
//     this.renderer.domElement.addEventListener("drop", this.onDrop.bind(this));
//   }

//   onDragStart(event) {
//     event.dataTransfer.setData("text/plain", event.target.dataset.shape);
//     console.log(`Drag started: ${event.target.dataset.shape}`); // Debug log
//   }

//   onDragOver(event) {
//     event.preventDefault();
//     console.log("Drag over"); // Debug log
//   }

//   onDrop(event) {
//     event.preventDefault();
//     const shape = event.dataTransfer.getData("text/plain");
//     console.log(`Dropped shape: ${shape}`); // Debug log
//     this.createShape(shape);
//   }

//   createShape(shape) {
//     let geometry;
//     switch (shape) {
//       case "circle":
//         geometry = new THREE.CircleGeometry(3, 32);
//         break;
//       case "rectangle":
//         geometry = new THREE.BoxGeometry(6, 3, 0.3);
//         break;
//       case "square":
//         geometry = new THREE.BoxGeometry(3, 3, 3);
//         break;
//       default:
//         console.error(`Unknown shape: ${shape}`);
//         return;
//     }

//     const material = new THREE.MeshStandardMaterial({ color: 0x606060 });
//     const mesh = new THREE.Mesh(geometry, material);
//     mesh.position.set(0, 0, 0); // Set initial position of the shape
//     this.scene.add(mesh);
//     console.log(`Shape ${shape} created and added to scene`);
//     this.transformControls.attach(mesh); // Attach transform controls to the new shape
//   }

//   animate() {
//     requestAnimationFrame(this.animate.bind(this));
//     this.controls.update();
//     this.renderer.render(this.scene, this.camera);
//   }
// }

// // Create instance when the window loads
// window.addEventListener("load", () => {
//   new SceneSetup();
// });

// 2

// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { TransformControls } from "three/examples/jsm/controls/TransformControls";

// class SceneSetup {
//   constructor() {
//     this.scene = new THREE.Scene();
//     this.camera = new THREE.PerspectiveCamera(
//       95,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       100
//     );
//     this.camera.position.set(10.5, 50.5, 8.5); // Set initial camera position
//     this.renderer = new THREE.WebGLRenderer({ antialias: true });
//     this.renderer.setSize(window.innerWidth, window.innerHeight);
//     document
//       .getElementById("canvas-container")
//       .appendChild(this.renderer.domElement);
//     this.controls = new OrbitControls(this.camera, this.renderer.domElement);

//     this.transformControls = new TransformControls(
//       this.camera,
//       this.renderer.domElement
//     );
//     this.scene.add(this.transformControls);

//     this.points = [];
//     this.setupEventListeners();
//     this.pointMeshes = [];

//     this.setupScene();
//     this.setupLights();
//     this.createGrid();
//     this.setupControls();
//     this.setupDragAndDrop();
//     this.animate();
//   }

//   setupScene() {
//     // Add any initial setup for the scene here
//     this.createBoundingBox();
//   }

//   createBoundingBox() {
//     const boxWidth = 30; // Width of the bounding box
//     const boxHeight = 15; // Height of the bounding box
//     const boxDepth = 30; // Depth of the bounding box

//     const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
//     const edges = new THREE.EdgesGeometry(geometry);
//     const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
//     const boundingBox = new THREE.LineSegments(edges, material);

//     boundingBox.position.set(0, boxHeight / 2, 0); // Position the bounding box so it starts from the ground level
//     this.scene.add(boundingBox);

//     this.boundingBox = new THREE.Box3().setFromObject(boundingBox);
//   }

//   setupLights() {
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     this.scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(5, 5, 5).normalize();
//     this.scene.add(directionalLight);
//   }

//   createGrid() {
//     const gridHelper = new THREE.GridHelper(30, 30);
//     this.scene.add(gridHelper);
//   }

//   setupControls() {
//     this.controls.enableDamping = true;
//     this.controls.dampingFactor = 0.25;
//     this.controls.enableZoom = true;

//     this.transformControls.addEventListener("dragging-changed", (event) => {
//       this.controls.enabled = !event.value;
//     });
//   }

//   setupEventListeners() {
//     window.addEventListener("resize", this.onWindowResize.bind(this), false);
//     this.renderer.domElement.addEventListener(
//       "click",
//       this.onMouseClick.bind(this),
//       false
//     );
//   }

//   onWindowResize() {
//     this.camera.aspect = window.innerWidth / window.innerHeight;
//     this.camera.updateProjectionMatrix();
//     this.renderer.setSize(window.innerWidth, window.innerHeight);
//   }

//   setupDragAndDrop() {
//     const shapeItems = document.querySelectorAll("#sidebar .model-item");
//     shapeItems.forEach((item) => {
//       item.addEventListener("dragstart", this.onDragStart.bind(this));
//     });

//     this.renderer.domElement.addEventListener(
//       "dragover",
//       this.onDragOver.bind(this)
//     );
//     this.renderer.domElement.addEventListener("drop", this.onDrop.bind(this));
//   }

//   onDragStart(event) {
//     event.dataTransfer.setData("text/plain", event.target.dataset.shape);
//     console.log(`Drag started: ${event.target.dataset.shape}`); // Debug log
//   }

//   onDragOver(event) {
//     event.preventDefault();
//     console.log("Drag over"); // Debug log
//   }

//   onDrop(event) {
//     event.preventDefault();
//     const shape = event.dataTransfer.getData("text/plain");
//     console.log(`Dropped shape: ${shape}`); // Debug log
//     this.shapeType = shape; // Set the shape type for the next shape creation
//   }

//   onMouseClick(event) {
//     // Convert mouse click position to normalized device coordinates (NDC)
//     const mouse = new THREE.Vector2();
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//     // Raycast from the camera to the scene
//     const raycaster = new THREE.Raycaster();
//     raycaster.setFromCamera(mouse, this.camera);

//     // Find intersections with objects in the scene
//     const intersects = raycaster.intersectObjects(this.scene.children);

//     if (intersects.length > 0) {
//       const point = intersects[0].point;
//       this.points.push(point);

//       if (this.points.length === 2) {
//         this.createGeometryBetweenPoints();
//         this.points = []; // Reset points for next selection
//       }
//     }
//   }
//   createGeometryBetweenPoints() {
//     const point1 = this.points[0];
//     const point2 = this.points[1];

//     // Calculate the distance between the two points
//     const distance = point1.distanceTo(point2);

//     // Create a line between the two points
//     const lineGeometry = new THREE.BufferGeometry().setFromPoints([
//       point1,
//       point2,
//     ]);
//     // const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
//     // const line = new THREE.Line(lineGeometry, lineMaterial);
//     // this.scene.add(line);

//     // Alternatively, create a cylinder between the two points
//     const direction = new THREE.Vector3().subVectors(point2, point1);
//     const orientation = new THREE.Matrix4();
//     orientation.lookAt(point1, point2, new THREE.Vector3(0, 0, 1));
//     orientation.multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2));

//     const cylinderGeometry = new THREE.CylinderGeometry(0.6, 0.6, distance, 32);
//     const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
//     cylinder.position.copy(point1).add(point2).multiplyScalar(0.5);
//     cylinder.applyMatrix4(orientation);
//     this.scene.add(cylinder);

//     // Attach transform controls to the new shape
//     this.transformControls.attach(cylinder);
//   }
//   isPointInsideBoundingBox(point) {
//     return this.boundingBox.containsPoint(point);
//   }

//   highlightPoint(point) {
//     const geometry = new THREE.SphereGeometry(0.1, 16, 16);
//     const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
//     const sphere = new THREE.Mesh(geometry, material);
//     sphere.position.copy(point);
//     this.scene.add(sphere);
//     this.pointMeshes.push(sphere);
//   }

//   clearHighlightedPoints() {
//     this.pointMeshes.forEach((mesh) => {
//       this.scene.remove(mesh);
//     });
//     this.pointMeshes = [];
//   }

//   createShapeFromPoints(point1, point2) {
//     const dimensions = new THREE.Vector3().subVectors(point2, point1);
//     dimensions.set(
//       Math.abs(dimensions.x),
//       Math.abs(dimensions.y),
//       Math.abs(dimensions.z)
//     );
//     const midpoint = new THREE.Vector3()
//       .addVectors(point1, point2)
//       .multiplyScalar(0.5);

//     let geometry;
//     switch (this.shapeType) {
//       case "circle":
//         const radius = dimensions.length() / 2;
//         geometry = new THREE.CircleGeometry(radius, 32);
//         break;
//       case "rectangle":
//         geometry = new THREE.BoxGeometry(dimensions.x, dimensions.y, 0.1);
//         break;
//       case "square":
//         const size = Math.max(dimensions.x, dimensions.y);
//         geometry = new THREE.BoxGeometry(size, size, 0.1);
//         break;
//       default:
//         console.error(`Unknown shape: ${this.shapeType}`);
//         return;
//     }

//     const material = new THREE.MeshStandardMaterial({ color: 0x606060 });
//     const mesh = new THREE.Mesh(geometry, material);
//     mesh.position.copy(midpoint); // Position at the midpoint
//     this.scene.add(mesh);
//     console.log(`Shape ${this.shapeType} created and added to scene`); // Debug log

//     // Attach transform controls to the new shape
//     this.transformControls.attach(mesh);
//   }

//   animate() {
//     requestAnimationFrame(this.animate.bind(this));
//     this.controls.update();
//     this.renderer.render(this.scene, this.camera);
//   }
// }

// // Create instance when the window loads
// window.addEventListener("load", () => {
//   new SceneSetup();
// });

//3

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TransformControls } from "three/examples/jsm/controls/TransformControls";

class SceneSetup {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      95,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.camera.position.set(10.5, 50.5, 8.5); // Set initial camera position
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document
      .getElementById("canvas-container")
      .appendChild(this.renderer.domElement);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.transformControls = new TransformControls(
      this.camera,
      this.renderer.domElement
    );
    this.scene.add(this.transformControls);

    this.points = [];
    this.pointMeshes = [];

    this.setupScene();
    this.setupLights();
    this.createGrid();
    this.setupControls();
    this.setupEventListeners();
    this.setupDragAndDrop();
    this.animate();
  }

  setupScene() {
    // Add any initial setup for the scene here
    this.createBoundingBox();
  }

  createBoundingBox() {
    const boxWidth = 30; // Width of the bounding box
    const boxHeight = 15; // Height of the bounding box
    const boxDepth = 30; // Depth of the bounding box

    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const edges = new THREE.EdgesGeometry(geometry);
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const boundingBox = new THREE.LineSegments(edges, material);

    boundingBox.position.set(0, boxHeight / 2, 0); // Position the bounding box so it starts from the ground level
    this.scene.add(boundingBox);

    this.boundingBox = new THREE.Box3().setFromObject(boundingBox);
  }

  setupLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    this.scene.add(directionalLight);
  }

  createGrid() {
    const gridHelper = new THREE.GridHelper(30, 30);
    this.scene.add(gridHelper);
  }

  setupControls() {
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
    this.controls.enableZoom = true;

    this.transformControls.addEventListener("dragging-changed", (event) => {
      this.controls.enabled = !event.value;
    });
  }

  setupEventListeners() {
    window.addEventListener("resize", this.onWindowResize.bind(this), false);
    this.renderer.domElement.addEventListener(
      "click",
      this.onMouseClick.bind(this),
      false
    );
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  setupDragAndDrop() {
    const shapeItems = document.querySelectorAll("#sidebar .model-item");
    shapeItems.forEach((item) => {
      item.addEventListener("dragstart", this.onDragStart.bind(this));
    });

    this.renderer.domElement.addEventListener(
      "dragover",
      this.onDragOver.bind(this)
    );
    this.renderer.domElement.addEventListener("drop", this.onDrop.bind(this));
  }

  onDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.dataset.shape);
    console.log(`Drag started: ${event.target.dataset.shape}`); // Debug log
  }

  onDragOver(event) {
    event.preventDefault();
    console.log("Drag over"); // Debug log
  }

  onDrop(event) {
    event.preventDefault();
    const shape = event.dataTransfer.getData("text/plain");
    console.log(`Dropped shape: ${shape}`); // Debug log
    this.createShape(shape);
  }

  createShape(shape) {
    let geometry;
    switch (shape) {
      case "circle":
        geometry = new THREE.CircleGeometry(7, 32);
        break;
      case "rectangle":
        geometry = new THREE.BoxGeometry(14, 6, 2);
        break;
      case "square":
        geometry = new THREE.BoxGeometry(8, 8, 8);
        break;
      default:
        console.error(`Unknown shape: ${shape}`);
        return;
    }

    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, 0); // Set initial position of the shape
    this.scene.add(mesh);
    console.log(`Shape ${shape} created and added to scene`); // Debug log
    this.transformControls.attach(mesh); // Attach transform controls to the new shape
  }

  onMouseClick(event) {
    // Convert mouse click position to normalized device coordinates (NDC)
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Raycast from the camera to the scene
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, this.camera);

    // Find intersections with objects in the scene
    const intersects = raycaster.intersectObjects(this.scene.children);

    if (intersects.length > 0) {
      const point = intersects[0].point;
      this.points.push(point);

      if (this.points.length === 2) {
        this.createGeometryBetweenPoints();
        this.points = []; // Reset points for next selection
      }
    }
  }

  createGeometryBetweenPoints() {
    const point1 = this.points[0];
    const point2 = this.points[1];

    // Calculate the distance between the two points
    const distance = point1.distanceTo(point2);

    // Create a line between the two points
    const lineGeometry = new THREE.BufferGeometry().setFromPoints([
      point1,
      point2,
    ]);
    // const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
    // const line = new THREE.Line(lineGeometry, lineMaterial);
    // this.scene.add(line);

    // Alternatively, create a cylinder between the two points
    const direction = new THREE.Vector3().subVectors(point2, point1);
    const orientation = new THREE.Matrix4();
    orientation.lookAt(point1, point2, new THREE.Vector3(0, 0, 1));
    orientation.multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2));

    const cylinderGeometry = new THREE.CylinderGeometry(0.6, 0.6, distance, 32);
    const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder.position.copy(point1).add(point2).multiplyScalar(0.5);
    cylinder.applyMatrix4(orientation);
    this.scene.add(cylinder);

    // Attach transform controls to the new shape
    this.transformControls.attach(cylinder);
  }

  isPointInsideBoundingBox(point) {
    return this.boundingBox.containsPoint(point);
  }

  highlightPoint(point) {
    const geometry = new THREE.SphereGeometry(0.1, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.copy(point);
    this.scene.add(sphere);
    this.pointMeshes.push(sphere);
  }

  clearHighlightedPoints() {
    this.pointMeshes.forEach((mesh) => {
      this.scene.remove(mesh);
    });
    this.pointMeshes = [];
  }

  createShapeFromPoints(point1, point2) {
    const dimensions = new THREE.Vector3().subVectors(point2, point1);
    dimensions.set(
      Math.abs(dimensions.x),
      Math.abs(dimensions.y),
      Math.abs(dimensions.z)
    );
    const midpoint = new THREE.Vector3()
      .addVectors(point1, point2)
      .multiplyScalar(0.5);

    let geometry;
    switch (this.shapeType) {
      case "circle":
        const radius = dimensions.length() / 2;
        geometry = new THREE.CircleGeometry(radius, 32);
        break;
      case "rectangle":
        geometry = new THREE.BoxGeometry(dimensions.x, dimensions.y, 0.1);
        break;
      case "square":
        const size = Math.max(dimensions.x, dimensions.y);
        geometry = new THREE.BoxGeometry(size, size, 0.1);
        break;
      default:
        console.error(`Unknown shape: ${this.shapeType}`);
        return;
    }

    const material = new THREE.MeshStandardMaterial({ color: 0x606060 });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(midpoint); // Position at the midpoint
    this.scene.add(mesh);
    console.log(`Shape ${this.shapeType} created and added to scene`); // Debug log

    // Attach transform controls to the new shape
    this.transformControls.attach(mesh);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}

// Create instance when the window loads
window.addEventListener("load", () => {
  new SceneSetup();
});
