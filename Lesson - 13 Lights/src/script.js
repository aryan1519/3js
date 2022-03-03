/*
* used ambient light
* used direcitonal light
* used hemisphere light
* used point light
* used rect area light
* used spot light

MINIMAL COST LIGHTS
-> Ambient Light
-> Hemisphere Light

MODERATE COST LIGHTS
-> Dircectional Light
-> Point Light

HIGH COST LIGHTS
-> Spot Light
-> Rect Area Light

We can bake lights into our textures rather than using three js lights but then we cant move lights and the textures become large in size.


*/

import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { MeshPhysicalMaterial, SpotLight } from 'three'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js'
/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Lights

// Ambient Light
// Used to simulate light bouncing

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5) // color and intensity
scene.add(ambientLight)

// Directional Light
// By default light comes from top
const directionalLight = new THREE.DirectionalLight(0x00fffc, 0.3)
directionalLight.position.set(1, 0.25, 0)
scene.add(directionalLight)

// Hemisphere Light
// We add two colours. One on top other on bottom. And it blends in the middle
const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 0.3)
scene.add(hemisphereLight)

// Point Light
// The light comes from an infinitely small point. And goes in all directions
// const pointLight = new THREE.PointLight(0xff9000, 0.5)

//PointLight can take 4 arguments color, intensity, fade distance, decay(i.e, how fast it fades as we move away)
const pointLight = new THREE.PointLight(0xff9000, 0.5, 10, 2)

pointLight.position.set(1, -0.5, 1)
scene.add(pointLight)

// RectArea Light
// IMPORTANT : ONLY WORKS WITH MeshStandardMaterial / MeshPhysicalMaterial
// color, intensiry, width and height
const rectAreaLight= new THREE.RectAreaLight(0x0000ff, 2, 1, 1)
scene.add(rectAreaLight)

// We can make a light look at a specific position 
rectAreaLight.lookAt(new THREE.Vector3()) 

// Spot Light
// color, intensity, distance, angle, penumbra, decay
const spotLight = new THREE.SpotLight(0x78ff00, 1, 10, Math.PI * 0.1, 0.25, 1)
spotLight.position.set(0, 2, 3)
scene.add(spotLight)

// We dont used lookAt with spotLight, we use target
spotLight.target.position.x = -1.75
scene.add(spotLight.target)

// Helpers
const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight, 0.2)
scene.add(hemisphereLightHelper)

const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.2)
scene.add(directionalLightHelper)

const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.2)
scene.add(pointLightHelper)

const spotLightHelper = new THREE.SpotLightHelper(spotLight)
scene.add(spotLightHelper)

// we have to update it ourselves
window.requestAnimationFrame(()=>
{
    spotLightHelper.update()
})

// import from examples
const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight)
scene.add(rectAreaLightHelper)

// we have to update it ourselves
window.requestAnimationFrame(()=>
{
    rectAreaLightHelper.position.copy(rectAreaLight.position)
    rectAreaLightHelper.quaternion.copy(rectAreaLight.quaternion)
    rectAreaLightHelper.update()
})

// Material
const material = new THREE.MeshStandardMaterial()
material.roughness = 0.4

// Objects
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    material
)
sphere.position.x = - 1.5

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(0.75, 0.75, 0.75),
    material
)

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.2, 32, 64),
    material
)
torus.position.x = 1.5

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    material
)
plane.rotation.x = - Math.PI * 0.5
plane.position.y = - 0.65

scene.add(sphere, cube, torus, plane)

/**
 * Sizes
 */
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

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = 0.1 * elapsedTime
    cube.rotation.y = 0.1 * elapsedTime
    torus.rotation.y = 0.1 * elapsedTime

    sphere.rotation.x = 0.15 * elapsedTime
    cube.rotation.x = 0.15 * elapsedTime
    torus.rotation.x = 0.15 * elapsedTime

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()