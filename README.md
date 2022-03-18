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

<h1>Lesson 7 Geometries</h1>

* used BoxGeometry
* used wireframe
* made single segment( two triangles on one face) BoxGeometry
* made 2, 10 segment BoxGeometry
* made custom Geometry using BufferGeometry
* made 50 traingles custom geometry
* made single traingle custom geometry

<h5>Single segment Geometry</h5>

<img src="https://github.com/aryan1519/3js/blob/main/gifs/Lesson%207/Lesson%207%201%20segment%20wireframe.PNG" width="417" height="324">

<h5>2 segment Geometry</h5>

<img src = "https://github.com/aryan1519/3js/blob/main/gifs/Lesson%207/Lesson%207%202%20segments%20wireframe.PNG" width="417" height="324">

<h5>10 segment segment Geometry</h5>

<img src = "https://github.com/aryan1519/3js/blob/main/gifs/Lesson%207/Lesson%207%2010%20segments%20wireframe.PNG" width="417" height="324">

<h5>50 triangles custom geometry using BufferGeometry</h5>

<img src = "https://github.com/aryan1519/3js/blob/main/gifs/Lesson%207/Lesson%207%2050%20traingles%20custom%20geometry%20using%20BufferGeometry.PNG" width="417" height="324"> <img src = "https://github.com/aryan1519/3js/blob/main/gifs/Lesson%207/Lesson%207%2050%20triangles%20custom%20geometry.PNG" width="417" height="324">

<h5>Single traingles custom geometry</h5>

<img src = "https://github.com/aryan1519/3js/blob/main/gifs/Lesson%207/Lesson%207%20custom%20triangle%20geometry.PNG" width="417" height="324">

<h1> Lesson 8 Debug UI</h1>

* Added a GUI panel for debugging and changing properties
* Can change x,y,z positions
* visibility and wireframe can be chosen
* Added colour change.
* Added function to do any task (in this case animation) on press of a button in the GUI pannel.

Press H to hide/unhide GUI.

We can set default closed:true/false, width, etc of the panel by passing an object while making the GUI
const gui = new dat.GUI({closed : true, width:400})

<img src = "https://github.com/aryan1519/3js/blob/main/gifs/Lesson%208%20Debug%20UI.gif" width = "600" height = "281">

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

<h1>Lesson 11 3D Text</h1>

* Used FontLoader
* Used TextGeometry

<img src = "https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2011%203D%20Text.gif" width = "700" height = "500">

<h1>Lesson 12 Go Live/ Deployment using Vercel</h1>

-> npm run build

-> npm install vercel

-> add "deploy": "vercel --prod" to scripts in package.json file.

-> npm run deploy.

-> choose method of login.

-> verify.

-> choose scope - usually only one available so press enter.

-> No(N) to link to existing project. 

-> choose project name (only lowercase and hyphen('-')  allowed).

-> same directory so ./ (which is default so press enter).

-> Press Y to override settings and change output folder from public to dist. 
   Arrow keys to choose between options.
   Go to output directory option and press space to choose and then press enter.
   Now type dist as output directory.

-> The webisite will be deployed.

Link to deployed website : https://aryan-3d-text.vercel.app/

If we make any changes in the project just type npm run deploy in the terminal after changes are done.

<h1>Lesson 13 Lights</h1>

* used ambient light
* used direcitonal light
* used hemisphere light
* used point light
* used rect area light
* used spot light
* used light helpers

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

<h5>Ambient light</h5>

<img src = "https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2013/1%20ambientLight.png" width = "700" height = "500">

<h5>Directional light</h5>

<img src = "https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2013/2%20directionalLight.gif" width = "700" height = "500">

<h5>Directional light with ambient light</h5>

<img src = "https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2013/3%20directionalLight%20with%20ambient%20light.gif" width = "700" height = "500">

<h5>Hemisphere light</h5>

<img src = "https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2013/4%20hemisphereLight.gif" width = "700" height = "500">

<h5>Point light</h5>

<img src = "https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2013/5%20pointLight.gif" width = "700" height = "500">

<h5>Rect area light</h5>

<img src = "https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2013/6%20rectArea%20Light.gif" width = "700" height = "500">

<h5>Spot light</h5>

<img src = "https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2013/7%20spotLight.png" width = "700" height = "500">

<h5>Light helpers</h5>

<img src = "https://github.com/aryan1519/3js/blob/main/gifs/Lesson%2013/8%20Light%20Helpers.gif" width = "700" height = "500">

<h1>Lesson 14 Shadows</h1>

<h1>Lesson 15 Haunted House</h1>

<h1>Lesson 16 </h1>

<h1>Lesson 17 </h1>

<h1>Lesson 20 Physics</h1>

