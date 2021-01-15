
// Set default parameters
var presets = [
    {
        name: 'Default',
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
        lineOpacity: 100,
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
        bgOpacity: 100
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
        drawingBgColor: new Color(0.89804,0.82745, 0.76078),
        bgOpacity: 100
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
        lineOpacity: 100,
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
        bulbFreq: 50,
        bgOpacity: 100
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
        lineOpacity: 100,
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
        bulbFreq: 77,
        bgOpacity: 100
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
        lineOpacity: 100,
        lineStyle: 6,
        lineWidth: 3,
        lines: 3,
        rotation: 0,
        shadow: 2,
        size: 100,
        twist: 0,
        waveAmp: 7,
        waveFreq: 20,
        bgOpacity: 100
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
        density: 90,
        drawingBgColor: new Color(0.05882, 0.0549, 0.06275),
        drawingSize: 6,
        fade: 82,
        lineColor: new Color(1, 1, 1),
        lineOpacity: 100,
        lineStyle: 2,
        lineWidth: 9,
        lines: 9,
        rotation: 104,
        shadow: 61,
        size: 73,
        twist: 431,
        waveAmp: 3,
        waveFreq: 10,
        bgOpacity: 100
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
        density: 96,
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
        name:'Nasa',
        bgColor: new Color(0.78039, 0, 0.11765),
        bgEffect: 0,
        bgOpacity: 100,
        bgStyle: 0,
        bulbAmp: 15,
        bulbFreq: 50,
        cap: 2,
        corner: 27,
        density: 98,
        drawingBgColor: new Color(0.02745, 0.16471, 0.57255),
        drawingSize: 9,
        fade: 50,
        lineColor: new Color(1, 1, 1),
        lineOpacity: 48,
        lineStyle: 7,
        lineWidth: 3,
        lines: 11,
        rotation: 461,
        shadow: 38,
        size: 100,
        spikeAmp: 10,
        spikeFreq: 10,
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
        wedge: 50,
    },
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
        name: 'Gradient worm',
        bgColor: new Color(0.67059, 0.00392, 0.91373),
        bgEffect: "1",
        bgOpacity: 100,
        bgStyle: "3",
        bgType: "0",
        brushBlend: "normal",
        brushGradientBalance: "48",
        brushGradientColor: new Color(0, 0.76471, 0.90196),
        brushGradientTransparency: "100",
        brushGradientType: "",
        bulbAmp: 20,
        bulbFreq: 48,
        cap: 1,
        corner: "24",
        density: "95",
        drawingBgColor: new Color(1, 1, 1),
        drawingSize: 7,
        fade: 50,
        inCircleBlendmode: "normal",
        inCircleColor: new Color(0, 1, 0),
        inCircleOpacity: 100,
        inCircleSize: 30,
        lineColor: new Color(1, 1, 1),
        lineOpacity: "47",
        lineStyle: "6",
        lineWidth: "11",
        lines: "2",
        rotation: 20,
        shadow: "11",
        size: 180,
        spikeAmp: 10,
        spikeFreq: 10,
        stitchColor1: new Color(0.78039, 0, 0.11765),
        stitchColor2: new Color(1, 1, 1),
        stitchContent: "[[1,0,1,1,0,1,1,0,1], [0,1,0,1,1,1,0,1,0], [0,0,1,0,1,0,1,0,0], [0,0,0,1,0,1,0,0,0], [0,0,0,0,1,0,0,0,0],[0,0,0,1,0,1,0,0,0],[0,0,1,0,1,0,1,0,0],[0,1,0,1,1,1,0,1,0]]",
        stitchFreq: 5,
        stitchOn: 0,
        textBorderColor: new Color(1, 1, 1),
        textBorderWidth: 0,
        textBump: 0,
        textColor: new Color(1, 1, 1),
        textContent: "Wovon man nicht sprechen kann, darüber muß man schweigen.",
        textSize: 50,
        textSpread: 0,
        textYPos: 0,
        twist: 95.43167480579416,
        waveAmp: "9",
        waveFreq: "3",
        wedge: "32"
    },

    {
        name:'Debug',
        bgColor: new Color(0, 0, 0.6),
        bgEffect: 0,
        bgOpacity: 0,
        bgStyle: 0,
        bgBlend: 'normal',
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
// Initialize main variables
var runAnimation = false

// Variable for strogin animation frame
var animFrame = 0;

// Animation parameters
var animP = {
    // aRotationInc: 1,
    aRotationMin: 0,
    aRotationMax: 0,
    aBrushSizeMin: 80,
    aBrushSizeMax: 80,
    aTwistMin: 0,
    aTwistMax: 0,
    aBulbAmpMin: 0,
    aBulbAmpMax: 0,
    aBulbFreqMin: 0,
    aBulbFreqMax: 0
}

// Get parameters from UI and update animation parameters
$('.anim-control input').change(function() {
    var id = $(this).attr('id');
    var val = $(this).val();
    var d = JSON.parse('{"' + id + '": ' + val + '}');
    updateAnimP(d);
});

// Update animation parameters
function updateAnimP() {
    for(key in arguments) {
        var arg = arguments[key];
        for (key in arg) {    
            var val = arg[key];
            eval("animP." + key + " = " + val);        

            var uiel = document.getElementById(key);
            uiel.value = val;
            
        }
    }
}

updateAnimP(animP);

var animStep = document.getElementById('step-animation');

animStep.onclick = function() {
    render();
}

// Create a capturer that exports a WebM video
var capturer = new CCapture( { 
    format: 'png',
    framerate: 60,
    quality: 100,
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
    animFrame = 0;
}, false );

function animate() {
    if (runAnimation) {
        requestAnimationFrame( animate );
        render();
    }
}

function render() {

        var rotStep = parseFloat(p.rotation + animP.aRotationInc);
        
        var rotationNew = sinBetween(animP.aRotationMin, animP.aRotationMax, animFrame /50);
        var brushSizeNew = sinBetween(animP.aBrushSizeMin, animP.aBrushSizeMax, animFrame /50);
        var twistNew = sinBetween(animP.aTwistMin, animP.aTwistMax, animFrame /50);
        var bulbAmpNew = sinBetween(animP.aBulbAmpMin, animP.aBulbAmpMax, animFrame /50);
        var bulbFreqNew = sinBetween(animP.aBulbFreqMin, animP.aBulbFreqMax, animFrame /50);

        updateAnim({
            rotation:rotationNew,
            twist: twistNew,
            bulbAmp: bulbAmpNew,
            bulbFreq: bulbFreqNew,
            size: brushSizeNew
        });
        animFrame++;
    if( capturer ) capturer.capture( canvas );

}

// window.onload = function() {
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
    shadow: 20,
    cap: 1,
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
    brushGradientType: true,
    brushGradientBalance: 50,
    brushCrossWidth: 10,
    brushBubbleSize: 10,
    brushBubbleAmount: 4
}

