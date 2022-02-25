/*
Resize the renderer using sizes 

remove margins,etc using css

add event listener for resizing

update camera in it

update renderer in it

handle different pixel ratio using setPixelRatio(window.devicePixelRatio)

handle fullscreen
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
    width : window.innerWidth,
    height : window.innerHeight
}

window.addEventListener('resize',()=>
{
    // Update sizes on tab resizing
    sizes.width = window.innerWidth,
    sizes.height = window.innerHeight

    // Update camera

    camera.aspect = sizes.width/sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
})

window.addEventListener('dblclick',()=>
{
    // Double click for fullscreen and again for exiting fullsreen

    //webkit chek is needed for it to work on safari also. Otherwise all the webkit code can be removed.

    const fullscreenElement = document.fullscreenElement || document.webkitfullscreenElement

    if(!fullscreenElement)
        {
            if(canvas.requestFullscreen)
                canvas.requestFullscreen()
            else if(canvas.webkitRequestFullScreen)
                canvas.webkitRequestFullScreen()
        }
    else
    {
        if(document.exitFullscreen())
            document.exitFullscreen()
        else if(document.webkitExitFullScreen())
            document.webkitExitFullScreen()      
    }
})

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

// Controls

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

let time = Date.now()

// Animations

const clock = new THREE.Clock()

const animate = () =>
{

    const elapsedTime = clock.getElapsedTime()

    controls.update()

    renderer.render(scene, camera)

    window.requestAnimationFrame(animate)
}

animate()