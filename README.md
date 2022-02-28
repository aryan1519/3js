# 3js

Lesson 1 Basics

* Made a basic 3d object(cube) on screen a viewed from different camera perspectives
* Basics of canvas, scene, mesh, material, geometry, camera renderer

![](https://github.com/aryan1519/3js/blob/main/gifs/Lesson%201%20Basics.png)

Lesson 2 Webpack

* Added webpack bundler and live reloading

Lesson 3 Transformations

* Used transformations such as rotation, scaling,etc

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%203%20Transformations.png" width="600" height="281">

Lesson 4 Animations

* Tried animating using delta time concept
* using 3js clock
* used gsap library

![](https://github.com/aryan1519/3js/blob/main/gifs/Lesson%20%204%20Animations.gif)

Lesson 5 Camera

* Used PerspectiveCamera and OrthographicCamera 
* Used mouse move event listener
* used 3js controls - orbitcontrol

![](https://github.com/aryan1519/3js/blob/main/gifs/Lesson%205%20Camera.gif)

Lesson 6 Fullscreen and Reszing

* Resized renderer
* Removed margins,etc with css
* added event listener to resize according to tab resizing or device dimesions
* handled varying pixel ratios of devices for smooth edges/ smooth render of object
* added functionality to go in fullscreen mode in any web browser on double click (including Safari)

![](https://github.com/aryan1519/3js/blob/main/gifs/Lesson%206%20Fullscreen%20and%20Resizing.gif)

Lesson 9 Textures

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

MeshNormalMaterial

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2010/MeshNormalMaterial.gif">

With flat shading

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2010/flatShading.PNG" width = "700" height = "500">
