import * as THREE from 'three';

import './style.css';

//сцена
const scene = new THREE.Scene();

const axesHelper = new THREE.AxesHelper(3);

scene.add(axesHelper)

//объект
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
	color: 'purple',
	wireframe: true
});
const mesh = new THREE.Mesh(geometry, material);
// mesh.position.x = -.3;
// mesh.position.y = -.3;
// mesh.position.z = .2;

mesh.scale.x = .5;
mesh.scale.y = 2;
mesh.scale.z = .7;

scene.add(mesh);

//Камера 
const sizes = {
	width: 600,
	height: 600
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

scene.add(camera);

const canvas = document.querySelector('.canvas');

const renderer = new THREE.WebGL1Renderer({ canvas });

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera);
