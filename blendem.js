
// Set default parameters
var presets = [
    {
        name: 'Default',
        size: 100,
        lines: 3,
        lineWidth: 3,
        density: 200,
        bgColor: new Color(0.2,0.2,0.2),
        lineStyle: 3,
        shadow: 20,
        cap: 2,
        twist: 0,
        lineColor: new Color(1,1,1),
        bgStyle: 0,
        fade: 50,
        corner: 0,
        rotation: 20          
    },
    {
        name: 'Black white',
        bgColor: hex2rgb("#ffffff"),
        bgStyle: 0,
        cap: 2,
        corner: 20,
        density: 402,
        fade: 0,
        lineColor: hex2rgb("#000000"),
        lineStyle: 3,
        lineWidth: 3,
        lines: 16,
        rotation: 20,
        shadow: 20,
        size: 228,
        twist: 0
    },
    {
        name: 'Golden wave',
        bgColor: hex2rgb("#482205"),     
        bgStyle: 0,
        cap: 2,
        corner: 43,
        density: 500,
        fade: 72,
        lineColor: hex2rgb("#ff9500"),
        lineStyle: 6,
        lineWidth: 2,
        lines: 6,
        rotation: 20,
        shadow: 41,
        size: 183,
        twist: 7     
    },
    {
        name: 'Blue ocean',
        bgColor: hex2rgb("#03D3E2"),
        bgStyle: 0,
        cap: 2,
        corner: 48,
        density: 500,
        fade: 100,
        lineColor: hex2rgb("#004B4D"),
        lineStyle: 6,
        lineWidth: 6,
        lines: 9,
        rotation: 20,
        shadow: 20,
        size: 125,
        twist: 1
    }
];
// Initialize main variables

// window.onload = function() {
project.activeLayer.position = view.center;

var first = new Layer({position: view.center});
first.name = 'first';

var bg = new Layer({position: view.center});
bg.name = 'bg';

var teksti = new Layer({position: view.center});
teksti.name = 'teksti';


// Set default parameters
var p = {
    drawingBgColor: new Color(1,1,1),
    drawingSize: 10,
    size: 100,
    lines: 3,
    lineWidth: 3,
    density: 200,
    bgColor: new Color(0.2,0.2,0.2),
    lineStyle: 3,
    waveAmp: 7,
    waveFreq: 20,
    shadow: 20,
    cap: 2,
    twist: 0,
    lineColor: '#ffffff',
    bgStyle: 0,
    fade: 50,
    corner: 0,
    rotation: 0
}

var hue = 0;
var scale = 1;

first.activate();

// Load SVG from a file
var canvas = document.getElementById('canvas');
var scope = paper.setup(canvas);

var url = 'images/lazyfox.svg';
var words;


var drawingBg = new Path.Rectangle({
    point: [0, 0],
    size: [view.size.width, view.size.height]
});
bg.addChild(drawingBg);

//Import SVG to canvas and refresh art
project.importSVG(url, function(item) {
    words = item;
    words.children[0].remove(); //import creates unwanted rectangle object we need to get rid of

    words.visible = false;  //hide the guiding SVG lines

    buildUI();
    drawWord();
    centerLayers();

    
    
})


// Make the sprite ------------------------------
function generateSprite() {
    
    // Base rectangle
    var rec = new Path.Rectangle({
        point: [0, 0],
        size: [p.size, p.size],
        fillColor: p.bgColor
    });

    if (p.bgStyle == 2) {
        rec.opacity = 0;
    }

    //Bottom rectangle that creates shadow
    var recB = new Shape.Rectangle({
        point: [0, p.size-5],
        size: [p.size, 5],
        fillColor: 'black'
    })

    recB.opacity = p.shadow/100;

    //Group for all lines
    var lines = new Group({
        name: 'lines'
    });

    //Group to hold the whole sprite
    var group = new Group({
        children: [rec, recB, lines],
        name: 'sprite'
    });

    // Step for each line
    var rStep = p.size / p.lines;

    //Build lines
    for (x = 1; x<p.lines; x++ ) {
        var lineColor = p.lineColor;


        if (p.lineStyle == 1) { 
            lineColor = 'white' 
        } 

        if (p.lineStyle == 2) { 
            lineColor = 'black' 
        } 
      


        var thisOpacity = 1- ((x * (p.fade / p.lines)) / 100);

        //horizontal lines
        if (p.lineStyle != 5) {
            var l = new Path.Rectangle({
                point: [rStep*x-p.lineWidth/2, 0],
                size: [p.lineWidth, p.size],
                fillColor: lineColor
            })
            
            l.opacity = thisOpacity;  
            l.data.direction = 'horiz';
            lines.addChild(l); //add line to main group
        }

        //vertical lines
        if (p.lineStyle != 4) {
            var l2 = new Path.Rectangle({
                point: [0, rStep*x-p.lineWidth/2],
                size: [p.size, p.lineWidth],
                fillColor: lineColor        
            });

            l2.opacity = thisOpacity;
            l2.data.direction = 'vert';
            lines.addChild(l2); //add line to main group 
        }
    }

    // Corner radius with clipping mask
    if (p.corner != 0) {
        var rectangle = new Rectangle(new Point(0, 0), new Size(p.size, p.size));
        var cornerSize = new Size(p.corner,p.corner);
        var mask = new Path.Rectangle(rectangle, cornerSize);
        group.addChild(mask);
        mask.clipMask = true;
    }
    group.visible = false;
}