var hue = 0;
var scale = 1;
var debugMode = false;



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

// var drawingContainer = new Path.Rectangle({
//     point: [0, 0],
//     size: [view.size.width, view.size.height],
//     fillColor: 'green',
//     selected: true
// });
// drawing.addChild(drawingContainer);


//Import SVG to canvas and refresh art
pathContainer.activate();
project.importSVG(url, function(item) {
    words = item;
    words.children[0].remove(); //import creates unwanted rectangle object we need to get rid of

    words.visible = false;
    pathContainer.position = view.center;
    // centerLayers();
    updateParams(p);
    buildUI();
    
})


// Make the sprite ------------------------------
function generateSprite() {
    first.activate();
    
    var bc = p.brushStrokeColor;
    bc.alpha = p.brushStrokeOpacity / 100;

    // Rectangle type brush
    if (p.bgType == 0) {
        

        var brush = new Path.Rectangle({
            point: [0, 0],
            size: [p.size, p.size],
            fillColor: p.bgColor,
            opacity: p.bgOpacity/100,
            blendMode: p.brushBlend,
            strokeWidth: p.brushStrokeWidth,
            strokeColor: bc
        });
       

        //Bottom rectangle that creates shadow
        var recB = new Shape.Rectangle({
            point: [0, p.size-5],
            size: [p.size, 5],
            fillColor: 'black'
        })

         recB.opacity = p.shadow/100;
    }


    // Circle brush type
    if (p.bgType == 1) {
        // Outer circle

        var brush = new Path.Circle({
            center: [p.size/2,p.size/2],
            radius: p.size/2,
            strokeColor: bc,
            opacity: p.bgOpacity/100,
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
        brush.opacity = p.bgOpacity/100;
        brush.fillColor = p.bgColor;
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
        brush.opacity = p.bgOpacity/100;
        brush.fillColor = p.bgColor;
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
        brush.opacity = p.bgOpacity/100;
        brush.fillColor = p.bgColor;
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
            var c = new Path.Circle({
                center: bcenter,
                radius: rad,
            });

            brush = brush.unite(c);
        }       

        var fillC = p.bgColor;
        fillC.alpha = p.bgOpacity/100;
        brush.strokeColor = bc;
        brush.blendMode = p.brushBlend;
        brush.fillColor = fillC;
        brush.strokeWidth = p.brushStrokeWidth;
    }


    // Gradient
    if (p.bgStyle == 3) {
        var endCol = p.brushGradientColor;
        endCol.alpha = (100 - p.brushGradientTransparency) /100;    
        var orig = [p.size/2,p.size/2];
        if (!p.brushGradientType) {
            var orig = brush.bounds.leftCenter;
        }

        var start = (p.brushGradientBalance-50)/100*2;
        if (p.brushGradientBalance <= 50) start = 0;
        var end = (p.brushGradientBalance)/100*2;
        if (p.brushGradientBalance >= 50) end = 1;
        
        brush.fillColor = {
            gradient: {
                stops: [[p.bgColor, start], [endCol, end]],
                radial: p.brushGradientType
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
        // console.log('tehdään teksti');
        
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


    //Delete all previosly drawn worms
    drawing.removeChildren();

    //Scale SVG
    var myScale = p.drawingSize / scale;
    words.scale(myScale); 
    scale = p.drawingSize; 

    //Generate new drawing sprite
    // generateSprite();

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
// Draw sprite along a path
function drawPath(sprite, path) {
    drawing.activate();
    var steps = path.length / ((101 - p.density)) * 2;
    
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

    var points = [];
    for (k=0; k<steps; k++) {
        points.push(path.getPointAt(path.length - (k*(path.length/steps))));
    }

    // debug only
    if (debugMode) {
        var debugpos = points[k];
        var g = new Path.Circle(debugpos, 1);
        g.fillColor = 'green';
        g.selected = true;
    }
    
    for (k=0; k<steps; k++) {
        

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
            // console.log(stitchColors);
            
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
            var uiel = document.getElementById(key);
            
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
    //Clear previous sprite
    first.removeChildren();
    generateSprite();
    drawWord();
}

function updateAnim(val) {

    setTimeout(function(){ 
        delete val.name;
        updateParams(val);
     }, 50);
}

function updateFromUI(val) {
    showProgress();

    setTimeout(function(){ 
        delete val.name;
        updateParams(val);
        hideProgress();
     }, 50);
}



// UI for manipulating the effect. Initialize all properties defined in the main properties variable p 
function buildUI() {   
    // go through the properties in p
    for (i = 0; i< Object.keys(p).length; i++) {
        buildUIparam(Object.keys(p)[i]);
    }    
    // Preset selector is an exection (does it need to be?)
    buildUIparam('preset');
}

// Initialize a single UI component
function buildUIparam(param) {
    // get the input element that is responsible for a given parameter
    var paramUIElement = document.getElementById(param);

    // when the value is changed, update value to drawing and p -variable
    paramUIElement.onchange = function() {
        var update = {};

        // If element is color, convert to RGB value for paper.js
        if (paramUIElement.type == "color") {  
            var d = hex2rgb(this.value);
            console.log(d)
            update[param] = d;
            console.log(update);
            updateFromUI(eval(update));
        }

        // Make sure we're sending numerical values from range inputs
        if (paramUIElement.type == "range") {
            update[param] = parseInt(this.value);
            updateFromUI(update);
        } 
    
        if (paramUIElement.type != "range" && paramUIElement.type != "color") {
            update[param] = this.value;
        
            if (paramUIElement.id == 'preset') {
                update = presets[this.value]
            }

            updateFromUI(update);
        }
    };

    // Bind the input to update in real time next to input label
    paramUIElement.oninput = function() {
        var valel = document.getElementById(param + 'Val');
        if (paramUIElement.type != "color" && paramUIElement.nodeName != "SELECT" && paramUIElement.type != "text") {
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
});


$('#debug').click(function() {
    debugMode = !debugMode;
    // console.log(debugMode);
    if (debugMode) {
        words.visible = true;
        words.selected = true;
    }
    else {
        words.visible = false;
        words.selected = false;
    }
    // updateParams(p);
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

$('.tab').click(function(){
    $('.ui-section').hide();
    var act = $(this).data('target');
    $('#' + act).show();
    $('.tab').removeClass('active');
    $(this).addClass('active');
});

$('#effect, #brush, #lines-section, #text, #stitch, #anim').hide();