

/*
PerspectiveCamera can take upto 5 arguments 

arg1 is Field of View. 45-75 is fine.

arg2 is aspect ratio. this is width/height of render.

arg3 and arg4 are near and far. which correspond to how near and far the camera can see.

dont use extreme values for near and far i.e. not too small/ not too big. Causes z fighting

0.1 and 100 are fine.

/////////////////////////////

OrthographicCamera

We provide how far the camera can see in each direction

arguments :-

left 

right

top

bottom

near 

far

To make sure that the object in the reder is not deformed keep the aspect ratio in mind


Example

const aspectRatio = sizes.width/sizes.height

const camera = new THREE.OrthographicCamera{-1*aspectRatio, 1*aspectRatio,1,-1,0.1,100}

//////////////////////////////////////////////////////


Mouse movement Event Listener

//To print x pixel value of mouse on movement
window.addEventListener('mousemove', (event)=>
{
    console.log(event.clientX)
})

//////////////////////////
3js controls


*/

import './style/main.css'

import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'



// Cursor
const cursor = {x:0, y:0}

window.addEventListener('mousemove', (event)=>
{
    cursor.x = event.clientX/sizes.width - 0.5 // To get the values between 0 and 1. 0.5 to even allow -ve values.

    cursor.y = -(event.clientY/sizes.height - 0.5)// To get the values between 0 and 1. Minus because in 3js y axis works differently. If this is not done then the object will move with the cursor rather than the camera moving.
    
})

// Scene
const scene = new THREE.Scene()

// Red Cube
const geometry = new THREE.BoxGeometry(1,1,1)

const material = new THREE.MeshBasicMaterial({color : 0xff0000})

const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)


// Sizes
const sizes = {
    width : 800,
    height : 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 3
scene.add(camera)


// Renderer
const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({
    canvas : canvas
})


renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)

// Controls

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
// controls.target.y = 1
// controls.update()

let time = Date.now()

// Animations

const clock = new THREE.Clock()

const animate = () =>
{

    const elapsedTime = clock.getElapsedTime()


    // mesh.rotation.y = 0.3 * elapsedTime * Math.PI * 2

    // camera.position.x = cursor.x *3;

    // camera.position.y = cursor.y *3;

    // sin, cos for full revolution around the cube and *3 to move a little away from the cube.
    // 2 pi because we only want one full revolution on moving cursor.  
    // camera.position.x = Math.sin(cursor.x*Math.PI*2) * 3;
    // camera.position.z = Math.cos(cursor.x*Math.PI*2) * 3;

    // camera.position.y = Math.sin(cursor.y)*5;

    
    // To make sure the camera is always looking at the cube
    // camera.lookAt(mesh.position) // No values in the vector means 0,0,0.


    /* Using 3js controls*/

    controls.update()


    renderer.render(scene, camera)

    window.requestAnimationFrame(animate)
}

animate()