import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { CubeTexture, CubeTextureLoader } from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Debug
const gui = new dat.GUI()

// Loading textrues

const textureLoader = new THREE.TextureLoader()
const cubeTextureLoader = new THREE.CubeTextureLoader()

const doorColorTexture = textureLoader.load('/textures/door/color.jpg')
const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const doorAmbientOcclusionTeture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const doorHeightTexture = textureLoader.load('/textures/door/height.jpg')
const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg')
const doorMetalTexture = textureLoader.load('/textures/door/metalness.jpg')
const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg')
const matcapTexture = textureLoader.load('/textures/matcaps/8.png')
const gradientTexture = textureLoader.load('/textures/gradients/3.jpg')

// Cube texture loader as we will load 6 textures for environment map
const environmentMapTexture = cubeTextureLoader.load([
    'textures/environmentMaps/0/px.jpg',
    'textures/environmentMaps/0/nx.jpg',
    'textures/environmentMaps/0/py.jpg',
    'textures/environmentMaps/0/ny.jpg',
    'textures/environmentMaps/0/pz.jpg',
    'textures/environmentMaps/0/nz.jpg'
])

/////////////////////////////////////
// MESH BASIC MATERIAL
/////////////////////////////////////

// const material = new THREE.MeshBasicMaterial()

// To see both sides of a plane
// material.side = THREE.DoubleSide

// material.map = doorColorTexture

// material.color.set('rgb(0,255,0)')

// material.wireframe = true

// material.opacity = 0.5
// material.transparent = true

// material.alphaMap = doorAlphaTexture
// material.transparent = true

/////////////////////////////////////
// MESH NORMAL MATERIAL
/////////////////////////////////////

// const material = new THREE.MeshNormalMaterial()
// material.flatShading = true

/////////////////////////////////////
// MESH MATCAP MATERIAL
/////////////////////////////////////

// We give a reference texture image and it uses those textures also keeping lighting effects.

// const material = new THREE.MeshMatcapMaterial()
// material.matcap = matcapTexture

/////////////////////////////////////
// MESH DEPTH MATERIAL
/////////////////////////////////////

// const material = new THREE.MeshDepthMaterial()

/////////////////////////////////////

/////////////////////////////////////
// MESH Lambert MATERIAL
/////////////////////////////////////

// const material = new THREE.MeshLambertMaterial()

/////////////////////////////////////
// MESH Phong MATERIAL
/////////////////////////////////////

// const material = new THREE.MeshPhongMaterial()
// material.shininess = 100

/////////////////////////////////////
// MESH Toon MATERIAL
/////////////////////////////////////

// const material = new THREE.MeshToonMaterial()

/////////////////////////////////////
// MESH Standard MATERIAL
/////////////////////////////////////

// const material = new THREE.MeshStandardMaterial()
// material.metalness = 0
// material.roughness = 1

// // Ambient Occlusion cannot be directly added. It needs uc coordinates as well.
// // So we add propertycalled uv2 that stores uv coordinates as well

// material.map = doorColorTexture
// material.aoMap = doorAmbientOcclusionTeture
// material.aoMapIntensity = 0

// // We need more vertices in our objects otherwise they would seem deformed after using displacement. So we add more subdivision or more traingles
// material.displacementMap = doorHeightTexture
// material.displacementScale  = 0

// material.metalnessMap = doorMetalTexture
// material.roughnessMap = doorRoughnessTexture

// material.normalMap = doorNormalTexture
// material.normalScale.set(10, 10)

// // alphaMap shows the white part of texture and does not shoe black part of texture
// material.transparent = true // needed for alphaMap
// material.alphaMap = doorAlphaTexture


// gui.add(material, 'metalness').min(0).max(1).step(0.0001)
// gui.add(material, 'roughness').min(0).max(1).step(0.0001)
// gui.add(material, 'aoMapIntensity').min(0).max(10).step(0.0001)
// gui.add(material, 'displacementScale').min(0).max(1).step(0.0001)
/////////////////////



// Gradient Map
// we add nearest filter otherwise mimmapping may add blurinnes causing the gradient to not be clearly visible
// gradientTexture.minFilter = THREE.NearestFilter
// gradientTexture.magFilter = THREE.NearestFilter
// gradientTexture.generateMipmaps = false

// material.gradientMap = gradientTexture

////////////////////////////////////////////////////
// ENVIRONMENT Maps
////////////////////////////////////////////////////

const material = new THREE.MeshStandardMaterial
material.metalness = 0.7
material.roughness = 0.2
material.envMap = environmentMapTexture

gui.add(material, 'metalness').min(0).max(1).step(0.0001)
gui.add(material, 'roughness').min(0).max(1).step(0.0001)

const sphere = new THREE.Mesh(new THREE.SphereBufferGeometry(0.5,64,64), material) 
sphere.position.x = -1.5

//only needed for ambient occlusion
sphere.geometry.setAttribute('uv2', new THREE.BufferAttribute(sphere.geometry.attributes.uv.array, 2))

const plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(1,1,100,100), material) 

//only needed for ambient occlusion
plane.geometry.setAttribute('uv2', new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2))

const torus = new THREE.Mesh(new THREE.TorusBufferGeometry(0.3,0.2,64,128,),material)
torus.position.x = 1.5

//only needed for ambient occlusion
torus.geometry.setAttribute('uv2', new THREE.BufferAttribute(torus.geometry.attributes.uv.array, 2))


scene.add(sphere, plane, torus)

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 0.5)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

//Sizes
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

// Camera

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

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    sphere.rotation.y = 0.5 * elapsedTime;
    plane.rotation.y = 0.5 * elapsedTime;
    torus.rotation.y = 0.5 * elapsedTime;

    sphere.rotation.x = 0.5 * elapsedTime;
    plane.rotation.x = 0.5 * elapsedTime;
    torus.rotation.x = 0.5 * elapsedTime;

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()