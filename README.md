# 3js

<h1>Lesson 1 Basics</h1>

* Made a basic 3d object(cube) on screen a viewed from different camera perspectives
* Basics of canvas, scene, mesh, material, geometry, camera renderer

![](https://github.com/aryan1519/3js/blob/main/gifs/Lesson%201%20Basics.png)

<h1>Lesson 2 Webpack</h1>

* Added webpack bundler and live reloading

<h1>Lesson 3 Transformations</h1>

* Used transformations such as rotation, scaling,etc

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%203%20Transformations.png" width="600" height="281">

<h1>Lesson 4 Animations</h1>

* Tried animating using delta time concept
* using 3js clock
* used gsap library

![](https://github.com/aryan1519/3js/blob/main/gifs/Lesson%20%204%20Animations.gif)

<h1>Lesson 5 Camera</h1>

* Used PerspectiveCamera and OrthographicCamera 
* Used mouse move event listener
* used 3js controls - orbitcontrol

![](https://github.com/aryan1519/3js/blob/main/gifs/Lesson%205%20Camera.gif)

<h1>Lesson 6 Fullscreen and Reszing</h1>

* Resized renderer
* Removed margins,etc with css
* added event listener to resize according to tab resizing or device dimesions
* handled varying pixel ratios of devices for smooth edges/ smooth render of object
* added functionality to go in fullscreen mode in any web browser on double click (including Safari)

![](https://github.com/aryan1519/3js/blob/main/gifs/Lesson%206%20Fullscreen%20and%20Resizing.gif)

<h1>Lesson 9 Textures</h1>

* Loaded and used textures
* used loadingManager and callbacks
* used textures transformations such as repeating, wrapping, offsets, pivot change
* used filters such as minFilter and magFilter

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%209%20Textures.PNG" width="417" height="324">

Use minFilter when the texture is large 

![](https://github.com/aryan1519/3js/blob/main/gifs/Lesson%209%20No%20minFilter%20to%20minFilter.gif)

Use magFilter when the texture is very small and thus causes blurriness. magFilter will adjust accordingly and make it sharper

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%209%20No%20magFilter%20to%20magFilter.gif" width="417" height="324">

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%209%20no_mag.PNG" width="417" height="324"> <img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%209%20magfilter.PNG" width="417" height="324">

<h1>Lesson 10 Materials</h1>

* used different properties of MeshBasicMaterial
* used MeshNormalMaterial
* used MeshMatcapMaterial
* used MeshDepthMaterial
* used MeshLambertMaterial 
* used MeshPhongMaterial
* used MeshToonMaterial
* used MeshStandardMaterial
* used properties such as metalness and roughness
* used material.map to choose texture
* used ambient occlusion
* used displacedmentScale
* used metalnessMap for doorMetalTexture
* used roughnessMap for doorRoughnessTexture
* used normalMap for using doorNormalTexture for details in image
* used alphaMap for getting rid of extra portion of door texture
* used GUI for controlling all these properties
* used gradientMap
* used Environment Maps
* used lighting for some materials to work

<h3>MeshNormalMaterial</h3>

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2010/MeshNormalMaterial.gif">

<h3>With flat shading</h3>

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2010/flatShading.PNG" width = "700" height = "500">

<h3>MeshMatcapMaterial</h3>

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2010/MeshMatcapMaterial.PNG" width = "700" height = "500">

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2010/MeshMatcapMaterial2.PNG" width = "700" height = "500">

<h3>MeshDepthMaterial</h3>

This needs lighting and is visible only when there is lighting available otherwise is invisible.
As we go closer to it we can see them clearly. Can be used for objects far away.

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2010/MeshDepthMaterial.gif" width = "700" height = "500">

<h3>MeshLambertMaterial</h3>

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2010/MeshLambertMaterial.gif" width = "700" height = "500">

<h3>MeshPhongMaterial</h3>

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2010/MeshPhongMaterial.gif" width = "700" height = "500">

<h3>MeshToonMaterial</h3>

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2010/MeshToonMaterial.gif" width = "700" height = "500">

<h3>MeshStandardMaterial</h3>

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2010/MeshStandardMaterial.gif" width = "700" height = "500">

<h5>Metalness and Roughness</h5>

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2010/Metalness%20and%20Roughness.gif" width = "700" height = "500">

<h5>Gradient Map</h5>

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2010/Gradient.PNG" width = "700" height = "500">

<h5> Door Texture metalness and roughness</h5>

<img src = "https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2010/Door%20Metalness%20and%20Roughness.gif" width = "700" height = "500">

<h5>Ambient Occlusion Map</h5>

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2010/Ambient%20Occlusion.gif" width = "700" height = "500">

<h5>displacementMap</h5>

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2010/displacementScale.gif" width = "700" height = "500">

<h5>normalMap</h5>
Adds additional details

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2010/normalMap.gif" width = "700" height = "500">

<h5>alphaMap</h5>
Gets rid of the black part and keeps the white part of the alphaTexture

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2010/alphaMap.gif" width = "700" height = "500">

<h5>Environment Map</h5>

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2010/envMap.gif" width = "700" height = "500">

Free envMaps and textures are available on https://polyhaven.com/
After downloading we need to convert the HDRI to CubeMap. For this we can use https://matheowis.github.io/HDRI-to-CubeMap/
