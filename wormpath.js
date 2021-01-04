
// Set default parameters
var presets = [
    {
        name: 'Default',
        size: 100,
        bgEffect: 0,
        lines: 3,
        lineWidth: 3,
        density: 50,
        bgColor: new Color(0.2,0.2,0.2),
        lineStyle: 3,
        shadow: 20,
        cap: 2,
        twist: 0,
        lineColor: new Color(1,1,1),
        bgStyle: 0,
        fade: 50,
        corner: 0,
        rotation: 20,
        bulbAmp: 15,
        bulbFreq: 50     
    },
    {
        name: 'Black white',
        bgColor: hex2rgb("#ffffff"),
        bgEffect: 0,
        bgStyle: 0,
        cap: 2,
        corner: 20,
        density: 96,
        fade: 0,
        lineColor: hex2rgb("#000000"),
        lineStyle: 3,
        lineWidth: 3,
        lines: 16,
        rotation: 20,
        shadow: 20,
        size: 228,
        twist: 0,
        bulbAmp: 15,
        bulbFreq: 50,
        drawingBgColor: hex2rgb("#ffffff"),
    },
    {
        name: 'Golden wave',
        bgColor: hex2rgb("#482205"),     
        bgEffect: 0,
        bgStyle: 0,
        cap: 2,
        corner: 43,
        density: 99,
        fade: 72,
        lineColor: hex2rgb("#ff9500"),
        lineStyle: 6,
        lineWidth: 2,
        lines: 6,
        rotation: 20,
        shadow: 41,
        size: 183,
        twist: 7,
        waveAmp: 7,
        waveFreq: 20,
        waveAmp: 9,
        waveFreq: 9,
        bulbAmp: 15,
        bulbFreq: 50,
        drawingBgColor: new Color(0.89804,0.82745, 0.76078)
    },
    {
        name: 'Blue ocean',
        bgColor: hex2rgb("#9ef0ff"),
        bgEffect: 0,
        bgStyle: 0,
        cap: 2,
        drawingBgColor: hex2rgb("#A8F5FF"),
        corner: 48,
        density: 99,
        fade: 100,
        lineColor: hex2rgb("#004B4D"),
        lineStyle: 6,
        lineWidth: 6,
        lines: 9,
        rotation: 20,
        shadow: 20,
        size: 125,
        twist: 1,
        waveAmp: 3,
        waveFreq: 9,
        bulbAmp: 15,
        bulbFreq: 50
    },

    {
        name: 'Green lantern',
        bgColor: new Color(0, 0.21961, 0.01569),
        bgEffect: 1,
        bgStyle: 0,
        cap: 2,
        corner: 22,
        density: 90,
        drawingBgColor: new Color(1,1,1),
        drawingSize: 8,
        fade: 49,
        lineColor:  new Color(0.06667, 1, 0),
        lineStyle: 3,
        lineWidth: 12,
        lines: 3,
        rotation: 279,
        shadow: 35,
        size: 67,
        twist: 0,
        waveAmp: 3,
        waveFreq: 9,
        bulbAmp: 11,
        bulbFreq: 77
    },

    {
        name: 'Orange twist',
        bgColor: new Color(0.01961, 0.00392, 0.91373),
        bgEffect: 1,
        bgStyle: 0,
        bulbAmp: 10,
        bulbFreq: 34,
        cap: 2,
        corner: 0,
        density: 96,
        drawingBgColor: new Color(0.96078, 0.38431, 0),
        drawingSize: 7,
        fade: 76,
        lineColor: new Color(1,1,1),
        lineStyle: 6,
        lineWidth: 3,
        lines: 3,
        rotation: 0,
        shadow: 2,
        size: 100,
        twist: 0,
        waveAmp: 7,
        waveFreq: 20
    },
    {
        name: 'Green Revolt',
        bgColor: new Color(0.31765, 1, 0),
        bgEffect: 2,
        bgStyle: 0,
        bulbAmp: 50,
        bulbFreq: 34,
        cap: 2,
        corner: 0,
        density: 100,
        drawingBgColor: new Color(0.05882, 0.0549, 0.06275),
        drawingSize: 6,
        fade: 82,
        lineColor: new Color(1, 1, 1),
        lineStyle: 2,
        lineWidth: 9,
        lines: 9,
        rotation: 104,
        shadow: 61,
        size: 73,
        twist: 431,
        waveAmp: 3,
        waveFreq: 10
    },
    {
        name: 'Rainbow text',
        bgColor: new Color(0, 0.8, 1),
        bgEffect: 2,
        bgOpacity: 12,
        bgStyle: 1,
        bulbAmp: 15,
        bulbFreq: 50,
        cap: 2,
        corner: 0,
        density: 100,
        drawingBgColor: new Color(0, 0.21569, 1),
        drawingSize: 7,
        fade: 50,
        lineColor: new Color(1, 1, 1),
        lineOpacity: 37,
        lineStyle: 7,
        lineWidth: 3,
        lines: 3,
        rotation: 20,
        shadow: 0,
        size: 177,
        textColor: new Color(1, 1, 1),
        textContent: "Wovon man nicht sprechen kann, darüber muß man schweigen.",
        textSize: 35,
        textSpread: 0,
        textYPos: 0,
        twist: 53,
        waveAmp: 7,
        waveFreq: 20
    }
];
// Initialize main variables
var bulbPhase = 0;
var rotStepVal, ampStepVal, 
    runAnimation = false
