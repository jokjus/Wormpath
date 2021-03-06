# WormPath
 Draws "worms" along vector paths with parametrized brush block.

![Wormpath screenshot](/images/screenshot.png)

## Setup
 1. Copy files to some directory on your hard drive. 
 2. Launch a local server of your choice. (I'm using CodeKit or Visual Studio Code Live Server). 
    - Visual Studio Code https://code.visualstudio.com/  
    - Visual Studio Code Live Server https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
    - CodeKit https://codekitapp.com/
 3. Install a pug compiler. CodeKit has it built-in, for Visual Code Studio you can use eg.:https://marketplace.visualstudio.com/items?itemName=jaheenafsarsyed.live-pug-compiler 
 3. Open wormpath.html in a browser.

## Using your own paths for drawing 
 Modify images/pathsource.svg in eg. Adobe Illustrator. SVG should ONLY contain paths in a single layer, not groups, not compound paths. So, release those compound paths and ungroup your groups. Keep it simple.

## What works
 Regular fonts don't work as you would think, because they are not made of single strokes. So you need to either draw your own, or use other solutions, for example https://www.templatemaker.nl/singlelinetext/

## Export SVG
 Probably only works with very slow density and low line count. Screenshots are the way to go right now.

## Presets
 There are a few hard coded presets, but you can save settings into your browser's localstorage. Controls are at the bottom of the screen.
 
## Saving a project
In the General tab under Project-section you can save the full project with original path strokes and settings for each stroke. Projects are saved into browser's localstorage for now, so don't expect them to be safe forever.

## Known issues
 - Drawing disappears on resize. Just change any value to redraw or hit "A" to select all paths and redraw the screen.
 - When loading a project elements with opacity become opaque. Must set the color again for those elements to recover.

## Keyboard commands
A: select all paths
SHIFT + click path: add new control point
X + click path: remove a control point

## Animation
 Animation is in very early steps, only a small portion of all properties are supported. Animations are loops where properties change according to the chosen easing function.
 1. Select those paths that you want to set animation properties.
 2. Enter the min/max values of each property in the animation tab. Test with *Step forward* if you like.
 3. Hit small AN -toggle in order to make any animatable property really animate.
 4. Press *Start animation*
 5. Select format of your choice. WEBM is great for testing, JPG or PNG series make a high quality master. 
 6. Press *Start Capture*
 7. When all frames have been generated, *Stop capture*
 8. Press *Stop animation*

*NOTE* Animation speed isn't set per path, it's an universal property for the whole project.
*NOTE2* flatForward easing function is the only easing function that isn't a loop. It runs straight forward at a fixed speed.

 The animation will be downloaded in a format of choice.
 Screen capture script by https://github.com/spite/ccapture.js
