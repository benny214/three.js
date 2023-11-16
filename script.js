import * as THREE from 'three';
//сцена
const scene = new THREE.Scene();

//объект
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 'purple'});
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

//Камера 
const sizes = {
	width: 600,
	height: 600
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.y = 1;

scene.add(camera);

const canvas = document.querySelector('.canvas');

const renderer = new THREE.WebGL1Renderer({ canvas });

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera);
