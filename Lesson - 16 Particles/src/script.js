/*
Creating particles is like creating a Mehs
-> A geometry (Buffer Geometry)
-> A material ( Points Material)
-> A points instance (instead of a mesh)

* used sphereGeometry for particles
* used custom Geometry for particles
* used color for particles
* used textures for particles
* used alphaTest to remove background
* used depthTest to remove background

deactivating depthTest might create bugs if we have other objects in the scene or particles of different colours.

* used depthWrite
* used blending
* used various colors
* animated particle 
*/

import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { BufferGeometry } from 'three'


// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Textures
const textureLoader = new THREE.TextureLoader()
const particleTexture = textureLoader.load('/textures/particles/11.png')

// Particles

// // USING SphereBufferGeometry

// const particleGeometry = new THREE.SphereBufferGeometry(1, 32, 32)
// const particleMaterial = new THREE.PointsMaterial()
// particleMaterial.size = 0.02
// particleMaterial.sizeAttenuation = true // As we move away from the particle it becomes smaller.
// const particles = new THREE.Points(particleGeometry, particleMaterial)
// scene.add(particles)

//Custom Geometry

const particleGeometry = new THREE.BufferGeometry()
const count = 20000
const positions = new Float32Array(count*3)
const colors = new Float32Array(count*3) // 3 for RGB values

for(let i=0;i<count*3;i++)
{
    positions[i]  = 10 * (Math.random()-0.5)
    colors[i] = Math.random()
}
particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))


const particleMaterial = new THREE.PointsMaterial()
particleMaterial.size = 0.1
particleMaterial.sizeAttenuation = true
particleMaterial.color = new THREE.Color('white')
// particleMaterial.map = particleTexture
particleMaterial.transparent = true
particleMaterial.alphaMap = particleTexture
// particleMaterial.alphaTest = 0.001 // remove alpha 0 i.r. the black part of the texture
// particleMaterial.depthTest = false
particleMaterial.depthWrite = false
particleMaterial.blending = THREE.AdditiveBlending

particleMaterial.vertexColors = true

const particles = new THREE.Points(particleGeometry, particleMaterial)
scene.add(particles)

const cube = new THREE.Mesh(new THREE.BoxBufferGeometry(),new THREE.MeshBasicMaterial({color:'blue'}))
// scene.add(cube)

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // animating all particles at once
    // particles.rotation.y = elapsedTime * 0.2

    // animated each particle independently
    // The below solution is the best and alternative is discussed later by using custom shaders
    for(let i = 0;i<count;i++)
    {
        const i3 = i*3

        const x = particleGeometry.attributes.position.array[i3]    // x position to use as offset while changing the y position so that each particle x different x position moves at different time.

        particleGeometry.attributes.position.array[i3+1] = Math.sin(elapsedTime + x) // changing y position
    }

    particleGeometry.attributes.position.needsUpdate = true

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()