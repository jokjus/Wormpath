// PRESETS ===============================================================================
// =======================================================================================
// Use with caution!
// localStorage.clear(); 
var presets;
var origPresets;

function setOrigPresets() {
    origPresets = [
        {
            name: 'Snö',
            bgColor: new Color( 0,0,0),
            bgEffect: 0,
            bgOpacity: 100,
            bgStyle: 0,
            bgType: 0,
            brushBlend: "normal",
            bulbAmp: 15,
            bulbFreq: 50,
            cap: 1,
            corner: "17",
            density: "98",
            drawingBgColor: new Color( 0, 0, 0),
            drawingSize: "11",
            fade: "0",
            inCircleBlendmode: "normal",
            inCircleColor: new Color( 0, 1, 0),
            inCircleOpacity: 100,
            inCircleSize: 30,
            lineColor: new Color( 1, 1, 1),
            lineOpacity: "100",
            lineStyle: "6",
            lineWidth: "2",
            lines: "4",
            rotation: 20,
            shadow: 20,
            size: "138",
            spikeAmp: 10,
            spikeFreq: 10,
            stitchColor1: new Color(0.01961, 0.01961, 0.01961),
            stitchColor2: new Color(1, 1, 1),
            stitchContent: "[[1,0,1,1,0,1,1,0,1], [0,1,0,1,1,1,0,1,0], [0,0,1,0,1,0,1,0,0], [0,0,0,1,0,1,0,0,0], [0,0,0,0,1,0,0,0,0],[0,0,0,1,0,1,0,0,0],[0,0,1,0,1,0,1,0,0],[0,1,0,1,1,1,0,1,0]]",
            stitchFreq: 5,
            stitchOn: "1",
            textBorderColor: new Color( 1, 1, 1),
            textBorderWidth: 0,
            textBump: 0,
            textColor: new Color( 1, 1, 1),
            textContent: "SNOW SNOW SNOW SNOW",
            textSize: "24",
            textSpread: 0,
            textYPos: "8",
            twist: "48",
            waveAmp: "12",
            waveFreq: "7",
            wedge: "58"
        },
        {
            name: 'Cream',
            bgColor: new Color(0.95294, 0.5098, 0.78824),
            bgEffect: 0,
            bgOpacity: 7,
            bgStyle: 0,
            bulbAmp: 15,
            bulbFreq: 50,
            cap: 2,
            corner: 111,
            density: 97,
            drawingBgColor: new Color( 1, 0.94118, 0.97647),
            drawingSize: 6,
            fade: 78,
            lineColor: new Color(1, 0.94118, 0.98039),
            lineOpacity: 100,
            lineStyle: 3,
            lineWidth: 2,
            lines: 8,
            rotation: 43,
            shadow: 0,
            size: 130,
            textBorderColor: new Color( 1, 1,1),
            textBorderWidth: 0,
            textColor: new Color(1, 1,1),
            textContent: "Wovon man nicht sprechen kann, darüber muß man schweigen.",
            textSize: 50,
            textSpread: 0,
            textYPos: 0,
            twist: 0,
            waveAmp: 7,
            waveFreq: 20,
            wedge: 8
        },
        {
            name:'Debug',
            bgColor: new Color(0, 0, 0.6),
            bgEffect: 0,
            bgOpacity: 0,
            bgStyle: 0,
            brushBlend: 'normal',
            bulbAmp: 15,
            bulbFreq: 50,
            cap: 1,
            corner: 0,
            density: 0,
            drawingBgColor: new Color(1, 1, 1),
            drawingSize: 9,
            fade: 0,
            lineColor: new Color(0, 0, 0.7),
            lineOpacity: 100,
            lineStyle: 1,
            lineWidth: 1,
            lines: 2,
            rotation: 0,
            shadow: 0,
            size: 50,
            spikeAmp: 0,
            spikeFreq: 0,
            textBorderColor: new Color(1, 1, 1),
            textBorderWidth: 2,
            textColor: new Color(0.78039, 0, 0.11765),
            textContent: "That’s one small step for man, one giant leap for mankind.",
            textSize: 37,
            textSpread: 8,
            textYPos: 21,
            textBump: 5,
            twist: 0,
            waveAmp: 7,
            waveFreq: 20,
            wedge: 50        
        }
    ];
    presets = origPresets;
}

//Load saved presets from a file
// Populate variable
if (localStorage.getItem("presets") !== null) {  // if localstorage item exists
    presets = JSON.parse(localStorage.getItem('presets'));

    // Convert saved hex colors to RGB
    for (i = 0; i < presets.length; i++) {    
        for (key in presets[i]) {
            var val = presets[i][key];   
            if (/^#[0-9A-F]{6}$/i.test(val)) {
                presets[i][key] = hex2rgb(val);
            }
        };
    }
}
// If localstorage is clear, get the hard coded presets
else {
    setOrigPresets(); 
}