// Update all params given in function parameters 
function updateParams() {  
    
    for(key in arguments) {
        var arg = arguments[key];
        
        for (key in arg) {        
            var val = arg[key];
            eval("p." + key + " = " + val);
            var uiel = document.getElementById(key);
            if(val.components) {
                uiel.value = rgb2hex(val);
            }
            else {           
                uiel.value = val;
            }
        }
    }

    drawWord();
}

// Loop through all paths and pathgroups
function drawWord() {    
    //Clear previous sprite
    first.removeChildren();

    //Delete all previosly drawn worms
    teksti.removeChildren();

    

    //Scale SVG
    var myScale = p.drawingSize / scale;
    words.scale(myScale); 
    scale = p.drawingSize; 

    //Generate new drawing sprite
    generateSprite();

    //Run Draw path function for every path in the text
    
    for (h = 0; h < words.children.length; h++) {
        var thisEl = words.children[h];
        if (!thisEl.hasChildren()) {
            drawPath(first.children['sprite'], thisEl);
        }
        else {
            for (n = 0; n < thisEl.children.length; n++) {
                drawPath(first.children['sprite'], thisEl.children[n]); 
            }
        }
    }

    //Update background color
    drawingBg.fillColor = p.drawingBgColor;
    
}




// Rraw sprite along a path
function drawPath(sprite, path) {

    var step = path.length / p.density;
    var scale = 1;
    for (k=0; k<p.density; k++) {
        
        var sCopy = sprite.clone();    
        teksti.addChild(sCopy);
        sCopy.visible = true;
        var cPos = path.getLocationAt(path.length - (path.length - k*step)); 
        sCopy.position.x = cPos.point.x;
        sCopy.position.y = cPos.point.y;

        //Unicorn Background style
        if (p.bgStyle == 1) {
            sCopy.children[0].fillColor.hue += hue;
            hue += .1;
        }

        //Unicorn Line style
        if (p.lineStyle == 0) {
            var thisLines = sCopy.children['lines 1'].children;        
            for (i=0; i<thisLines.length; i++) {
                thisLines[i].fillColor.hue += hue;
            }     
            hue += .1;   
        }   

        if (p.lineStyle == 6) {
            
            var thisLines = sCopy.children['lines 1'].children;
            for (i=0; i<thisLines.length; i++) {
                if (thisLines[i].data.direction == 'vert') {
                    thisLines[i].scale(1, sinBetween(1, p.waveAmp, scale));
                }
                if (thisLines[i].data.direction == 'horiz') {
                    thisLines[i].scale(sinBetween(1, p.waveAmp, scale), 1);
                }
            }
            scale += p.waveFreq/100;     
        }

        sCopy.rotation = p.rotation + k*p.twist/100;
    }

    //Cap styles
    if (p.cap == 0) {
        var cap = new Shape.Rectangle({
            point: [sCopy.position.x-p.size/2, sCopy.position.y-p.size/2],
            size: [p.size, p.size],
            fillColor: p.bgColor
        })
        cap.rotation = p.rotation + k*p.twist/100;
        teksti.addChild(cap);
    }

    if (p.cap == 2) {
        var myLines = sCopy.children['lines 1'];
        var l = myLines.children.length;
        for (i = l-1; i>=0; i--) {            
            if (myLines.children[i].data.direction == 'horiz') {
                myLines.children[i].remove();
            }
        }
    }

    if (p.cap == 3) {
        var myLines = sCopy.children['lines 1'];
        var l = myLines.children.length;
        for (i = l-1; i>=0; i--) {
            if (myLines.children[i].data.direction == 'vert') {
                myLines.children[i].remove();
            }
        }
    }
}

