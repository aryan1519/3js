/*
Box geometry takes 6 arguments width, height, depth, and no of segments for each of these.

no of segments decide number of triangles used to form a face.

Eg 1 segment means two triangles.

We can see the triangles if we make wireframe:true in material.

////////////

We can make our own geometries.

////////////

used Buffer Geometry - more memory efficient and gives better performance
*/


import './style/main.css'

import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


// Scene
const scene = new THREE.Scene()

// // Custom triangle geometry
// const geometry = new THREE.Geometry()

// const vertex1 = new THREE.Vector3(0,0,0)
// geometry.vertices.push(vertex1)

// const vertex2 = new THREE.Vector3(0,1,0)
// geometry.vertices.push(vertex2)

// const vertex3 = new THREE.Vector3(1,0,0)
// geometry.vertices.push(vertex3)

// // 0, 1, 2 are the indices of vertex 1,2,3 respectively.
// const face = new THREE.Face3(0,1,2)
// // geometry.faces.push(face)


// // Creating 50 traingles
// const geometry = new THREE.Geometry()

// for(let i=0;i<50;i++)
// {
//     for(let j=0;j<3;j++)
//     {
//         geometry.vertices.push(new THREE.Vector3(
//             (Math.random() - 0.5)*4,    //Math.random is between 0 and 1. -0.5 to include -ve values also , *4 to increase the range.
//             (Math.random() - 0.5)*4,
//             (Math.random() - 0.5)*4
//         ))
//     }

//     const verticesIndex = i*3
//     geometry.faces.push(new THREE.Face3(
//         verticesIndex,
//         verticesIndex+1,
//         verticesIndex+2
//     ))
// }

/////////
// BufferGeometry

// Making a traingle

// const positionsArray = new Float32Array([0,0,0,     // 1-d array but set of 3 elements represents one vertex
//                                          0,1,0,
//                                          1,0,0])

// const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3) // 3 means three cordinates. If we used uv cordinates then we use 2.

// const geometry = new THREE.BufferGeometry()
// geometry.setAttribute('position', positionsAttribute)

// Making multiple traingles

const geometry = new THREE.BufferGeometry()

// no of traingles
const count = 500

const positionsArray = new Float32Array(count*3*3)  // 3 vertices of 3 values(x,y,z)

for(let i=0;i<count*3*3;i++)
{
    positionsArray[i] = (Math.random())
}

const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3)
geometry.setAttribute('position', positionsAttribute)


const material = new THREE.MeshBasicMaterial({color : 0xff0000,
                                              wireframe:true})

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