populatePresetMenu();

// Populate UI menu for selecting a preset     
function populatePresetMenu() {
    // console.log(presets.length);
    for (i = 0; i < presets.length; i++) {    
        addPresetMenuItem(presets[i]['name'], i);           
    }
} 

// Add one option to presets menu
function addPresetMenuItem(presetName, i) {
    $('#preset').append(new Option(presetName, i));
}

// Save the new preset and give it a name according to the user input
$('#savePresets').click(function(){
    var presetName = $('#presetName').val();
    p.name = presetName;
    presets.push(p);

    // var newP = Object.assign({}, p);
    var newP = presets;

    // Loop through all presets and convert colors to hex values
    for (i = 0; i < newP.length; i++) {
        for (key in newP[i]) {
            var val = newP[i][key];   

            if (typeof val === 'object' && val != null) {                
                if ('red' in val) {
                    newP[i][key] = rgb2hex2(val);
                }
            }
        }
    }

    var js = JSON.parse(JSON.stringify(newP));

    // write JSON string to a localStorage file
    localStorage.setItem('presets', JSON.stringify(js));
    // Add new item to the presets menu
    addPresetMenuItem(presetName, presets.length-1);
    // Set newly added item as selected
    $('#preset').val(presets.length-1);
});

// ANIMATION =============================================================================
// =======================================================================================

// Initialize main vanimatio and capturer variables
var runAnimation = false // are we running?
var animFrame = 0;  // animation frame
var animDir = 1;    // animation direction
var capturer;       // capture object


var startCaptureBtn = document.getElementById( 'start-capture' ),
    stopCaptureBtn = document.getElementById( 'stop-capture' ),
    startAnimationBtn = document.getElementById( 'start-animation' ),
    stopAnimationBtn = document.getElementById( 'stop-animation' )

initializeAnimAndCapture();

function initializeAnimAndCapture() {
    stopAnimationBtn.style.display = 'none';
    startCaptureBtn.style.display = 'none';
    stopCaptureBtn.style.display = 'none';

    startAnimationBtn.addEventListener( 'click', function( e ) {
        runAnimation = true;
        animFrame = 0;
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
        // Create a capturer that exports a WebM video
        capturer = new CCapture( { 
            format: document.getElementById('aFormat').value,
            framerate: 60,
            quality: 100,
            verbose: true } );  

        capturer.start();
        this.style.display = 'none';
        stopCaptureBtn.style.display = 'inline-block';
        e.preventDefault();
    }, false );

    stopCaptureBtn.addEventListener( 'click', function( e ) {
        capturer.stop();
        this.style.display = 'none';
        capturer.save();
        animFrame = 0;
    }, false );
}

function animate() {
    if (runAnimation) {
        requestAnimationFrame( animate );
        render();
    }
}

function render() {

        var rotStep = parseFloat(p.rotation + p.aRotationInc);
        wiggleT += 0.02;
        // wiggleT += document.getElementById('aSpeed').value / 1000;

        var easing = document.getElementById('aEasing').value;
        //TODO: more features for selecting animation speed and easing, looping
        update({
            rotation: getAnimValue(easing, p.aRotationMin, p.aRotationMax),
            twist: getAnimValue(easing, p.aTwistMin, p.aTwistMax),
            bulbAmp: getAnimValue(easing, p.aBulbAmpMin, p.aBulbAmpMax),
            bulbFreq: getAnimValue(easing, p.aBulbFreqMin, p.aBulbFreqMax),
            size: getAnimValue(easing, p.aBrushSizeMin, p.aBrushSizeMax),
            noisePhase: getAnimValue(easing, p.aNoisePhaseMin, p.aNoisePhaseMax),
            noiseAmp: getAnimValue(easing, p.aNoiseAmpMin, p.aNoiseAmpMax),
            waveNoiseOffset: getAnimValue(easing, p.aWaveNoiseOffsetMin, p.aWaveNoiseOffsetMax),
            pathCompleteness: getAnimValue(easing, p.aPathCompletenessMin, p.aPathCompletenessMax),
            pathZigzagAmp: getAnimValue(easing, p.aZigzagAmpMin, p.aZigzagAmpMax)
        });
        if (animDir == 1) {
            animFrame++;
        }
        else {
            animFrame--
        }
        
    
    if( typeof capturer !== 'undefined') {
        if( capturer) capturer.capture( canvas );
    }    
}

function getAnimValue(animType, min, max) {
    if (animType == 'sine') {
        return sinAnim(min, max);
    }
    if (animType != 'sine') {
        return easingAnims(min, max, animType);
    }
}