// Create a capturer that exports a WebM video
var capturer = new CCapture( { 
    format: 'webm',
    framerate: 25,
    quality: 95,
    verbose: true } );  

var startCaptureBtn = document.getElementById( 'start-capture' ),
    stopCaptureBtn = document.getElementById( 'stop-capture' ),
    startAnimationBtn = document.getElementById( 'start-animation' ),
    stopAnimationBtn = document.getElementById( 'stop-animation' )

    stopAnimationBtn.style.display = 'none';
    startCaptureBtn.style.display = 'none';
    stopCaptureBtn.style.display = 'none';

    startAnimationBtn.addEventListener( 'click', function( e ) {
        runAnimation = true;
        rotStepVal = parseFloat(document.getElementById('aRotation').value);
        ampStepVal = parseFloat(document.getElementById('aWaveAmp').value);
        this.style.display = 'none';
        stopAnimationBtn.style.display = 'inline-block';
        startCaptureBtn.style.display = 'inline-block';
        animate();
    }, false );

    stopAnimationBtn.addEventListener( 'click', function( e ) {
        runAnimation = false;
        this.style.display = 'none';
        startCaptureBtn.style.display = 'none';
        startAnimationBtn.style.display = 'inline-block';
    }, false );

startCaptureBtn.addEventListener( 'click', function( e ) {
    capturer.start();
    this.style.display = 'none';
    stopCaptureBtn.style.display = 'inline-block';
    e.preventDefault();
}, false );

stopCaptureBtn.addEventListener( 'click', function( e ) {
    capturer.stop();
    this.style.display = 'none';
    capturer.save();
}, false );

function animate() {
    if (runAnimation) {
        requestAnimationFrame( animate );
        render();
    }
}

function render() {

    // setTimeout(function() {
        var rotStep = p.rotation + rotStepVal;
        var ampStep = p.waveAmp + ampStepVal;
        

        updateAnim({
            waveAmp:ampStep,
            rotation:rotStep
        });
        centerLayers();
    // }, 500)
    if( capturer ) capturer.capture( canvas );

    // lastTime = currentTime;
}

// window.onload = function() {
project.activeLayer.position = view.center;

var first = new Layer({position: view.center});
first.name = 'first';

var bg = new Layer({position: view.center});
bg.name = 'bg';

var drawing = new Layer({position: view.center});
drawing.name = 'drawing';


// Set default parameters
var p = {
    drawingBgColor: new Color(1,1,1),
    drawingSize: 9,
    size: 100,
    lines: 3,
    lineWidth: 3,
    density: 90,
    bgColor: new Color(0.2,0.2,0.2),
    bgOpacity: 100,
    lineStyle: 3,
    waveAmp: 7,
    waveFreq: 20,
    shadow: 20,
    cap: 2,
    twist: 0,
    lineColor: new Color(1,1,1),
    lineOpacity: 100,
    bgStyle: 0,
    fade: 50,
    corner: 0,
    rotation: 20,
    bgEffect: 0,
    bulbAmp: 15,
    bulbFreq: 50,
    textSize: 50,
    textColor: new Color(1,1,1),
    textContent: 'Wovon man nicht sprechen kann, darüber muß man schweigen.',
    textSpread: 0,
    textYPos: 0
}

