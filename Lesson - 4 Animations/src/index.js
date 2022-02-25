import './style/main.css'

import * as THREE from 'three'

import gsap from 'gsap'

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
// camera.position.y = 1
// camera.position.x = 1
scene.add(camera)


// Renderer
const canvas = document.querySelector(".webgl")

const renderer = new THREE.WebGLRenderer({
    canvas : canvas
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)

// let time = Date.now()

// Animations

// MEHTOD -1 

// deltaTime is used to make sure the animation runs at same fps for everyone.
// const animate = () =>
// {

//     const currentTime = Date.now()

//     const deltaTime = currentTime - time

//     time = currentTime
 
//     mesh.rotation.y += 0.01 * deltaTime

//     renderer.render(scene, camera)

//     window.requestAnimationFrame(animate)
// }

// animate()

/////////////////////////////////////////////////////////

// METHOD-2

// Using internal clock of 3js


// const clock = new THREE.Clock()

// const animate = () =>
// {

//     const elapsedTime = clock.getElapsedTime()

//     mesh.rotation.y = elapsedTime    // for simple rotation about y axis.
//     mesh.rotation.y = elapsedTime * Math.PI * 2 // for simple rotation about y axis one complete revolution per unit time.

//     mesh.rotation.y = Math.sin(elapsedTime)  // for oscillory rotations

//     mesh.position.y = Math.sin(elapsedTime) // for oscillatory motion and rotation about y axis.

//     mesh.position.x = Math.cos(elapsedTime) // for oscillatory motuon about x axis

//     renderer.render(scene, camera)

//     window.requestAnimationFrame(animate)
// }


// animate()

// METHOD - 3

// Using gsap for animation

gsap.to(mesh.position, {x:2, duration:1, delay:1})
gsap.to(mesh.position, {x:0, duration:1, delay:2})


const animate = () =>
{


    renderer.render(scene, camera)

    window.requestAnimationFrame(animate)
}

animate()