function easingAnims(min, max, easing='easeInOutElasticAnim', phase=animFrame/50) {
    phase = animFrame / document.getElementById('aSpeed').value;
    var animValue = eval(easing + '(phase)');
    var range = max-min;
    if (phase >= 1) {animDir = 0}
    if (phase <= 0) {animDir = 1};
    return parseInt(min) + parseFloat(animValue * range);
}

function sinAnim(min, max, phase=animFrame/50) {
    phase = animFrame / document.getElementById('aSpeed').value;
    var f = sinBetween(parseInt(min), parseInt(max), phase);     
    return f;
}

// DRAWING ===============================================================================
// =======================================================================================

project.activeLayer.position = view.center;

var pathContainer = new Layer({position: view.center});
pathContainer.name = 'pathContainer';

var first = new Layer({position: view.center});
first.name = 'first';

var bg = new Layer({position: view.center});
bg.name = 'bg';

var drawing = new Layer({position: view.center});
drawing.name = 'drawing';


// Set default parameters
var p = {
    drawingBgColor: new Color(1,1,1),
    drawingSize: 7,
    bgType: 0,
    brushBlend: 'normal',
    size: 50,
    lines: 1,
    lineWidth: 3,
    density: 90,
    bgColor: new Color(0.78039, 0, 0.11765),
    bgOpacity: 100,
    brushStrokeColor: new Color(0, 0, 0),
    brushStrokeWidth: 0,
    brushStrokeOpacity: 100,
    lineStyle: 3,
    waveAmp: 7,
    waveFreq: 20,
    waveNoiseOn: 0,
    waveNoiseOffset:0,
    wavePhase: 10,
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
    textOn: 0,
    textSize: 50,
    textColor: new Color(1,1,1),
    textBorderColor: new Color(1,1,1),
    textBorderWidth: 0,
    textContent: 'Wovon man nicht sprechen kann, darüber muß man schweigen.',
    textSpread: 0,
    textYPos: 0,
    textBump: 0,
    wedge: 50,
    spikeAmp: 10,
    spikeFreq: 10,
    stitchOn: 0,
    stitchContent: '[[1,0,1,1,0,1,1,0,1], [0,1,0,1,1,1,0,1,0], [0,0,1,0,1,0,1,0,0], [0,0,0,1,0,1,0,0,0], [0,0,0,0,1,0,0,0,0],[0,0,0,1,0,1,0,0,0],[0,0,1,0,1,0,1,0,0],[0,1,0,1,1,1,0,1,0]]',
    stitchColor1:  new Color(0.78039, 0, 0.11765),
    stitchColor2: new Color(1,1,1),
    stitchColor1Opacity: 100,
    stitchColor2Opacity: 100,
    stitchFreq: 5,
    inCircleSize: 30,
    inCircleColor: new Color(0,1,0),
    inCircleOpacity: 100,
    inCircleBlendmode: 'normal',
    brushGradientColor: new Color(0,0,1),
    brushGradientTransparency: 0,
    brushGradientType: 1,
    brushGradientBalance: 50,
    brushCrossWidth: 10,
    brushBubbleSize: 10,
    brushBubbleAmount: 4,
    brushBubbleType: 0,
    noiseOn: 0,
    noiseFreq: 10,
    noiseAmp: 50,
    noisePhase: 10,
    noisePathOffset: 0,
    lastPointWiggle: 0,
    pathCompleteness: 100,
    pathZigZagOn: 0,
    pathZigzagAmp: 15,
    pathZigzagFreq: 10,
    hollowOn: 0,
    hollowSize: 50,
    hollowType: 0,
    aRotationMin: 20,
    aRotationMax: 20,
    aBrushSizeMin: 50,
    aBrushSizeMax: 50,
    aTwistMin: 0,
    aTwistMax: 0,
    aBulbAmpMin: 0,
    aBulbAmpMax: 0,
    aBulbFreqMin: 0,
    aBulbFreqMax: 0,
    aNoisePhaseMin: 0,
    aNoisePhaseMax: 0,
    aWaveNoiseOffsetMin: 0,
    aWaveNoiseOffsetMax: 0,
    aNoiseAmpMin: 0,
    aNoiseAmpMax: 0,
    aPathCompletenessMin: 100,
    aPathCompletenessMax: 100,
    aZigzagAmpMin: 0,
    aZigzagAmpMax: 0,
    aFormat: 'webm'
}

var hue = 0;
var scale = 1;
var debugMode = false;
var xin = p.noisePhase / 10;
var yin = p.noisePhase;
var xinW = p.wavePhase / 10;
var yinW = p.wavePhase;
var wiggleT = 0;


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
pathContainer.activate();
project.importSVG(url, function(item) {
    words = item;
    words.children[0].remove(); //import creates unwanted rectangle object we need to get rid of
    words.visible = true;

    pathContainer.position = view.center;
    // centerLayers();
    updateParams(p);
    generateSprite();
    drawWord();
    buildUI();
    
})


