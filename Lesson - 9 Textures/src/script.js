/*
Loaded textures.

callbacks

transforming textures

minMaps and filters

*/

import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


const loadingManager = new THREE.LoadingManager()

// Callbacks

loadingManager.onStart = () =>
{
    console.log("onStart")
}

loadingManager.onLoaded = () =>
{
    console.log("onLoaded")
}

loadingManager.onProgress = () =>
{
    console.log("onProgress")
}

loadingManager.onError = () =>
{
    console.log("onError")
}

// Textures

const textureLoader = new THREE.TextureLoader(loadingManager)

const colorTexture = textureLoader.load('/textures/minecraft.png')

const alphaTexture = textureLoader.load('/textures/door/alpha.jpg')

const heightTexture = textureLoader.load('/textures/door/height.jpg')

const normalTexture = textureLoader.load('/textures/door/normal.jpg')

const ambientTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')

const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg')

const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg')

// Texture transformations

// colorTexture.repeat.x = 2
// colorTexture.repeat.y = 3
// colorTexture.wrapS = THREE.RepeatWrapping
// colorTexture.wrapT = THREE.RepeatWrapping

// colorTexture.offset.x = 0.5
// colorTexture.offset.y = 0.5

// colorTexture.rotation = Math.PI / 4

// // To set the pivot point
// colorTexture.center.x = 0.5
// colorTexture.center.y = 0.5

/////////////////////////////

// We can use different filters to see change in how texture is used on object. By default we have some blurriness which is helpful. We can use filters if we want as shown below if we like.
// colorTexture.minFilter = THREE.NearestFilter // This is making it a little sharp.

// We can disable Mipmaps as that is automatically handled by these filters.
// colorTexture.generateMipmaps = false

colorTexture.magFilter = THREE.NearestFilter
// We can use minificaiton filter if our texture is big. Maginfication filters can be used to sharpen texture when textures are small (thus blurry).



/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({map : colorTexture})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

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
camera.position.z = 1
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

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()