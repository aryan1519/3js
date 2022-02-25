import './style/main.css'

import * as THREE from 'three'

// Scene
const scene = new THREE.Scene()

// Red Cube
const geometry = new THREE.BoxGeometry(1,1,1)

const material = new THREE.MeshBasicMaterial({color : 0xff0000})

const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1

mesh.position.set(0.7, -0.6, 1)


// Scale
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
mesh.scale.set(2, 0.5, 0.5)

// Rotation
mesh.rotation.reorder("YXZ") // To make sure rotations happen in this order.
mesh.rotation.x = Math.PI / 2
mesh.rotation.y = Math.PI / 2
mesh.rotation.z = -2.3

// Axis helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

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

// Look At
// camera.lookAt(new THREE.Vector3(3,0,0))
camera.lookAt(mesh.position)

// Renderer
const canvas = document.querySelector(".webgl")

const renderer = new THREE.WebGLRenderer({
    canvas : canvas
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)

// Group to animate a bunch of objects together. Example all parts of house should move together when moving the house.

// const group = new THREE.Group()
// scene.add(group)

// const cube1 = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
//     new THREE.MeshBasicMaterial(({color : 0xff0000}))
// )
// group.add(cube1)

// const cube2 = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
//     new THREE.MeshBasicMaterial({color : 0x00ff00})
// )
// cube2.position.x = -2
// group.add(cube2)

// const cube3 = new THREE.Mesh(
//     new THREE.BoxGeometry(1,1,1),
//     new THREE.MeshBasicMaterial({color : 0x0000ff})
// )
// cube3.position.x = -2
// group.add(cube2)

// group.position.y = 2
// group.scale.y = 2
// group.rotate.y = 1