// Make the sprite ------------------------------
function generateSprite() {
    first.removeChildren();
    first.activate();
    
    var bc = p.brushStrokeColor;
    bc.alpha = p.brushStrokeOpacity / 100;

    var brushFill = p.bgColor;
    brushFill.alpha = p.bgOpacity / 100;

    // Rectangle type brush
    if (p.bgType == 0) {
        

        var brush = new Path.Rectangle({
            point: [0, 0],
            size: [p.size, p.size],
            fillColor: brushFill,
            blendMode: p.brushBlend,
            strokeWidth: p.brushStrokeWidth,
            strokeColor: bc
        });
       
        if (p.shadow > 0) {
            //Bottom rectangle that creates shadow
            var recB = new Shape.Rectangle({
                point: [0, p.size-5],
                size: [p.size, 5],
                fillColor: 'black'
            })

            recB.opacity = p.shadow/100;
        }
    }

    // Circle brush type
    if (p.bgType == 1) {
        // Outer circle

        var brush = new Path.Circle({
            center: [p.size/2,p.size/2],
            radius: p.size/2,
            strokeColor: bc,
            strokeWidth: p.brushStrokeWidth,
            blendMode: p.brushBlend
        });

        // Inner circle
        var brush2 = new Path.Circle({
            center: [p.size/2,p.size/2],
            radius: p.inCircleSize,
            strokeColor: p.inCircleColor,
            opacity: p.inCircleOpacity/100,
            strokeWidth: 5,
            blendMode: p.inCircleBlendmode
        });
    }

    //Double diamond brush
    if (p.bgType == 2) {
        var rec1 = new Path.Rectangle({
            point: [0, 0],
            size: [p.size/2, p.size/2],
        });

        var rec2 = new Path.Rectangle({
            point: [p.size/2, p.size/2],
            size: [p.size/2, p.size/2],
        });
        var brush = rec1.unite(rec2);

        var strC = p.brushStrokeColor;
        strC.alpha = p.lineOpacity/100;
        brush.strokeColor = bc;
        brush.blendMode = p.brushBlend;
        brush.fillColor = brushFill;
        brush.strokeWidth = p.brushStrokeWidth;

    }

    // Cross type brush
    if (p.bgType == 3) {
        var crossWidth = p.brushCrossWidth;
        var cp = (p.size-crossWidth) /2;

        var rec1 = new Path.Rectangle({
            point: [cp, 0],
            size: [crossWidth, p.size],
        });
        var rec2 = new Path.Rectangle({
            point: [0, cp],
            size: [p.size, crossWidth],
 
        });

        var brush = rec1.unite(rec2);
                
        brush.strokeColor = bc;
        brush.blendMode = p.brushBlend;
        brush.fillColor = brushFill;
        brush.strokeWidth = p.brushStrokeWidth;
    }

    // Pyramid brush type
    if (p.bgType == 4) {
        var tri1 = new Path.RegularPolygon({
            center: new Point(p.size/2, p.size*3/4),
            sides: 3,
            radius: p.size/2
        });
        var tri2 = tri1.clone();
        tri2.pivot = tri2.bounds.topCenter;
        tri2.rotate(180);
        tri2.position.y += 3;

        var brush = tri1.unite(tri2);

        brush.strokeColor = bc;
        brush.blendMode = p.brushBlend;
        brush.fillColor = brushFill;
        brush.strokeWidth = p.brushStrokeWidth;
    }

    // Bubbles brush type
    if (p.bgType == 5) {
        var rad = p.brushBubbleSize;

        var e = new Path.Circle({
            center: new Point(p.size/2, p.size/2),
            radius: p.size/2-rad
        });

        var brush = new Path();

        for (b = 0; b < p.brushBubbleAmount; b++) {
            var bcenter = e.getPointAt(e.length / p.brushBubbleAmount * b);
            if (p.brushBubbleType == 0) {
                var c = new Path.Circle({
                    center: bcenter,
                    radius: rad,
                });
            }   
            if (p.brushBubbleType == 1) {
                var c = new Path.Rectangle({
                    point: bcenter - new Point(rad, rad),
                    size: [rad*2, rad*2],
                });
            }

            brush = brush.unite(c);
        }       


        brush.strokeColor = bc;
        brush.blendMode = p.brushBlend;
        brush.fillColor = brushFill;
        brush.strokeWidth = p.brushStrokeWidth;
    }


    // Gradient
    if (p.bgStyle == 3) {
        var endCol = p.brushGradientColor;
        endCol.alpha = (100 - p.brushGradientTransparency) /100;    
        var orig = [p.size/2,p.size/2];
        if (p.brushGradientType == 0) {
            var orig = brush.bounds.leftCenter;
        }

        var start = (p.brushGradientBalance-50)/100*2;
        if (p.brushGradientBalance <= 50) start = 0;
        var end = (p.brushGradientBalance)/100*2;
        if (p.brushGradientBalance >= 50) end = 1;
        brush.fillColor = {
            gradient: {
                stops: [[p.bgColor, start], [endCol, end]],
                radial: Boolean(parseInt(p.brushGradientType))
            },
            origin: orig,
            destination: brush.bounds.rightCenter
        }
    }

    // Brush none
    if (p.bgStyle == 2) {
        brush.opacity = 0;
    }

    //Group for all lines
    var lines = new Group({
        name: 'lines'
    });

    //Group to hold the whole sprite
    var group = new Group({
        children: [brush, brush2, recB, lines],
        name: 'sprite'
        // pivot: myPivot
    });


    // Step for each line
    var rStep = p.size / (parseInt(p.lines) + 1);

    //Build lines
    for (x = 1; x < parseInt(p.lines) + 1; x++ ) {

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
    if (p.textOn == 1) {
        var text = new PointText(new Point(p.size, p.size-20-(p.size/100*p.textYPos)));
        var textMask = new Path.Rectangle(new Point(p.size-10, 0), new Size(10, p.size));
        text.content = document.getElementById('textContent').value;
        text.fillColor = p.textColor;
        text.fontSize = p.size * p.textSize/50;
        text.fontFamily = "Helvetica Neue";
        text.justification = 'right';
        text.strokeWidth = p.textBorderWidth;
        text.strokeColor = p.textBorderColor;

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

    // Hollow effect
    if (p.hollowOn == 1) {
        var hSize = p.size/2 * (100-p.hollowSize) / 100;
        if (p.hollowType == 0) {
            var hollowOut = new Path.Rectangle(new Point(0, 0), new Size(p.size, p.size));
            var hollowIn = new Path.Rectangle(new Point(hSize, hSize), new Size(p.size-2*hSize, p.size-2*hSize));
        }
        if (p.hollowType == 1) {
            var hollowOut = new Path.Circle(new Point(p.size/2, p.size/2), p.size/2);
            var hollowIn = new Path.Circle(new Point(p.size/2, p.size/2), p.size/2 - hSize);
            console.log(hollowIn);
        }
        var mask = hollowOut['subtract'](hollowIn);
        group.addChild(mask);
        mask.clipMask = true;
    }

    group.visible = false;
}

// Loop through all paths and pathgroups
function drawWord() {    

    // variable for keeping track of paths drawn
    var orderNo = 0;    
    //Delete all previosly drawn worms
    drawing.removeChildren();

    var myWords = words.clone();  
      

    //Scale SVG
    var myScale = p.drawingSize / scale;
    myWords.scale(p.drawingSize); 

    if (debugMode == true) {
        myWords.selected = true;
        myWords.visible = true
    };

    //Effect: Last point wiggle
    for (var i = 0; i < myWords.children.length; i++) {
        var ls = myWords.children[i].lastSegment;
        var xChange = perlin.get(wiggleT+i, wiggleT+i) * p.lastPointWiggle /10;
        ls.point.x += xChange;
    }

    //Effect: Zigzag
    if (p.pathZigZagOn == 1) {
        var amount = 100 - p.pathZigzagFreq;
        var amplitude = p.pathZigzagAmp + orderNo;
        

        for (var path of myWords.children) {
            // thisPathCount = Math.floor(path.length / amount);
            thisPathCount = path.length / amount;
            // console.log('stepit: ' + thisPathCount);
            var length = path.length;
            var newPoints = [];

            // Add points to a path defined by amount -variable
            for (i=0; i<thisPathCount; i++) {
                var offset = i / thisPathCount * length;
                // var offset = length / (thisPathCount-1) * i;
                var point = path.getPointAt(offset);                   
                newPoints.push(point);
            }

            path.removeSegments();
            
            for (i=0; i<thisPathCount; i++) {
                path.insert(i, newPoints[i]);
            }
            
            // Move points in zigzag
            for (i=1; i<thisPathCount; i++) {
                var normal = path.getNormalAt(path.segments[i].location) * amplitude;
                if (isEven(i)) {
                    path.segments[i].point += normal;
                }
                else {
                    path.segments[i].point -= normal;
                }
            }
            
            path.smooth();
        }

        
    }

    

    //Run Draw path function for every path in the text
    
    for (h = 0; h < myWords.children.length; h++) {
        var thisEl = myWords.children[h];
        if (!thisEl.hasChildren()) {
            drawPath(first.children['sprite'], thisEl, orderNo);
        }
        else {
            for (n = 0; n < thisEl.children.length; n++) {
                drawPath(first.children['sprite'], thisEl.children[n], orderNo); 
            }
        }
        orderNo++;
    }

    //Update background color
    drawingBg.fillColor = p.drawingBgColor;
    myWords.remove();
}

var factorPhase = 0;

// Draw sprite along a path
function drawPath(sprite, path, orderNo) {
    drawing.activate();
    var steps = path.length / ((101 - p.density)) * 2;
    // console.log(steps);
    
    var capHeight = p.size;
    var capSteps = capHeight / ((101 - p.density));

    // Variables for effects
    var wavePhase = 1;
    hue = 0;
    var factor = sinBetween(0.3,1.2, factorPhase);
    factorPhase += 0.1;
    var bulbscale = 1;
    var bulbSizeChange = p.bulbAmp/20 * factor;
    var bulbadd = p.bulbFreq * path.length/steps ;
    var twistadd = p.twist * path.length/steps;
    var waveadd = p.waveFreq * path.length/steps;
    var textadd = path.length/steps - path.length/steps * (p.textSpread/100)
    var textPos = 0;
    var spikeCounter = 0;
    var stitchCounter = 0;
    var stitchFreqCounter = 0;
    var stitchFreq = p.stitchFreq * steps/path.length;
    xin = (p.noisePhase / 10) + p.noisePathOffset/10 * orderNo;
    yin = (p.noisePhase) +  p.noisePathOffset/10 * orderNo;
    xinW = p.wavePhase / 10;
    yinW = p.wavePhase;
  

    var points = [];
    for (k=0; k<steps*p.pathCompleteness/100; k++) {
        points.push(path.getPointAt(path.length - (k*(path.length/steps))));
    }

    
    for (k=0; k<steps; k++) {
        
        //First let's take a clone that we can manipulate with effects
        var sCopy = sprite.clone();    
        drawing.addChild(sCopy);
        sCopy.visible = true;
        
        
        // Spike effect 
        if (p.lineStyle == 8) {
            if (spikeCounter < p.spikeFreq * path.length/steps) {
                
                var thisLines = sCopy.children['lines 1'].children;
                
                for (i=0; i<thisLines.length; i++) {
                    if (thisLines[i].data.direction == 'vert') {
                        thisLines[i].scale(1+ p.spikeAmp/10 * spikeCounter/p.spikeFreq, 1);
                    }
                    if (thisLines[i].data.direction == 'horiz') {
                        thisLines[i].scale(1, 1+ p.spikeAmp/10 * spikeCounter/p.spikeFreq);
                    }
                }   
                
                spikeCounter++;
            }
            else {
                spikeCounter = 0;
            }
        }
        
        // Stitch effect 
        if (p.stitchOn == 1) {
            var stitchContent = eval(p.stitchContent);
            var sNo = stitchContent[0].length;  // how many squares
            var sPatLength = stitchContent.length; // how long pattern

            var stitchColors = [];
            var c1 = p.stitchColor1;
            c1.alpha = p.stitchColor1Opacity / 100;
            var c2 = p.stitchColor2;
            c2.alpha = p.stitchColor2Opacity / 100;
            stitchColors.push(c1);
            stitchColors.push(c2);
            
            var stitchContainer = new Group({   // group for a single pattern line 
                name: 'stitchContainer2'
            })
            

            var thisLines = sCopy.children['lines 1'].children;
                
            for (i=0; i<thisLines.length; i++) {
                // if (thisLines[i].data.direction == 'vert') {
                //     thisLines[i].scale(1+ p.spikeAmp/10 * spikeCounter/p.spikeFreq, 1);
                // }
                if (thisLines[i].data.direction == 'horiz') {
                    var myl = thisLines[i]
                    myl.pivot = myl.bounds.bottom;
                    myl.scale(1, 0.9);
                    myl.pivot = myl.bounds.center;
                }
            }   

            // create individual lines
            for (i=0; i<sNo; i++) {
                var sRecPoint = new Point(i * (p.size / sNo), 0);
                var sRecSize = new Size(p.size/ sNo, p.size / sNo);
                var sRec = new Path.Rectangle(sRecPoint, sRecSize);
                sRec.fillColor = stitchColors[stitchContent[stitchCounter][i]];
                
                stitchContainer.addChild(sRec);
            }
            //Add stitch pattern to the sprite
            sCopy.addChild(stitchContainer);

            // Counters for stitch pattern repetition and stitch pattern length (= frequency)
            if (stitchFreqCounter > stitchFreq) {
                stitchFreqCounter = 0;
                stitchCounter++;
                if (stitchCounter > sPatLength-1) {stitchCounter = 0}
            }
            else {stitchFreqCounter++}
        }
        
        // Bulb effect
        if (p.bgEffect == 1) {
            sCopy.scale(sinBetween(1, bulbSizeChange, bulbscale));
            bulbscale += bulbadd/1000;     
        }

        // Noise effect
        if (p.noiseOn == 1) {
            var noiseScale = 1 + perlin.get(xin, yin) * p.noiseAmp / 50;
            sCopy.scale(noiseScale);
            xin += p.noiseFreq/1000 * path.length/steps / 2;
            yin += p.noiseFreq/1000 * path.length/steps / 2;
        }
        
        
        //Unicorn Background style
        if (p.bgStyle == 1) {
            if(p.bgType == 0) {
                sCopy.children[0].fillColor.hue += hue;
            }
            if(p.bgType == 0) {
                sCopy.children[0].strokeColor.hue += hue;
            }   
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
        if (p.textOn == 1) {
            var textContainer = sCopy.children['textContainer 1'];
            var text = sCopy.children['textContainer 1'].children[0];
            text.position.x += textPos;
            textContainer.position.x += p.textBump
            textPos += textadd;
        }
        
        
        //Wavy line effect
        if (p.lineStyle == 6) {
            var noiseScale;
            
            
            var thisLines = sCopy.children['lines 1'].children;
            for (i=0; i<thisLines.length; i++) {
                if (thisLines[i].data.direction == 'vert') {
                    thisLines[i].scale(1, getNoiseScale(i));
                }
                if (thisLines[i].data.direction == 'horiz') {
                    thisLines[i].scale(getNoiseScale(i), 1);
                }
            }
            wavePhase += waveadd/70; 
        }

        function getNoiseScale(lineNro) {
            if (p.waveNoiseOn) {
                xinW += p.waveFreq/1000 * path.length/steps / 2;
                yinW += p.waveFreq/1000 * path.length/steps / 2;                
                return 1 + perlin.get(xinW + p.waveNoiseOffset, yinW + p.waveNoiseOffset * lineNro) * p.waveAmp;
            }
            else {
                return sinBetween(1, p.waveAmp, wavePhase);
            }
        };

        // Wedge effect
        if (p.wedge != 50) {
            if (p.wedge <= 50) {
                var scaleWeight = k / steps;  
                var wedgeval = (50 - p.wedge) / 50;
            }
            if (p.wedge > 50) {
                var scaleWeight = 1 - k / steps;  
                var wedgeval = (p.wedge - 50) / 50;
            }
            var wedgeScale = 1 - wedgeval * scaleWeight;
           
            sCopy.scale(wedgeScale);    
        }


        // Put sprite to it's place along the path
        var cPos = points[k];
        sCopy.position = cPos;

        //Rotation + twist
        var rot = p.rotation + parseInt(k*twistadd/250);
        sCopy.rotate(rot);

        // Cap style dome
        if (p.cap == 4) {
            if (k > steps - capSteps) {
                var s = Math.abs((steps-k)- capSteps);
                sCopy.scale(1 / ((1+0.2) ** s));
            }
        }
        
    }

    //Cap styles
    if (p.cap == 0) {
        var cap = new Shape.Rectangle({
            point: [sCopy.position.x-p.size/2, sCopy.position.y-p.size/2],
            size: [p.size, p.size],
            fillColor: p.bgColor
        })
       
        cap.rotation = p.rotation + k*twistadd/250;
        drawing.addChild(cap);
    }

    //Vertical lines only
    if (p.cap == 2) {
        var myLines = sCopy.children['lines 1'];
        var l = myLines.children.length;
        for (i = l-1; i>=0; i--) {            
            if (myLines.children[i].data.direction == 'horiz') {
                myLines.children[i].remove();
            }
        }
    }

    //Horizontal lines only
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
            var uiel = document.getElementById(key);
            // console.log(val);
            // console.log(uiel);
            
            if (typeof val == 'string') {
                eval("p." + key + " = '" + val + "'");
            }

            else {
                eval("p." + key + " = " + val);
            }    
            
            if(val.components) {
                uiel.value = rgb2hex(val);
            }

            else {                   
                if (uiel.type == "range") {
                    var k = document.getElementById(key + 'Val');
                    k.innerHTML = Math.round(val * 100) / 100;
                }
                
                uiel.value = val;
            }
        }
    }
}

function updateFromUI(val) {
    showProgress();

    setTimeout(function(){ 
        update(val);
        hideProgress();
    }, 50);
}

function update(val) {
    var pp = Object.assign({}, val);
    delete pp.name; // because name is not a UI field
    updateParams(pp);
    generateSprite();
    drawWord();
}


// UI for manipulating the effect. Initialize all properties defined in the main properties variable p 
function buildUI() {   
    // go through the properties in p
    for (i = 0; i< Object.keys(p).length; i++) {
        buildUIparam(Object.keys(p)[i]);
    }    
    // Preset selector is an exeption (does it need to be?)
    buildUIparam('preset');
}

// Initialize a single UI component
function buildUIparam(param) {
    // get the input element that is responsible for a given parameter
    var paramUIElement = document.getElementById(param);

    // when the value is changed, update value to drawing and p -variable
    paramUIElement.onchange = function() {
        var update = {};

        // If element is checkbox, toggle checked property
        if (paramUIElement.type == "checkbox") {
            this.value = this.checked ? 1 : 0;
            update[param] = this.value;
            updateFromUI(update);
        } 

        // If element is color, convert to RGB value for paper.js
        if (paramUIElement.type == "color") {  
            var d = hex2rgb(this.value);
            update[param] = d;
            updateFromUI(eval(update));
        }

        // Make sure we're sending numerical values from range inputs
        if (paramUIElement.type == "range" || paramUIElement.type == "number") {
            update[param] = parseInt(this.value);
            updateFromUI(update);
        } 
    
        if (paramUIElement.type == "text" || paramUIElement.nodeName == "SELECT") {
            update[param] = this.value;
        
            if (paramUIElement.id == 'preset') {
                // console.log(this.value);
                update = presets[this.value]
            }

            updateFromUI(update);
            
        }
    };

    // Bind the input to update in real time next to input label
    paramUIElement.oninput = function() {
        if (paramUIElement.type == "range") {
            var valel = document.getElementById(param + 'Val');
            valel.innerHTML = this.value;
        }
    }
}

function centerLayers() {
    project.activeLayer.position = view.center;
    pathContainer.position = view.center;
    first.position = view.center;
    drawing.position = view.center;
    bg.position = view.center;
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
    // centerLayers();
    // updateParams(p);

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

function rgb2hex2 (rgb){
    var hex = componentToHex(rgb['red']) + componentToHex(rgb['green']) + componentToHex(rgb['blue'])
    return "#" + hex;
}

function componentToHex(c) {
    var hex = parseInt(c*255).toString(16);
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
    console.log(presets);
});


$('#debug').click(function() {
    debugMode = !debugMode;
    if (debugMode) {
        words.visible = true;
        words.selected = true;
    }
    else {
        words.visible = false;
        words.selected = false;
    }
});

$('#lineStyle').change(function() {
    $(this).parent().find('.collapseui').hide();
    if(this.value == 6) {
        $('#wavecollapsible').show();
    }
    if(this.value == 8) {
        $('#spikecollapsible').show();
    }

});

$('#bgEffect').change(function() {
    $(this).parent().find('.collapseui').hide();
    if(this.value == 1) {
        $('#bulbcollapsible').show();
    }   
});

$('#bgType').change(function() {
    $(this).parent().parent().find('.collapseui').hide();
    if(this.value == 1) {
        $('#brushtypecollapsible').show();
    }  
    if(this.value == 3) {
        $('#brushcrosscollapsible').show();
    }   

    if(this.value == 5) {
        $('#brushbubblesizecollapsible').show();
    }   
});

$('#bgStyle').change(function() {
    $(this).parent().find('.collapseui').hide();
    if(this.value == 3) {
        $('#brushgradientcollapsible').show();
    }   
});

$('.ui-section-label').click(function(){
    $(this).parent().find('.ui-control').toggle();
});

$('#wedgeVal').click(function(){
    updateFromUI({wedge:50});
});

$('#brushSizeReset').click(function(){
    p.aBrushSizeMin = p.size;
    p.aBrushSizeMax = p.size;
    $('#aBrushSizeMin').val(p.size);
    $('#aBrushSizeMax').val(p.size);
});



$('.tab').click(function(){
    $('.ui-section').hide();
    var act = $(this).data('target');
    $('#' + act).show();
    $('.tab').removeClass('active');
    $(this).addClass('active');
});

//Step animation one frame forward
document.getElementById('step-animation').onclick = function() {
    render();
};

$('#effects, #brush, #lines-section, #text, #stitch, #anim, #noise, #zigzag, #hollow').hide();

if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
};


function easeInOutCirc(x) {
    return x < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
}

function easeInOutElastic(x) {
    var c5 = (2 * Math.PI) / 4.5;
    return x === 0
        ? 0
        : x === 1
            ? 1
            : x < 0.5
                ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
                : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
}

function easeOutElastic(x) {
    var c4 = (2 * Math.PI) / 3;
    return x === 0
        ? 0
        : x === 1
            ? 1
            : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
}

function easeOutBounce(x) {
    var n1 = 7.5625;
    var d1 = 2.75;
    if (x < 1 / d1) {
        return n1 * x * x;
    }
    else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
    }
    else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
    }
    else {
        return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
}

function easeInOutExpo(x) {
    return x === 0
        ? 0
        : x === 1
            ? 1
            : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
                : (2 - Math.pow(2, -20 * x + 10)) / 2;
}
