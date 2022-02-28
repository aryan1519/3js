/*
Added a GUI panel for debugging and changing properties

Can change x,y,z positions

visibility and wireframe can be chosen

Added colour change.

Added function to do any task (in this case animation) on press of a button in the GUI pannel.

Press H to hide/unhide GUI.

We can set default closed:true/false, width, etc of the panel by passing an object while making the GUI
const gui = new dat.GUI({closed : true, width:400})
*/

import './style/main.css'

import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import * as dat from 'dat.gui'
import gsap from 'gsap'

// Debug UI
const gui = new dat.GUI()

// A function can't directly be added and must be inside an object.

// Colour of the material can't be directly changed. The property has to be inside an object. So we create parameters object which has the property color
const parameters = {
    color: 0xff0000,
    spin:()=>           // spin is a function
    {
        gsap.to(mesh.rotation, {duration:1, y:mesh.rotation.y+10}) 
    }
}

// We then use addColor and give it paramteres and the proprty color which can be changed
// On change of this property we set the colour of the matrial.
gui.addColor(parameters, 'color').onChange(()=>
{
    material.color.set(parameters.color)
})


gui.add(parameters, 'spin')

const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color : parameters.color})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Debug
// gui.add(mesh.position, 'y') // we can now type in the value of y position 
// gui.add(mesh.position, 'y',-3, 3, 0.01) // we now have set min and max values of y and the amt by which we can change each type so now we have a bar for dragging.
// gui.add(mesh.position, 'x',-3, 3, 0.01) // we now have set min and max values of y and the amt by which we can change each type so now we have a bar for dragging.
// gui.add(mesh.position, 'z',-3, 3, 0.01) // we now have set min and max values of y and the amt by which we can change each type so now we have a bar for dragging.

// Another way to do this is chaining functions

gui.add(mesh.position, 'x').min(-3).max(3).step(0.01).name('x position')

gui.add(mesh.position, 'y').min(-3).max(3).step(0.01).name('y position')

gui.add(mesh.position, 'z').min(-3).max(3).step(0.01).name('z position')

///////////////

gui.add(mesh, 'visible') // To make an object visible/invisible. This is a property of mesh and we can also add to the GUI.

///////////////

gui.add(material, 'wireframe')

///////////////




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