var hue = 0;
var scale = 1;

first.activate();

// Load SVG from a file
var canvas = document.getElementById('canvas');
var scope = paper.setup(canvas);

var url = 'images/pathsource.svg';
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

    updateParams(p);
    buildUI();
    centerLayers();
    
})


// Make the sprite ------------------------------
function generateSprite() {
    
    // Base rectangle
    var rec = new Path.Rectangle({
        point: [0, 0],
        size: [p.size, p.size],
        fillColor: p.bgColor,
        opacity: p.bgOpacity/100
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

        var thisOpacity = 1- ((x * (p.fade / p.lines)) / 100);

        //horizontal lines
        if (p.lineStyle != 5) {
            var l = new Path.Rectangle({
                point: [rStep*x-p.lineWidth/2, 0],
                size: [p.lineWidth, p.size],
                fillColor: p.lineColor
            })
            
            l.opacity = thisOpacity - (1-p.lineOpacity/100);  
            l.data.direction = 'horiz';
            lines.addChild(l); //add line to main group
        }

        //vertical lines
        if (p.lineStyle != 4) {
            var l2 = new Path.Rectangle({
                point: [0, rStep*x-p.lineWidth/2],
                size: [p.size, p.lineWidth],
                fillColor: p.lineColor,
                opacity: p.lineOpacity/100
            });

            l2.opacity = thisOpacity - (1-p.lineOpacity/100);
            l2.data.direction = 'vert';
            lines.addChild(l2); //add line to main group 
        }
    }
 

    // Text effect
    if (p.lineStyle == 7) {
        
        var text = new PointText(new Point(p.size, p.size-10-(p.size/100*p.textYPos)));
        var textMask = new Path.Rectangle(new Point(p.size-5, 0), new Size(5, p.size));
        text.content = document.getElementById('textContent').value;
        text.fillColor = p.textColor;
        text.fontSize = p.size * p.textSize/50;
        text.fontFamily = "Germania One";
        text.justification = 'right';

        var textContainer = new Group({
            name: 'textContainer',
            children: [text, textMask]
        })

        textMask.clipMask = true;
        group.addChild(textContainer);        
    }

    // Corner radius with clipping mask
    if (p.corner != 0) {
        var rectangle = new Rectangle(new Point(0, 0), new Size(p.size, p.size));
        var cornerSize = new Size(p.corner,p.corner);
        var mask = new Path.Rectangle(rectangle, cornerSize);
        group.addChild(mask);
        mask.clipMask = true;
    }

    if (p.bgEffect == 2) {
        var rectangleOut = new Path.Rectangle(new Point(0, 0), new Size(p.size, p.size));
        var rectangleIn = new Path.Rectangle(new Point(5, -5), new Size(p.size-10, p.size+10));
        var mask = rectangleOut['subtract'](rectangleIn);
        group.addChild(mask);
        mask.clipMask = true;
    }

    group.visible = false;
}


// Loop through all paths and pathgroups
function drawWord() {    
    //Clear previous sprite
    first.removeChildren();

    //Delete all previosly drawn worms
    drawing.removeChildren();

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

var factorPhase = 0;
// Rraw sprite along a path
function drawPath(sprite, path) {
    var steps = path.length / ((100 - p.density)+1) * 2;
    var wavePhase = 1;
    
    var factor = sinBetween(0.3,1.2, factorPhase);
    factorPhase += 0.1;
    // bulbPhase += 0.05;
    var bulbscale = 1;
    var bulbSizeChange = p.bulbAmp/20 * factor;
    var bulbadd = p.bulbFreq * path.length/steps ;
    var twistadd = p.twist * path.length/steps;
    var waveadd = p.waveFreq * path.length/steps;
    var textadd = path.length/steps - path.length/steps * (p.textSpread/100)
    var textPos = 0;
    
    for (k=0; k<steps; k++) {

        var sCopy = sprite.clone();    
        drawing.addChild(sCopy);
        sCopy.visible = true;

        var cPos = path.getLocationAt(path.length - (k*(path.length/steps))); 

        // Bulb effect
        if (p.bgEffect == 1) {
            sCopy.scale(sinBetween(1, bulbSizeChange, bulbscale));
            bulbscale += bulbadd/1000;     
        }
        
        sCopy.position = cPos.point;
        
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
       
        // Text line style
        if (p.lineStyle == 7) {
            var text = sCopy.children['textContainer 1'].children[0];
            text.position.x += textPos;
            textPos += textadd;
        }
        

        //Wavy line effect
        if (p.lineStyle == 6) {
            
            var thisLines = sCopy.children['lines 1'].children;
            for (i=0; i<thisLines.length; i++) {
                if (thisLines[i].data.direction == 'vert') {
                    thisLines[i].scale(1, sinBetween(1, p.waveAmp, wavePhase));
                }
                if (thisLines[i].data.direction == 'horiz') {
                    thisLines[i].scale(sinBetween(1, p.waveAmp, wavePhase), 1);
                }
            }
            wavePhase += waveadd/70;     
        }

        //Rotation + twist
        sCopy.rotation = p.rotation + k*twistadd/250;
    }

    //Cap styles
    if (p.cap == 0) {
        var cap = new Shape.Rectangle({
            point: [sCopy.position.x-p.size/2, sCopy.position.y-p.size/2],
            size: [p.size, p.size],
            fillColor: p.bgColor
        })
       
        cap.rotation = p.rotation + k* p.twist * path.length/steps;
        drawing.addChild(cap);
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

// Update all params given in function parameters 
function updateParams() {  
    
    for(key in arguments) {
        var arg = arguments[key];

        for (key in arg) {    
            var val = arg[key];
            if (key == 'textContent') {
                p.textContent = val;
            }
            else {
                eval("p." + key + " = " + val);
            }
            var uiel = document.getElementById(key);
            if(val.components) {
                uiel.value = rgb2hex(val);
            }
            else {    
                if (uiel.type == "range") {
                    var k = document.getElementById(key + 'Val');
                    k.innerHTML = val;
                }
                
                uiel.value = val;
            }
        }
    }

    drawWord();
}

function updateAnim(val) {
    // showProgress();

    setTimeout(function(){ 
        delete val.name;
        updateParams(val);
        centerLayers();
        // hideProgress();
        // drawingBg.sendToBack();
     }, 50);
    
}

function updateFromUI(val) {
    showProgress();

    setTimeout(function(){ 
        delete val.name;
        updateParams(val);
        centerLayers();
        hideProgress();
        // drawingBg.sendToBack();
     }, 50);
    
}

// UI for manipulating the effect. Initialize all properties defined in the main properties variable p 
function buildUI() {   
    for (i = 0; i< Object.keys(p).length; i++) {
        buildUIparam(Object.keys(p)[i]);
    }    
    // build extra params
    buildUIparam('preset');
}

// Initialize a single UI component
function buildUIparam(param) {
    var paramUIElement = document.getElementById(param);
    paramUIElement.onchange = function() {
        if (paramUIElement.type == "color") {
            var key = param;
            var update = {};
            update[key] = hex2rgb(this.value);
            updateFromUI(eval(update));
        }
        else {
            var key = param;
            var update = {};
            update[key] = this.value;
            if (paramUIElement.id == 'preset') {
                update = presets[this.value]
            }
            updateFromUI(update);
        }
        centerLayers();
    };

    paramUIElement.oninput = function() {
        var valel = document.getElementById(param + 'Val');
        if (paramUIElement.type != "color" && paramUIElement.nodeName != "SELECT" && paramUIElement.type != "text") {
            valel.innerHTML = this.value;
        }
    }
}



function centerLayers() {
    project.activeLayer.position = view.center;
    first.position = view.center;
    drawing.position = view.center;
}

var animStep = document.getElementById('step-animation');

animStep.onclick = function() {
    var rotStep = p.rotation + parseInt(document.getElementById('aRotation').value);
    // updateFromUI({rotation:rotStep});
    var ampStep = p.waveAmp + parseInt(document.getElementById('aWaveAmp').value);
    updateFromUI({
        waveAmp:ampStep,
        rotation:rotStep
    });
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

$('#log-params').click(function() {
    console.log(p);
});

$('#lineStyle').change(function() {
    $(this).parent().find('.collapseui').hide();
    if(this.value == 6) {
        $('#wavecollapsible').show();
    }
    if(this.value == 7) {
        $('#textcollapsible').show();
    }

});

$('#bgEffect').change(function() {
    $(this).parent().find('.collapseui').hide();
    if(this.value == 1) {
        $('#bulbcollapsible').show();
    }   
});

