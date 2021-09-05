import './style.css'

import * as THREE from 'three';

// CONFIG 

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene, camera);


// GEOMETRY



// LIGHT


// MATERIAL


// MESH


const animate = () => {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();