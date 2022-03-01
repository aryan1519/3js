<h1> Lesson 8 Debug UI</h1>

* Added a GUI panel for debugging and changing properties
* Can change x,y,z positions
* visibility and wireframe can be chosen
* Added colour change.
* Added function to do any task (in this case animation) on press of a button in the GUI pannel.

Press H to hide/unhide GUI.

We can set default closed:true/false, width, etc of the panel by passing an object while making the GUI
const gui = new dat.GUI({closed : true, width:400})

<img src = "https://github.com/aryan1519/3js/blob/main/gifs/Lesson%208%20Debug%20UI.gif" width = "426" height = "200">