// UI for manipulating the effect 
function buildUI() {   
    var drawingBgPicker = document.getElementById('drawingBgColor');

    drawingBgPicker.onchange = function() {
        updateFromUI({drawingBgColor: hex2rgb(this.value)});
        centerLayers();
    };

    var sliderDrawingSize = document.getElementById('drawingSize');

    sliderDrawingSize.onchange = function() {
        updateFromUI({drawingSize: this.value});
        centerLayers();
    };
    
    // BACKGROUND
    var slider = document.getElementById('density');

    slider.onchange = function() {
        updateFromUI({density: this.value});
        centerLayers();
    };

    var sliderSize = document.getElementById('size');

    sliderSize.onchange = function() {
        updateFromUI({size: this.value});
        centerLayers();
    };

    var sliderRotation = document.getElementById('rotation');
    sliderRotation.onchange = function() {
        updateFromUI({rotation: this.value});
        centerLayers();
    };

    var bgPicker = document.getElementById('bgColor');

    bgPicker.onchange = function() {
        updateFromUI({bgColor: hex2rgb(this.value)});
        centerLayers();
    };

    var bgStyleSelect = document.getElementById('bgStyle');

    bgStyleSelect.onchange = function() {
        updateFromUI({bgStyle: this.value});
        centerLayers();
    };

    // LINES 
    var sliderLines = document.getElementById('lines');

    sliderLines.onchange = function() {
        updateFromUI({lines: this.value});
        centerLayers();
    };

    var sliderWidth = document.getElementById('lineWidth');

    sliderWidth.onchange = function() {
        updateFromUI({lineWidth: this.value});
        centerLayers();
    };

    var lineColorPicker = document.getElementById('lineColor');

    lineColorPicker.onchange = function() {
        updateFromUI({lineColor: hex2rgb(this.value)});
        centerLayers();
    };

    var styleSelect = document.getElementById('lineStyle');

    styleSelect.onchange = function() {
        updateFromUI({lineStyle: this.value});
        centerLayers();
    };

    var sliderWaveAmp = document.getElementById('waveAmp');

    sliderWaveAmp.onchange = function() {
        updateFromUI({waveAmp: this.value});
        centerLayers();
    };

    var sliderWaveFreq = document.getElementById('waveFreq');

    sliderWaveFreq.onchange = function() {
        updateFromUI({waveFreq: this.value});
        centerLayers();
    };

    var fadeRange = document.getElementById('fade');

    fadeRange.onchange = function() {
        updateFromUI({fade: this.value});
        centerLayers();
    };

    // EFFECTS

    var shadowRange = document.getElementById('shadow');

    shadowRange.onchange = function() {
        updateFromUI({shadow: this.value});
        centerLayers();
    };

    var capSelect = document.getElementById('cap');

    capSelect.onchange = function() {
        updateFromUI({cap: this.value});
        centerLayers();
    };

    var rotationRange = document.getElementById('twist');

    rotationRange.onchange = function() {
        updateFromUI({twist: this.value});
        centerLayers();
    };

    var cornerRange = document.getElementById('corner');

    cornerRange.onchange = function() {
        updateFromUI({corner: this.value});
        centerLayers();
    };


    var presetSelect = document.getElementById('preset');

    presetSelect.onchange = function() {
        var newParams = presets[this.value];
        updateFromUI(newParams);
    };
}

function updateFromUI(val) {
    
    showProgress();

    setTimeout(function(){ 
        delete val.name;
        updateParams(val);
        centerLayers();
        hideProgress();
        drawingBg.sendToBack();
     }, 50);
    
}

function centerLayers() {
    project.activeLayer.position = view.center;
    first.position = view.center;
    teksti.position = view.center;
}

var animStep = document.getElementById('step-animation');

animStep.onclick = function() {
    // console.log('p.rotation: ' + p.rotation);
    var rotStep = p.rotation + parseInt(document.getElementById('aRotation').value);
    // console.log('rotstep: ' + rotStep);
    updateFromUI({rotation:rotStep});
    centerLayers();
    // setTimeout(function(){
    //     html2canvas(document.getElementById("rangeholder"), {
    //         onrendered: function (canvas) {
    //             document.body.appendChild(canvas);
    //         }            
    //     });


    // }, 2000);
}

function showProgress() {
    var prog = document.getElementById('progress');
    prog.style.display = "block";
}

function hideProgress() {
    var prog = document.getElementById('progress');
    prog.style.display = "none";
}

//Reposition the paths whenever the window is resized:
function onResize(event) {
    centerLayers();
    drawWord();
}

function downloadDataUri(options) {
    if (!options.url)
        options.url = "http://download-data-uri.appspot.com/";
    $('<form method="post" action="' + options.url
        + '" style="display:none"><input type="hidden" name="filename" value="'
        + options.filename + '"/><input type="hidden" name="data" value="'
        + options.data + '"/></form>').appendTo('body').submit().remove();
}

//Needed to translate color picker values to paper.js rgb colors
function hex2rgb(hex) {
    var t =  hex.match(/[A-Za-z0-9]{2}/g).map(function(v) { return parseInt(v, 16)/255 });
    var c = new Color(t);
    return c;
}

function rgb2hex(rgb){
    var hex = componentToHex(rgb.components[0]) + componentToHex(rgb.components[1]) + componentToHex(rgb.components[2])
    return "#" + hex;
}

function componentToHex(c) {
    var hex = (c*255).toString(16);
    var padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }
    return hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}

function getRandomInt2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function sinBetween(min, max, t) {
    return ((max - min) * Math.sin(t) + max + min) / 2.
}

$('#export-button').click(function() {
    var svg = project.exportSVG({ asString: true });
    downloadDataUri({
        data: 'data:image/svg+xml;base64,' + btoa(svg),
        filename: 'export.svg'
    });
});


