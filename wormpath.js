
// Use with caution!

// localStorage.removeItem("projects"); 
// localStorage.clear(); 

// PROJECTS ===============================================================================
// =======================================================================================
var wpProjects = [];
var presets;
var origPresets;


if (localStorage.getItem("projects") !== null) {  // if localstorage item exists
    wpProjects = JSON.parse(localStorage.getItem('projects'));
    for (k = 0; k<wpProjects.length; k++) {
        allHex2RGB(wpProjects[k].master);
    }

}

populateProjectMenu();

function createProjectObject() {
    var projectName = $('#projectName').val();
    var tempMaster = Object.assign([], master);
    var tempWords = words.exportSVG({ asString: true });

    var newProject = {
        name: projectName,
        master: tempMaster,
        drawing: tempWords
    }

    return newProject;
}

$('#saveProject').click(function(){
    // Create the project object
    var newProject = createProjectObject();
    var myName = $('#projectSelector option:selected').text();
    newProject.name = myName;
    // console.log(newProject);

    // Replace project with the same name 
    const index = wpProjects.findIndex((el) => el.name === myName);
    // console.log(wpProjects[index]);
    wpProjects[index] = newProject;
    // wpProjects.map(obj => newProject.find(o => o.name === obj.name) || obj);

    var pro = wpProjects;
    // Loop through all projects and convert colors to hex values
    for (d=0; d<pro.length; d++) {
        allRGB2Hex(pro[d].master);
    }
    var js = JSON.parse(JSON.stringify(pro));
    // write JSON string to a localStorage file
    localStorage.setItem('projects', JSON.stringify(js));
});

$('#saveProjectAs').click(function(){
    // if (wpProject.projectName) TODO: check if a project with the same name already exists

    var newProject = createProjectObject();
    wpProjects.push(newProject);

    //Take a copy of all projects for saving
    var pro = wpProjects;
    // Loop through all presets and convert colors to hex values
    for (d=0; d<pro.length; d++) {
        allRGB2Hex(pro[d].master);
    }
    //Stringify for localstorage 
    var js = JSON.parse(JSON.stringify(pro));
    // write JSON string to a localStorage file
    localStorage.setItem('projects', JSON.stringify(js));
    // Add new item to the presets menu
    addProjectMenuItem(newProject.name, wpProjects.length-1);
    // Set newly added item as selected
    $('#projectSelector').val(wpProjects.length-1);
    $('#projectSelector').blur();
});

$('#loadProject').click(function(){ 
    var projNo = $('#projectSelector').val();
    master = wpProjects[projNo].master;
    words.activate();
    words.removeChildren    ();
    // var words = new Layer({position: view.center});
    // words.name = 'words';
    project.importSVG(wpProjects[projNo].drawing, function(item) {

        wordsImport = item;
        
        //let's ungroup imported SVG for easier access. Now paths are bare at words layer.
        wordsImport.parent.insertChildren(wordsImport.index,  wordsImport.removeChildren());
        wordsImport.remove();
        
        renderAllPaths();
        buildUI();
        updateUI();
    });
});


function allRGB2Hex(obj) {
    for (var i = 0; i < Object.keys(obj).length; i++) {
        for (key in obj[i]) {
            var val = obj[i][key];   

            if (typeof val === 'object' && val != null) {                
                if ('red' in val) {
                    obj[i][key] = rgb2hex2(val);
                }
            }
        }
    }
}


// Populate UI menu for selecting a preset     
function populateProjectMenu() {
    for (i = 0; i < wpProjects.length; i++) {    
        addProjectMenuItem(wpProjects[i]['name'], i);           
    }
} 

// Add one option to presets menu
function addProjectMenuItem(projectName, i) {
    $('#projectSelector').append(new Option(projectName, i));
}


// PRESETS ===============================================================================
// =======================================================================================
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
            shadow: 0,
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
    allHex2RGB(presets);
    
}
// If localstorage is clear, get the hard coded presets
else {
    setOrigPresets(); 
}

populatePresetMenu();

function allHex2RGB(obj) {
    // Convert saved hex colors to RGB
    for (var i = 0; i < obj.length; i++) {    
        for (key in obj[i]) {
            var val = obj[i][key];   
            if (/^#[0-9A-F]{6}$/i.test(val)) {
                obj[i][key] = hex2rgb(val);
            }
        };
    }
}

// Populate UI menu for selecting a preset     
function populatePresetMenu() {
    addPresetMenuItem('<Choose:>', 0)
    for (i = 0; i < presets.length; i++) {    
        addPresetMenuItem(presets[i]['name'], i);           
    }
} 

// Add one option to presets menu
function addPresetMenuItem(presetName, i) {
    $('.presetSelector').append(new Option(presetName, i));
}

// Save the new preset and give it a name according to the user input
$('#savePresets').click(function(){
    var presetName = $('#presetName').val();
    var tempP = Object.assign({}, master[selectedPaths[0]]);
    tempP.name = presetName;
    presets.push(tempP);

    // var newP = Object.assign({}, p);
    var newP = presets;
    // Loop through all presets and convert colors to hex values
    allRGB2Hex(newP);
    

    var js = JSON.parse(JSON.stringify(newP));

    // write JSON string to a localStorage file
    localStorage.setItem('presets', JSON.stringify(js));
    // Add new item to the presets menu
    addPresetMenuItem(presetName, presets.length-1);
    // Set newly added item as selected
    $('#preset').val(presets.length-1);
    $('#preset').blur();
});

$('#preset').change(function(){
    $(this).blur();
});

// ANIMATION =============================================================================
// =======================================================================================

// Initialize main vanimatio and capturer variables
var runAnimation = false // are we running?
var animFrame = 0;  // animation frame
var animMasterFrame = 0;
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

var animatedProperties = [
    {
        propName: 'rotation',
        min: 'aRotationMin',
        max: 'aRotationMax',
        animate: false,
        override: false
    },
    {
        propName: 'twist',
        min: 'aTwistMin',
        max: 'aTwistMax',
        animate: false,
        override: false
    },
    {
        propName: 'size',
        min: 'aBrushSizeMin',
        max: 'aBrushSizeMax',
        animate: false,
        override: false  // Overrides general animation values with every paths own values
    },
    {
        propName: 'noisePhase',
        min: 'aNoisePhaseMin',
        max: 'aNoisePhaseMax',
        animate: false,
        override: false 
    },
    {
        propName: 'noiseAmp',
        min: 'aNoiseAmpMin',
        max: 'aNoiseAmpMax',
        animate: false,
        override: false
    },
    {
        propName: 'noiseFreq',
        min: 'aNoiseFreqMin',
        max: 'aNoiseFreqMax',
        animate: false,
        override: false
    },
    {
        propName: 'waveNoiseOffset',
        min: 'aWaveNoiseOffsetMin',
        max: 'aWaveNoiseOffsetMax',
        animate: false,
        override: false
    },
    {
        propName: 'pathCompleteness',
        min: 'aPathCompletenessMin',
        max: 'aPathCompletenessMax',
        animate: false,
        override: false
    },
    {
        propName: 'pathZigzagAmp',
        min: 'aZigzagAmpMin',
        max: 'aZigzagAmpMax',
        animate: false,
        override: false
    },
    {
        propName: 'bulbAmp',
        min: 'aBulbAmpMin',
        max: 'aBulbAmpMax',
        animate: false,
        override: false
    },
    {
        propName: 'bulbFreq',
        min: 'aBulbFreqMin',
        max: 'aBulbFreqMax',
        animate: false,
        override: false
    },
    {
        propName: 'pathSpiralAmount',
        min: 'aPathSpiralAmountMin',
        max: 'aPathSpiralAmountMax',
        animate: false,
        override: false
    },
    {
        propName: 'brushNoisePhase',
        min: 'aBrushNoisePhaseMin',
        max: 'aBrushNoisePhaseMax',
        animate: false,
        override: false
    },
    {
        propName: 'wedge',
        min: 'aWedgeMin',
        max: 'aWedgeMax',
        animate: false,
        override: false
    }
]


        //     bulbAmp: getAnimValue(easing, p.aBulbAmpMin, p.aBulbAmpMax),
        //     bulbFreq: getAnimValue(easing, p.aBulbFreqMin, p.aBulbFreqMax),
 

function render() {

        wiggleT += 0.02; // hmm.. get rid of this
        
        // Go through all animated properties and if its animatable, update every paths properties
        for (animP of animatedProperties) { //for each anim property
            if (animP.animate) {            // check if animatable flag is up
                for (path of words.children) {  // then for every path
                    var myUpdate = {};          
                    var myProps = master[path.index]; // get paths properties
                    // get new value for this animation property
                    myUpdate[animP.propName] = getAnimValue(myProps.aEasing, myProps[animP.min], myProps[animP.max])
                    //update property and ui
                    updateOneParam(path.index, myUpdate);
                }
            }
        }
        
        // After properties are updated, render screen
        renderAllPaths();

        animDir == 1 ? animFrame++ : animFrame--;
        animMasterFrame++;
        
    if( typeof capturer !== 'undefined') {
        if( capturer) capturer.capture( canvas );
    }    
}

function getAnimValue(animType, min, max) {
    if (animType == 'flatForward') {
        return flatForward(min);        
    }
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

function flatForward(min, phase=animMasterFrame/50) {
    console.log('min: ' + min)
    phase = animMasterFrame / document.getElementById('aSpeed').value;
    return min + phase;
}

function sinAnim(min, max, phase=animFrame/50) {
    phase = animFrame / document.getElementById('aSpeed').value;
    var f = sinBetween(parseInt(min), parseInt(max), phase);     
    return f;
}

// DRAWING ===============================================================================
// =======================================================================================

project.activeLayer.position = view.center;

var words = new Layer({position: view.center});
words.name = 'words';

var first = new Layer({position: view.center});
first.name = 'first';

var bg = new Layer({position: view.center});
bg.name = 'bg';

var drawing = new Layer({position: view.center});
drawing.name = 'drawing';

var shadowLayer =  new Layer({position: view.center});
shadowLayer.name = 'shadowLayer';

var raster = new Raster('imagepainter');
raster.visible = false;

var depthMap = new Raster('depthMap');
depthMap.visible = false;

words.bringToFront();

// Set default parameters
var p = {
    drawingBgColor: new Color(1,1,1),
    drawingSize: 7,
    bgType: 0,
    brushBlend: 'normal',
    size: 50,
    lines: 0,
    lineWidth: 3,
    density: 90,
    bgColor: new Color(0.7, 0.7, 0.7),
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
    shadow: 0,
    cap: 2,
    capBothEnds: 0,
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
    patternType: 0,
    patternStrength: 3,
    patternWidth: 10,
    patternDensity: 10,
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
    brushRandomColor1: new Color('#4e908b'),
    brushRandomColor2: new Color('#568baa'),
    brushRandomColor3: new Color('#d98a19'),
    brushRandomColor4: new Color('#1e4181'),
    brushRandomColor5: new Color('#741852'),
    brushRandomColor6: new Color('#38123a'),
    brushRandomColorBias1: 10,
    brushRandomColorBias2: 10,
    brushRandomColorBias3: 10,
    brushRandomColorBias4: 10,
    brushRandomColorBias5: 10,
    brushRandomColorBias6: 10,
    brushCrossWidth: 10,
    brushBubbleSize: 10,
    brushBubbleAmount: 4,
    brushBubbleType: 0,
    brushBubbleIntersectOn: 0,
    brushBubbleInnerOn: 0,
    brushBubbleInnerColor: new Color(1,0,0),
    brushBubbleInnerSize: 10,
    brushBubbleInnerAmount: 4,
    brushBubbleInnerType: 0,
    brushCustomSprite: null,
    brushCustomSpriteOrigColors: false,
    brushLeavesAmount: 6,
    brushLeavesSize: 10,
    brushLeavesLength: 30,
    brushNoiseAmp: 10,
    brushNoiseFreq: 10,
    brushNoiseSmoothOn: 0,
    brushNoisePhase: 0,
    brushCircusAmount: 6,
    brushCircusType: 0,
    brushCircusC1: new Color(0, 1, 0),
    brushCircusC2: new Color(1, 0, 0),
    brushCircusC3: new Color(0, 0, 1),
    brushCircusC4: new Color(1, 1, 0),
    brushCircusC5: new Color(0, 1, 1),
    brushImagePainterResolution: 5,
    brushImagePainterVScale: 20,
    brushImagePainterHScale: 20,
    brushImagePainterType: 0,
    brushStripeCount: 5,
    brushStripeWidth: 5,
    brushDepthAmp: 10,
    brushDepthGamma: 10,
    brushDepthFreq: 10,
    brushDepthResolution: 100,
    brushDepthSmoothOn: 1,
    brushDepthHollow: 0,
    noiseOn: 0,
    noiseAngularOn: 0,
    noiseFreq: 10,
    noiseAmp: 50,
    noisePhase: 10,
    noisePathOffset: 0,
    lastPointWiggle: 0,
    pathCompleteness: 100,
    directionalContrast: 0,
    lineShadow: 0,
    lineShadowDistance: 1,
    lineShadowOffset: 0,
    lineShadowBooleanOn: 0,
    lineShadowColor: new Color(1, 0, 0),
    lineShadowWidth: 1,
    pathZigZagOn: 0,
    pathZigzagAmp: 15,
    pathZigzagFreq: 10,
    pathSpiralOn: 0,
    pathSpiralAmount: 20,
    pathSpiralDirection: 0,
    pathSpiralDrawingDirection: 0,
    hollowOn: 0,
    hollowSize: 50,
    hollowType: 0,
    pathStripesOn: 0,
    pathStripesCount: 10,
    pathStripesColor: new Color(0, 0, 0),
    pathStripesWidth: 1,
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
    aNoiseFreqMin: 0,
    aNoiseFreqMax: 0,
    aPathCompletenessMin: 100,
    aPathCompletenessMax: 100,
    aZigzagAmpMin: 0,
    aZigzagAmpMax: 0,
    aPathSpiralAmountMin: 0,
    aPathSpiralAmountMax: 0,
    aBrushNoisePhaseMin: 0,
    aBrushNoisePhaseMax: 0,
    aEasing: 'sine',
    aWedgeMin: 0,
    aWedgeMax: 0
}

var hue = 0;
var scale = 1;
var debugMode = false;
var xin = p.noisePhase / 10;
var yin = p.noisePhase;
var xinW = p.wavePhase / 10;
var yinW = p.wavePhase;
var wiggleT = 0;
var xinX = 1, yinX = 10;
var brushCircusPalette = [];
var brushRandomColors = [1,1];
var brushRandomColorsLocked = false;

var patterns = [
    {
      name: 'Laine',
      offs: [0, 50, 0],
      dists: [0, 50, 100],
      handles: [
        [['left', 0], ['right', 25]],
        [['left', 25], ['right', 25]],
        [['left', 25], ['right', 0]]
      ]
    },
    {
      name: 'Turkiskoro',
      offs: [0, 20, 30,  20,   0, -20, -30, -20],
      dists: [0,  0, 25, 50, 50, 50, 75, 100]
    },
    {
      name: 'Havukoro',
      offs:   [0, 20, 30, 50,  40, 60, 60, 40, 50, 30, 20,  0, -20, -30, -50, -40, -60, -60, -40, -50, -30, -20,  0],
      dists: [25, 25,  0,   0, 25, 25, 50, 50, 75, 75, 50, 50,  50,  25,  25,  50,  50,  75,  75, 100, 100,  75, 75]
    },
    {
      name: 'Ristikoro',
      offs:  [ -25, 0,  0, 25,  25,  50, 50,  25,  25,  0,   0,  -25, -25, -50, -50,   -25,  -25],
      dists: [ 25, 25,  0,  0,  25,  25,  50,  50, 75,  75,  50,  50,  75,  75,  100, 100,  125]
    },
    {
      name: 'Lohenpyrstö',
      offs:  [ six,  -six,  -six,   six,   six],
      dists: [ six,     0, 4*six, 3*six, 7*six ]
    },
    {
      name: 'Pilvikoro',
      offs:    [-40, -20,    20,  40,   20,    -20, -40],
      dists:   [0,  37.5,  12.5,  50,  87.5,  62.5, 100 ],
      handles: [[['left', 10], ['right', 10]], [['down', 10], ['up', 10]], [['down', 10], ['up', 10]], [['left', 10], ['right', 10]], [['up', 10], ['down', 10]], [['up', 10], ['down', 10]], [['right', 10], ['left', 10]] ] 
    },
    {
      name: 'Linnakekoro',
      offs:    [-40, -20,    20,  40,   20,    -20, -40],
      dists:   [0,  37.5,  12.5,  50,  87.5,  62.5, 100 ]
    },
    {
      name: 'Kuulalärkikoro',
      offs:    [ -4*six, -3*six, -2*six, 2*six, 3*six, 4*six, 3*six, 2*six, -2*six, -3*six, -4*six],
      dists:   [  0,     six, 0.5*six, 2.5*six, 2*six, 3*six, 4*six,  3.5*six,  5.5*six,  5*six, 6*six ],
      handles: [[['left', 10], ['right', 10]], 
      [['down', 10], ['up', 10]], 
      [['right', 0], ['up', 0]], 
      [['down', 0], ['left', 0]], 
      [['down', 10], ['up', 10]], 
      [['left', 10], ['right', 10]], 
      [['up', 10], ['down', 10]], 
      [['right', 0], ['up', 0]], 
      [['up', 0], ['right', 0]], 
      [['up', 10], ['down', 10]], 
      [['left', 10], ['right', 10]] ] 
    },
    {
      name: 'Liekki',
      offs:    [0, 30, 80, 120, 70, 40,   0],
      dists:   [20, 0, 20,  0, 65, 60, 100],
      handles:  [
        [['up', 0],['up', 0]],
        [['down', 20],['up', 20]],
        [['down', 15],['up', 20]],
        [['up', 0],['up', 0]],
        [['up', 30],['down', 10]],
        [['up', 10],['down', 20]],
        [['up', 0],['up', 0]]
      ]
    }
	

    
  ]

var six = 100/6;

// Load SVG from a file
var canvas = document.getElementById('canvas');
var scope = paper.setup(canvas);
var url = 'images/pathsource.svg';
var myWords;
var master = [];
var selectedPaths = [];
var pathEffectsEnabled = true;

var drawingBg = new Path.Rectangle({
    point: [0, 0],
    size: [view.size.width, view.size.height]
});
bg.addChild(drawingBg);

//Import SVG to canvas and refresh art
words.activate();
project.importSVG(url, function(item) {
    wordsImport = item;
    wordsImport.children[0].remove(); //import creates unwanted rectangle object we need to get rid of
    wordsImport.visible = true;
    wordsImport.opacity = 1;
    wordsImport.strokeWidth = 15;
    
    //let's ungroup imported SVG for easier access. Now paths are bare at words layer.
    wordsImport.parent.insertChildren(wordsImport.index,  wordsImport.removeChildren());
    wordsImport.remove();

    // Create an array where there's one set of all properties for every path in scene
    // This will be the main source of properties. There are alternative deep cloning methods commented.
    for (i=0; i<words.children.length; i++) {
        master.push(Object.assign({}, p));
    }
    words.position = view.center;
    words.opacity = 0; // set words opacity to zero so it's not visible but remain selectable

    myWords = words.clone(); //Let's keep words as a master for paths and take a clone
    myWords.name = 'myWords';

    renderAllPaths();
    buildUI();
    updateUI();
    
})


// Make the sprite ------------------------------
function generateSprite(myP) {
    first.removeChildren();
    first.activate();
    
    var bc = myP.brushStrokeColor;
    bc.alpha = myP.brushStrokeOpacity / 100;

    var brushFill = myP.bgColor;
    brushFill.alpha = myP.bgOpacity / 100;



    // Custom brush type, uploaded from SVG file
    if (myP.bgType == 6) {
        if (myP.brushCustomSprite != null) {
            var brush = myP.brushCustomSprite.clone();
            if (myP.brushCustomSpriteOrigColors) {
                brush.fillColor = brushFill;
            }
            
            brush.strokeWidth =  myP.brushStrokeWidth;
            brush.strokeColor = bc;
            brush.blendMode = myP.brushBlend;
            var bounds = new Path.Rectangle({
                point: [0, 0],
                size: [myP.size, myP.size],
            });

            brush.fitBounds(bounds.bounds);
        }
    }


    // Rectangle type brush
    if (myP.bgType == 0) {
        

        var brush = new Path.Rectangle({
            point: [0, 0],
            size: [myP.size, myP.size],
            fillColor: brushFill,
            blendMode: myP.brushBlend,
            strokeWidth: myP.brushStrokeWidth,
            strokeColor: bc
        });
       
        if (myP.shadow > 0) {
            //Bottom rectangle that creates shadow
            // var recB = new Shape.Rectangle({
            //     point: [0, myP.size-5],
            //     size: [myP.size, 5],
            //     fillColor: 'black'
            // })

            var recB = new Path.Line({
                from: [3, myP.size-3],
                to: [myP.size-3, myP.size-3],
                strokeWidth: 3,
                strokeColor: 'black'
            })

            var recC = new Path.Line({
                from: [3, 3],
                to: [myP.size-3, 3],
                strokeWidth: 4,
                strokeColor: 'white'
            })

            recB.opacity = myP.shadow/100;
            recC.opacity = myP.shadow/100;
        }
    }

    // Circle brush type
    if (myP.bgType == 1) {
        // Outer circle

        var brush = new Path.Circle({
            center: [myP.size/2,myP.size/2],
            radius: myP.size/2,
            strokeColor: bc,
            strokeWidth: myP.brushStrokeWidth,
            blendMode: myP.brushBlend
        });

        // Inner circle
        var brush2 = new Path.Circle({
            center: [myP.size/2,myP.size/2],
            radius: myP.inCircleSize,
            strokeColor: myP.inCircleColor,
            opacity: myP.inCircleOpacity/100,
            strokeWidth: 5,
            blendMode: myP.inCircleBlendmode
        });
    }

    //Double diamond brush
    if (myP.bgType == 2) {
        var rec1 = new Path.Rectangle({
            point: [0, 0],
            size: [myP.size/2, myP.size/2],
        });

        var rec2 = new Path.Rectangle({
            point: [myP.size/2, myP.size/2],
            size: [myP.size/2, myP.size/2],
        });
        var brush = rec1.unite(rec2);

        var strC = myP.brushStrokeColor;
        strC.alpha = myP.lineOpacity/100;
        brush.strokeColor = bc;
        brush.blendMode = myP.brushBlend;
        brush.fillColor = brushFill;
        brush.strokeWidth = myP.brushStrokeWidth;

    }


    // Cross type brush
    if (myP.bgType == 3) {
        var crossWidth = myP.brushCrossWidth;
        var cp = (myP.size-crossWidth) /2;

        var rec1 = new Path.Rectangle({
            point: [cp, 0],
            size: [crossWidth, myP.size],
        });
        var rec2 = new Path.Rectangle({
            point: [0, cp],
            size: [myP.size, crossWidth],
 
        });

        var brush = rec1.unite(rec2);
                
        brush.strokeColor = bc;
        brush.blendMode = myP.brushBlend;
        brush.fillColor = brushFill;
        brush.strokeWidth = myP.brushStrokeWidth;
    }

    // Pyramid brush type
    if (myP.bgType == 4) {
        var tri1 = new Path.RegularPolygon({
            center: new Point(myP.size/2, myP.size*3/4),
            sides: 3,
            radius: myP.size/2
        });
        var tri2 = tri1.clone();
        tri2.pivot = tri2.bounds.topCenter;
        tri2.rotate(180);
        tri2.position.y += 3;

        var brush = tri1.unite(tri2);

        brush.strokeColor = bc;
        brush.blendMode = myP.brushBlend;
        brush.fillColor = brushFill;
        brush.strokeWidth = myP.brushStrokeWidth;
    }

    // Bubbles brush type
    if (myP.bgType == 5) {
        var rad = myP.brushBubbleSize;

        var e = new Path.Circle({
            center: new Point(myP.size/2, myP.size/2),
            radius: myP.size/2-rad
        });

        var brush = new Path();

        for (b = 0; b < myP.brushBubbleAmount; b++) {
            var bcenter = e.getPointAt(e.length / myP.brushBubbleAmount * b);
            var bNextCenter = e.getPointAt(e.length / myP.brushBubbleAmount * (b+1));
            if (myP.brushBubbleType == 0) {
                var c = new Path.Circle({
                    center: bcenter,
                    radius: rad,
                });
            }   
            if (myP.brushBubbleType == 1) {
                var c = new Path.Rectangle({
                    point: bcenter - new Point(rad, rad),
                    size: [rad*2, rad*2],
                });
            }
            if (myP.brushBubbleIntersectOn == 1) {
                if (myP.brushBubbleType == 0) {
                    var cNext = new Path.Circle({
                        center: bNextCenter,
                        radius: rad,
                    });
                }   
                if (myP.brushBubbleType == 1) {
                    var cNext = new Path.Rectangle({
                        point: bNextCenter - new Point(rad, rad),
                        size: [rad*2, rad*2],
                    });
                }
                c = c.intersect(cNext);
            }
            brush = brush.unite(c);
        }       

        brush.strokeColor = bc;
        brush.blendMode = myP.brushBlend;
        brush.fillColor = brushFill;
        brush.strokeWidth = myP.brushStrokeWidth;

        if (myP.brushBubbleInnerOn == 1) {
            bInnerRad = myP.brushBubbleInnerSize

            var e = new Path.Circle({
                center: new Point(myP.size/2, myP.size/2),
                radius: myP.size/4-rad
            });
            
            var brush2 = new Path();

            for (d = 0; d < myP.brushBubbleInnerAmount; d++) {
                var bcenter = e.getPointAt(e.length / myP.brushBubbleInnerAmount * d);
                if (myP.brushBubbleInnerType == 0) {
                    var bi = new Path.Circle({
                        center: bcenter,
                        radius: bInnerRad,
                    });
                }   
                if (myP.brushBubbleInnerType == 1) {
                    var bi = new Path.Rectangle({
                        point: bcenter - new Point(bInnerRad, bInnerRad),
                        size: [bInnerRad*2, bInnerRad*2],
                    });
                }
    
                brush2 = brush2.unite(bi);
                brush2.fillColor = myP.brushBubbleInnerColor;
                brush2.strokeColor = 'black';
                brush2.strokeWidth = 1;
                // brush2.selected = true;
            }       
        }
    }

    // Brush Leaves type
    if (myP.bgType == 7) {
        rad = myP.brushLeavesSize;

        //Size of the brush
        var e = new Path.Ellipse({
            center: new Point(myP.size/2, myP.size/2),
            radius: myP.size/2-rad
        });

        var brush = new Group();

        //Create each leaf
        for (b = 0; b < myP.brushLeavesAmount; b++) {
            var offset = e.length / myP.brushLeavesAmount * b;
            var bcenter = e.getPointAt(offset); 
            var normal = e.getNormalAt(offset);
            var c = new Path.Circle({
                center: bcenter,
                radius: rad,
            });
            c.scale(1, 0.3);
            c.rotate(normal.angle+90);

            brush.addChild(c);
        }       

        brush.strokeColor = bc;
        brush.blendMode = myP.brushBlend;
        brush.fillColor = brushFill;
        brush.strokeWidth = myP.brushStrokeWidth;
    }

    // Noise style brush
    if (myP.bgType == 8) {

        var temp = new Path.Circle({
            center: [myP.size/2,myP.size/2],
            radius: myP.size/2,
        });   

        //Create a circle as a basis for this brush
        var brush = new Path();
        var normals = [];
        xinX = 0.5 + myP.brushNoisePhase/10;
        yinX = 0.2 + myP.brushNoisePhase/10;

        // Add points on the circle 
        for (i=0; i<myP.brushNoiseFreq; i++) {
            var offset = temp.length / myP.brushNoiseFreq * i; // get offsets evenly across circle
            var newP = temp.getPointAt(offset);         // get the coordinate point
            brush.add(newP);                            // add new point to empty path
            normals.push(temp.getNormalAt(offset));     // create array of normals
        }
        brush.closed = true;
        temp.remove();                                  // get rid of the temporary circle
         
        //Offset each point based on perlin noise
        for (d = 0; d < normals.length; d++) {
            var v = normals[d] * getNoiseVal();
            brush.segments[d].point += v;
        }
        // Smooth the path
        if (myP.brushNoiseSmoothOn == 1) {
            brush.smooth();
        }

        brush.strokeColor = bc;
        brush.blendMode = myP.brushBlend;
        brush.fillColor = brushFill;
        brush.strokeWidth = myP.brushStrokeWidth;

        // if (myP.shadow > 0) {
        //     var lightCut = new Path.Rectangle({
        //         from: brush.bounds.topLeft,
        //         to: [brush.bounds.topRight.x, brush.bounds.topRight.y + 20]
        //     });

        //     var shadowCut = new Path.Rectangle({
        //         from: [brush.bounds.bottomLeft.x, brush.bounds.bottomLeft.y - 20],
        //         to: brush.bounds.bottomRight
        //     });


        //     var lightPath = brush.intersect(lightCut);
        //     var shadowPath = brush.intersect(shadowCut);

        //     setProps(lightPath, 'white');
        //     setProps(shadowPath, 'black');

        //     function setProps(pathToSet, setColor) {
        //         pathToSet.strokeColor = setColor;
        //         pathToSet.fillColor = null;
        //         pathToSet.strokeWidth = myP.brushStrokeWidth;
        //     }

        // }


        

        function getNoiseVal() {
            xinX += myP.brushNoiseFreq/100;
            yinX += myP.brushNoiseFreq/100; 
            return (1 + perlin.get(xinX, yinX)) * myP.brushNoiseAmp;
            
        };
    }

    // Circus style brush
    if (myP.bgType == 9) {

        var brush = new Group();
        
        if (myP.brushCircusType == 0) {
            var bp = new Path.Circle({
                center: new Point(myP.size/2, myP.size/2),
                radius: myP.size/2
            })
        }

        if (myP.brushCircusType == 1) {
            var bp = new Path.Rectangle({
                point: new Point(0, 0),
                size: [myP.size, myP.size]
            })
        }

        nArcs = myP.brushCircusAmount;

        // generate split points for later use
        function getSlicePoints(n, path) {
            var points = new Array(n+1);
            for (var i = 0; i < n; i++) {
                points[i] = path.getPointAt(path.length*i/n)
            }
            points[n] = points[0];
            return points
        }

        sp = getSlicePoints(nArcs, bp);

        // slice a path according to provided split points
        function getArcs(n, sp, path) {
            // open path
            path.split(path.getLocationOf(sp[0]));
            for (var i = 1; i <= n; i++) {
                // split each arc in turn
                var loc = path.getLocationOf(sp[i]);
                var remaining = path.split(loc);
                // add split part of an arc to brush
                brush.addChild(path);
                if (path.length === 0) {
                    throw "length 0 at i=" + i;
                }
                path = remaining;
            }
        }

        getArcs(nArcs, sp, bp);

        brush.blendMode = myP.brushBlend;
        brush.fillColor = brushFill;
        brush.strokeWidth = myP.brushStrokeWidth;

        // apply color to each arc, in repeating pattern
        var k = 1;
        for (i=0; i<brush.children.length; i++) {
            var myCol = myP['brushCircusC' + k];
            myCol.alpha = myP.brushStrokeOpacity / 100;
            brush.children[i].strokeColor = myCol;
            k++;
            if (k > 5) { k = 1 };
        }
    }

    // Pattern brush effect
    if (parseInt(myP.bgEffect) == 2) {
        var brush = pattern(brush, myP.patternType, myP.patternStrength, myP.patternWidth, myP.patternDensity, false)

        var strC = myP.brushStrokeColor;
        strC.alpha = myP.lineOpacity/100;
        brush.strokeColor = bc;
        brush.blendMode = myP.brushBlend;
        brush.fillColor = brushFill;
        brush.strokeWidth = myP.brushStrokeWidth;
    }

    // Depth map
    if (myP.bgType == 12) {
        // The effect code is within DrawPath function
        
        // var brush = new Path();
    }

    // Gradient
    if (myP.bgStyle == 3) {
        var endCol = myP.brushGradientColor;
        endCol.alpha = (100 - myP.brushGradientTransparency) /100;    
        var orig = [myP.size/2,myP.size/2];
        if (myP.brushGradientType == 0) {
            var orig = brush.bounds.leftCenter;
        }

        var start = (myP.brushGradientBalance-50)/100*2;
        if (myP.brushGradientBalance <= 50) start = 0;
        var end = (myP.brushGradientBalance)/100*2;
        if (myP.brushGradientBalance >= 50) end = 1;
        brush.fillColor = {
            gradient: {
                stops: [[myP.bgColor, start], [endCol, end]],
                radial: Boolean(parseInt(myP.brushGradientType))
            },
            origin: orig,
            destination: brush.bounds.rightCenter
        }
    }

    // Imagepainter
    if (myP.bgType == 10) {
        // The effect code is within DrawPath function
        // console.log('imageBrush');
        
        var brush = new Path();
    }

    //Stripe brush
    if (myP.bgType == 11) {
    var brush = new Group({
        // applyMatrix: false
    });
    
    var rec1 = new Path.Rectangle({
        point: [0, 0],
        size: [myP.size, 5],
        parent: brush
    });

    var step = myP.size / (myP.brushStripeCount + 1);

    for (d = 1; d < myP.brushStripeCount + 1; d++) {
        var dot = new Path.Rectangle({
            point: [step * d, 0],
            size: [myP.brushStripeWidth, 5],
            parent: brush,
            fillColor: bc,
            blendMode: myP.brushBlend
        })
    }

    var strC = myP.brushStrokeColor;
    strC.alpha = myP.lineOpacity/100;
    brush.strokeColor = bc;
    brush.blendMode = myP.brushBlend;
    rec1.fillColor = brushFill;
    brush.strokeWidth = myP.brushStrokeWidth;

    }
    

    // Brush none
    if (myP.bgStyle == 2) {
        brush.opacity = 0;
    }

    

    //Group for all lines
    var lines = new Group({
        name: 'lines'
    });

    //Group to hold the whole sprite
    var group = new Group({
        // children: [brush, brush2, recB, recC, lines, lightPath, shadowPath],
        children: [brush, brush2, recB, recC, lines],
        name: 'sprite'
        // pivot: myPivot
    });


    // Step for each line
    var rStep = myP.size / (parseInt(myP.lines) + 1);

    //Build lines
    for (x = 1; x < parseInt(myP.lines) + 1; x++ ) {

        var thisOpacity = 1- ((x * (myP.fade / myP.lines)) / 100);

        //horizontal lines
        if (myP.lineStyle != 5) {
            var l = new Path.Rectangle({
                point: [rStep*x-myP.lineWidth/2, 0],
                size: [myP.lineWidth, myP.size],
                fillColor: myP.lineColor
            })
            
            l.opacity = thisOpacity - (1-myP.lineOpacity/100);  
            l.data.direction = 'horiz';
            lines.addChild(l); //add line to main group
        }

        //vertical lines
        if (myP.lineStyle != 4) {
            var l2 = new Path.Rectangle({
                point: [0, rStep*x-myP.lineWidth/2],
                size: [myP.size, myP.lineWidth],
                fillColor: myP.lineColor,
                opacity: myP.lineOpacity/100
            });

            l2.opacity = thisOpacity - (1-myP.lineOpacity/100);
            l2.data.direction = 'vert';
            lines.addChild(l2); //add line to main group 
        }
    }
 
    // Text effect
    if (myP.textOn == 1) {
        var text = new PointText(new Point(myP.size, myP.size-20-(myP.size/100*myP.textYPos)));
        var textMask = new Path.Rectangle(new Point(myP.size-10, 0), new Size(10, myP.size));
        // text.content = document.getElementById('textContent').value;
        text.content = myP.textContent;
        text.fillColor = myP.textColor;
        text.fontSize = myP.size * myP.textSize/50;
        text.fontFamily = "Helvetica Neue";
        text.justification = 'right';
        text.strokeWidth = myP.textBorderWidth;
        text.strokeColor = myP.textBorderColor;

        var textContainer = new Group({
            name: 'textContainer',
            children: [text, textMask]
        })

        textMask.clipMask = true;
        group.addChild(textContainer);        
    }

    // Corner radius with clipping mask
    if (myP.corner != 0) {
        var rectangle = new Rectangle(new Point(0, 0), new Size(myP.size, myP.size));
        var cornerSize = new Size(myP.corner,myP.corner);
        var mask = new Path.Rectangle(rectangle, cornerSize);
        group.insertChild(1, mask);
        mask.clipMask = true;
    }

    // Hollow effect
    if (myP.hollowOn == 1) {
        var hSize = myP.size/2 * (100-myP.hollowSize) / 100;
        if (myP.hollowType == 0) {
            var hollowOut = new Path.Rectangle(new Point(0, 0), new Size(myP.size, myP.size));
            var hollowIn = new Path.Rectangle(new Point(hSize, hSize), new Size(myP.size-2*hSize, myP.size-2*hSize));
        }
        if (myP.hollowType == 1) {
            var hollowOut = new Path.Circle(new Point(myP.size/2, myP.size/2), myP.size/2);
            var hollowIn = new Path.Circle(new Point(myP.size/2, myP.size/2), myP.size/2 - hSize);
        }
        var mask = hollowOut['subtract'](hollowIn);
        group.insertChild(1, mask);
        mask.clipMask = true;
    }

   

    group.visible = false;

    return group;
}

// Loop through all paths and pathgroups
function renderAllPaths() {    

    // variable for keeping track of paths drawn
    // var orderNo = 0;    
    //Delete all previosly drawn worms
    shadowLayer.removeChildren();
    drawing.removeChildren();
    myWords.remove();

    // Lets take a fresh clone of original paths so that modifiers such as Zigzag has a clean slate.
    myWords = words.clone();  
    myWords.name = 'myWords';

     //Scale SVG
    myWords.scale(master[0].drawingSize);

    //Effect: Last point wiggle
    function lastPointWiggle(path) {
        var myP = master[path.index];
        for (var i = 0; i < myWords.children.length; i++) {
            var ls = myWords.children[i].lastSegment;
            var xChange = perlin.get(wiggleT+i, wiggleT+i) * myP.lastPointWiggle;
            ls.point.x += xChange;
        }
    }

    //Effect: Zigzag

    function zigzag(path) {    
        var myP = master[path.index];
        var amount = 100 - myP.pathZigzagFreq;
        var amplitude = myP.pathZigzagAmp; // + orderNo;
        
        thisPathCount = Math.floor(path.length / amount);
        if (amount > path.length) thisPathCount = 2;
        var length = path.length;
        var newPoints = [];

        // Add points to a path defined by amount -variable
        for (i=0; i<thisPathCount; i++) {
            var offset = i / (thisPathCount) * length;
            // var offset = length / (thisPathCount-1) * i;
            var point = path.getPointAt(offset);                   
            newPoints.push(point);
        }

        newPoints.push(path.lastSegment.point);

        path.removeSegments(); // remove original points
        
        for (i=0; i<thisPathCount+1; i++) {
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

    //Effect: spiral
    function spiral(path) {
        var myP = master[path.index];
        var steps = 10;
        var amount = myP.pathSpiralAmount;
        var decrease = 6;
        var position = path.lastSegment.point;
        var lastPoint = path.firstSegment.point;
        
        var vector = position-lastPoint; //vector from path's end to end
        
        var startLength = path.length/5; //could be more exact calculation :9
        var startAngle = vector.angle; //use vectors angle as initial direction of the spiral

        if (myP.pathSpiralDirection == 1) {  // switch bending direction
            amount = -myP.pathSpiralAmount;
        }
        var newPoints = [position];  // initialize array for newly created points

        for (i=0; i<steps; i++) {
            var vector = new Point({
                angle: startAngle + i * amount/2,
                length: startLength - i * decrease
            });
            var point = new Point(position - vector);
            newPoints.push(point);
            position -= vector;
        }

        path.removeSegments(); // remove original points
            
        if (myP.pathSpiralDrawingDirection == 1) {
            for (i=0; i<steps; i++) {
                path.insert(0, newPoints[i]);
            }
        }
        else {
            for (i=0; i<steps; i++) {
                path.insert(i, newPoints[i]);
            }
        }

        path.smooth();
    }

    //Run Draw path function for every path in the text
    
    for (path of myWords.children) {
        if (pathEffectsEnabled == true) {
            if (master[path.index].pathSpiralOn == 1) {
                spiral(path);
            }        
            if (master[path.index].pathZigZagOn == 1) {
                zigzag(path);
            }  
            if (master[path.index].lastPointWiggle > 0) {
                lastPointWiggle(path);
            }
        }
        drawPath(generateSprite(master[path.index]), path);
    }

    //Update background color
    drawingBg.fillColor = master[0].drawingBgColor;

    if (debugMode == true) {
        myWords.visible = true
        myWords.selected = true;
        // words.selected = true;
        // words.visible = true;
    };

    showSelections();
}

var factorPhase = 0;

// Draw sprite along a path
function drawPath(sprite, path) {
    
    var myP = master[path.index];
    drawing.activate();
    var steps = path.length / ((101 - myP.density)) * 2;
    
    var capHeight = myP.size;
    var capSteps = capHeight / ((101 - myP.density));

    // Variables for effects
    var wavePhase = 1;
    hue = 0;
    var factor = sinBetween(0.3,1.2, factorPhase);
    factorPhase += 0.1;
    var bulbscale = 1;
    var bulbSizeChange = myP.bulbAmp/20 * factor;
    var bulbadd = myP.bulbFreq * path.length/steps ;
    var twistadd = myP.twist * path.length/steps;
    var waveadd = myP.waveFreq * path.length/steps;
    var textadd = path.length/steps - path.length/steps * (myP.textSpread/100)
    var textPos = 0;
    var spikeCounter = 0;
    var stitchCounter = 0;
    var stitchFreqCounter = 0;
    var stitchFreq = myP.stitchFreq * steps/path.length;
    xin = (myP.noisePhase / 10) + myP.noisePathOffset/10 * path.index;
    yin = (myP.noisePhase) +  myP.noisePathOffset/10 * path.index;
    xinW = myP.wavePhase / 10;
    yinW = myP.wavePhase;
    var lineGroup;
    var bc = myP.brushStrokeColor;
    bc.alpha = myP.brushStrokeOpacity / 100;
    var brushFill = myP.bgColor;
    brushFill.alpha = myP.bgOpacity / 100;
    var stripesDelta = 0;
    var noiseAngularCounter = 0;
    var noiseScaleAng;
    var depthMapCounter = 0;
    var stripes = []
    var stripeDensity = 10

    var points = [];
    for (k=0; k<steps*myP.pathCompleteness/100; k++) {
        points.push(path.getPointAt(path.length - (k*(path.length/steps))));
    }

    var sCopy;
    // console.log(steps);
    for (k=0; k<steps; k++) {
        
        //First let's take a clone that we can manipulate with effects
        sCopy = sprite.clone();    
        drawing.addChild(sCopy);
        sCopy.visible = true;
        lineGroup = sCopy.lastChild;
        


        // Spike effect 
        if (myP.lineStyle == 8) {
            if (spikeCounter < myP.spikeFreq * path.length/steps) {
                
                var thisLines = lineGroup.children;
                
                for (i=0; i<thisLines.length; i++) {
                    if (thisLines[i].data.direction == 'vert') {
                        thisLines[i].scale(1+ myP.spikeAmp/10 * spikeCounter/myP.spikeFreq, 1);
                    }
                    if (thisLines[i].data.direction == 'horiz') {
                        thisLines[i].scale(1, 1+ myP.spikeAmp/10 * spikeCounter/myP.spikeFreq);
                    }
                }   
                
                spikeCounter++;
            }
            else {
                spikeCounter = 0;
            }
        }
        
        // Stitch effect 
        if (myP.stitchOn == 1) {
            var stitchContent = eval(myP.stitchContent);
            var sNo = stitchContent[0].length;  // how many squares
            var sPatLength = stitchContent.length; // how long pattern

            var stitchColors = [];
            var c1 = myP.stitchColor1;
            c1.alpha = myP.stitchColor1Opacity / 100;
            var c2 = myP.stitchColor2;
            c2.alpha = myP.stitchColor2Opacity / 100;
            stitchColors.push(c1);
            stitchColors.push(c2);
            
            var stitchContainer = new Group({   // group for a single pattern line 
                name: 'stitchContainer2'
            })
            

            var thisLines = sCopy.children['lines 1'].children;
                
            for (i=0; i<thisLines.length; i++) {
                // if (thisLines[i].data.direction == 'vert') {
                //     thisLines[i].scale(1+ myP.spikeAmp/10 * spikeCounter/myP.spikeFreq, 1);
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
                var sRecPoint = new Point(i * (myP.size / sNo), 0);
                var sRecSize = new Size(myP.size/ sNo, myP.size / sNo);
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
        if (myP.bgEffect == 1) {
            sCopy.scale(sinBetween(1, bulbSizeChange, bulbscale));
            bulbscale += bulbadd/1000;     
        }

        // depth map
        if (myP.bgType == 12) {

            // Create temporary circle just for reference
            var temp = new Path.Circle({
                center: [myP.size/2,myP.size/2],
                radius: myP.size/2,
            });   
    
            //Create an empty path object as a basis for this brush
            var brush = new Path();
            // Initialize array to house a set of displacement normals
            var normals = [];
            // Add points on the circle with fixed intervals 
            for (i=0; i<myP.brushDepthResolution; i++) {
                var offset = temp.length / myP.brushDepthResolution * i; // get offsets evenly across circle
                var newP = temp.getPointAt(offset);         // get the coordinate point

                brush.add(newP);                            // add new point to empty path
                normals.push(temp.getNormalAt(offset));     // create array of 0 length normals
                brush.pivot = [myP.size/2, myP.size/2];
            }

            brush.closed = true;
            // Get rid of the reference circle
            temp.remove();                                  
            
            var stepsPerMap = steps / myP.brushDepthFreq * 10;
            
            if (depthMapCounter > stepsPerMap) depthMapCounter = 0;

            var le = depthMap.size.height / stepsPerMap * depthMapCounter;
            //Offset each point based on image luminosity value
            // var le = parseInt(depthMap.size.height / steps * k);
            

            for (d=0; d < normals.length; d++) {
                // Get color object for a single pixel
                var col = depthMap.getPixel(depthMap.size.width / myP.brushDepthResolution * d, le);
                var gray = 1 - col.gray;
                var gammaCorrectedGray = Math.pow(gray,  myP.brushDepthGamma / 10);

                if (gammaCorrectedGray  > 0) {
                    // Scale normals based on pixel luminance
                    var v = normals[d] * gammaCorrectedGray * myP.brushDepthAmp; 
                    // Move each point based on normal value
                    brush.segments[d].point += v;
                }
            }

            depthMapCounter++;


            // Smooth the path
            if (myP.brushDepthSmoothOn == 1) {
                brush.smooth();
            }

            if (myP.brushDepthHollow > 0) {
                var hole = Path.Circle({
                    center: [myP.size/2,myP.size/2],
                    radius: myP.size / 200 * myP.brushDepthHollow,
                })

                var b2 = brush;

                brush = b2.subtract(hole);
                b2.remove();
                hole.remove();
            
            }

            brush.strokeColor = bc;
            brush.strokeWidth = myP.brushStrokeWidth;
            brush.blendMode = myP.brushBlend;
            brush.fillColor = brushFill;

            if (myP.bgStyle == 3) {
                var endCol = myP.brushGradientColor;
                endCol.alpha = (100 - myP.brushGradientTransparency) /100;    
                var orig = [myP.size/2,myP.size/2];
                if (myP.brushGradientType == 0) {
                    var orig = brush.bounds.leftCenter;
                }
        
                var start = (myP.brushGradientBalance-50)/100*2;
                if (myP.brushGradientBalance <= 50) start = 0;
                var end = (myP.brushGradientBalance)/100*2;
                if (myP.brushGradientBalance >= 50) end = 1;
                brush.fillColor = {
                    gradient: {
                        stops: [[myP.bgColor, start], [endCol, end]],
                        radial: Boolean(parseInt(myP.brushGradientType))
                    },
                    origin: orig,
                    destination: brush.bounds.rightCenter
                }
            }

            sCopy.children[0] = brush;
            brush.remove();
            sCopy.pivot = [myP.size/2, myP.size/2];
        }

        // imagepainter
        if (myP.bgType == 10) {
            

            var brush = new Path();

            var res = myP.brushImagePainterResolution;
            var hScale = myP.brushImagePainterHScale/10;
            var offset = path.index * res * hScale;
            var vScale = myP.brushImagePainterVScale/10;

            for(i = 0; i<res; i++) {
                var col = raster.getPixel(offset + i*hScale, k*vScale);
                var v = 1 - col.gray;
                if (myP.brushImagePainterType == 0) {
                    var e = new Path.Circle({
                        center: [i*myP.size/res, 0],
                        radius: [v * myP.size / res,  v * myP.size / res]
                    });
                }
                if (myP.brushImagePainterType == 1) {
                    var e = new Path.Rectangle({
                        point: new Point(i*myP.size/res, 0),
                        size: new Size(v * myP.size/res, myP.size/res)
                    })   
                   
                }
                brush = brush.unite(e);
            }
            
            brush.strokeColor = bc;
            brush.strokeWidth = myP.brushStrokeWidth;
            brush.blendMode = myP.brushBlend;
            brush.fillColor = brushFill;

            sCopy.children[0] = brush;
            
        }

        // Noise effect
        
        if (myP.noiseOn == 1) {
            var noiseScale = 1 + perlin.get(xin, yin) * myP.noiseAmp / 50;
            
            // console.log(noiseAngularCounter);    
            if (myP.noiseAngularOn == 1) {
                if (noiseAngularCounter < myP.noiseFreq) {
                    sCopy.scale(noiseScaleAng);
                    noiseAngularCounter++;
                    // console.log(noiseAngularCounter); 
                }
                else {
                    sCopy.scale(noiseScale);
                    noiseScaleAng = noiseScale;
                    noiseAngularCounter = 0;
                }
            }
            
            if (myP.noiseAngularOn == 0) {
                sCopy.scale(noiseScale);
            }

            xin += myP.noiseFreq/1000 * path.length/steps / 2;
            yin += myP.noiseFreq/1000 * path.length/steps / 2;
        }
        
        // Leaves brush type
        if (myP.bgType == 7) {
            for (leave of sCopy.children[0].children) {
                var noiseScale = 1 + perlin.get(xin, yin) * myP.noiseAmp / 50;
                leave.scale(noiseScale); 
            }
            xin += myP.brushLeavesLength/1000;
            yin += myP.brushLeavesLength/1000;
        }
        
        //Unicorn Background style
        if (myP.bgStyle == 1) {
            if(myP.bgType == 0) {
                sCopy.children[0].fillColor.hue += hue;
            }
            // if(myP.bgType == 0) {
            //     sCopy.children[0].strokeColor.hue += hue;
            // }   
            if(myP.bgType == 6) {
                sCopy.children[0].fillColor.hue += hue;
            }
            hue += .1;
        }

        // Random background color style
        if (myP.bgStyle == 4) {
            var myColorNumber;

            if (brushRandomColorsLocked == true && brushRandomColors.length > 0) {
                myColorNumber = brushRandomColors[k];
            }

            else {
                var totalBias = 0;
                var biases = [0];

                for (b = 1; b < 7; b++) {
                    var myBias = myP['brushRandomColorBias' + b];
                    totalBias += myBias;
                    biases.push(totalBias);
                }

                var lot = getRandomInt(totalBias) + 1;

                for (c = 0; c < 7; c++) {
                    if (between(lot, biases[c], biases[c+1])) {
                        myColorNumber = c + 1;
                        brushRandomColors.push(myColorNumber);
                        break;
                    }
                }
            }
            
            var myCol = eval('myP.brushRandomColor' + myColorNumber);
            sCopy.children[0].fillColor = myCol;
            // console.log(brushRandomColors);
        }
        
        
        //Unicorn Line style
        if (myP.lineStyle == 0) {
            var thisLines = lineGroup.children;        
            for (i=0; i<thisLines.length; i++) {
                thisLines[i].fillColor.hue += hue;
            }     
            hue += .1;   
        }   
        
        // Text line style
        if (myP.textOn == 1) {
            var textContainer = sCopy.children['textContainer 1'];
            var text = sCopy.children['textContainer 1'].children[0];
            text.position.x += textPos;
            textContainer.position.x += myP.textBump
            textPos += textadd;
        }        
        
        //Wavy line effect
        if (myP.lineStyle == 6) {
            var noiseScale;
            
            
            var thisLines = lineGroup.children;
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
            if (myP.waveNoiseOn) {
                xinW += myP.waveFreq/1000 * path.length/steps / 2;
                yinW += myP.waveFreq/1000 * path.length/steps / 2;                
                return 1 + perlin.get(xinW + myP.waveNoiseOffset, yinW + myP.waveNoiseOffset * lineNro) * myP.waveAmp;
            }
            else {
                return sinBetween(1, myP.waveAmp, wavePhase);
            }
        };

        // Wedge effect
        if (myP.wedge != 50) {
            if (myP.wedge <= 50) {
                var scaleWeight = k / steps;  
                var wedgeval = (50 - myP.wedge) / 50;
            }
            if (myP.wedge > 50) {
                var scaleWeight = 1 - k / steps;  
                var wedgeval = (myP.wedge - 50) / 50;
            }
            var wedgeScale = 1 - wedgeval * scaleWeight;
           
            sCopy.scale(wedgeScale);    
        }
        
        // Directional contrast effect
        if (myP.directionalContrast > 0) {
            var myOffset = path.getOffsetOf(points[k]); 
            var myTangent = path.getTangentAt(myOffset);
            var myAngle = Math.abs(myTangent.angle);
            var dirScale;
            if (myAngle <= 90) dirScale = 1 + myAngle / 90;
            if (myAngle > 90) dirScale = 1 + (180 - myAngle) / 90;             
            sCopy.scale(dirScale ** (myP.directionalContrast / 20));
        }

        // Stripes effect
        if (myP.bgType == 11) {
            // var stripes = sCopy.children[0].children;
            // var stripeCount = stripes.length;            
            // var change = sinBetween(0, myP.size / 3, stripesDelta);

            // for (s = 1; s < 6; s++) {
            //     var myX = myP.size / 6 * s;
            //     stripes[s].translate([change - myX / 2, 0]);
            // }
            // stripesDelta += 0.1; 
        }

        
        // Put sprite to it's place along the path
        var cPos = points[k];
        sCopy.position = cPos;
        
        
        //Rotation + twist
        var rot = myP.rotation + parseInt(k*twistadd/250);
        sCopy.rotate(rot);
        
        // Cap style point
        if (myP.cap == 4) {
            if (k > steps - capSteps) {
                var s = Math.abs((steps-k)- capSteps);
                sCopy.scale(1 / ((1+0.2) ** s));
            }
        }
        
        // Cap style dome
        if (myP.cap == 5) {
            if (k > steps - capSteps) {
                var s = Math.abs((steps-k)- capSteps);
                var myScale = 1 - ( 1 / (1.2 ** capSteps) * (1.2 ** s));
                sCopy.scale(myScale);
            }

            if(capBothEnds) {
                if (k < capSteps) {
                    // var s = Math.abs((steps-k)- capSteps);
                    var s = capSteps - k
                    var myScale = 1 - ( 1 / (1.2 ** capSteps) * (1.2 ** s));
                    sCopy.scale(myScale);
                } 
            }
        }
        
        // Line shadow effect 
        if (myP.lineShadow > 0) {
            // Take copy of the sprite
            var shaCopy = sCopy.clone();
            // Put brush path into a variable
            var shaPath = shaCopy.children[0];
            // Calculate how large percentage of the whole length of the brush path is a shadow
            var shaSize = shaPath.length / 100 * myP.lineShadow;
            // If we use normal drawing mode, shadow elements are put in between sprites
            if (myP.lineShadowBooleanOn == 0) {
                drawing.addChild(shaCopy);
            }
            // If boolean mode is on, we can put shadows into their own layer since they are cut to size
            if (myP.lineShadowBooleanOn == 1) {
                shadowLayer.addChild(shaCopy);
            }
            // Presentation attributes of the shadow (TO DO)
            shaCopy.visible = true;
            shaCopy.strokeColor = myP.lineShadowColor;
            shaCopy.strokeWidth = myP.lineShadowWidth;     
            shaCopy.fillColor = null;

            // Calculate the mid point on brush path where shadow starts
            var shaMiddle = shaPath.getOffsetOf(shaPath.bounds.topCenter) + shaPath.length / 100 * myP.lineShadowOffset;
            // Calculate left + right points where shadow reaches
            var leftCut = shaPath.getLocationAt(shaMiddle - shaSize);
            var rightCut = shaPath.getLocationAt(shaMiddle + shaSize);

            // Cut sprite at left + right points
            var newp;
            newp = shaPath.splitAt(leftCut);
            newp = shaPath.splitAt(rightCut);

            if (newp != null) {
                newp.opacity = 0; // do not destroy the path in order to keep pivot in place
            }

            // Move shadow according to user input
            shaCopy.position += new Point(0, myP.lineShadowDistance);
            
            
        }

        // Stripes along the path effect
        if (myP.pathStripesOn == 1 && sCopy != undefined) {

            var stripedPath = sCopy.children[0]
            
            for (var i = 0; i < myP.pathStripesCount; i++) {
                var stripePoint = stripedPath.getPointAt(stripedPath.length / myP.pathStripesCount * i)
                stripes.push(stripePoint)
            }
        }
    }

    brushRandomColorsLocked = true;

    // Line shadow effect boolean (this is a slow method, meant for creating svg material usable on a pen plotter)
    if (myP.lineShadowBooleanOn == 1) {

        // create a dummy path
        var b = new Path({
            name: 'unitedSprites'
        });

        // add dummy to shadow layer
        shadowLayer.addChild(b);

        // Loop through worm sprites from end to begin
        for (x = Math.floor(steps); x > 0; x-- ) {

            shadowLayer.activate();

            // take a clone of a current sprite
            var d = drawing.children[x].children[0].clone();

            //add that clone to shadow layer
            shadowLayer.addChild(d);

            // unite brushes that are already united + next brush sprite
            b = b.unite(d, {insert: false});
            
            // remove temporary clone
            d.remove();

            // get shadow that is one step behind united sprites
            var mySha = shadowLayer.children[x-1].children[0];

            // remove opacity 0 part of the shadow (needed just for pivot point positioning)
            shadowLayer.children[x-1].children[1].remove();

            // subtract from shadow line all sprites that are on top of it
            var shaBool = mySha.subtract(b, {trace: false});

            // remove shadow line, since subracting created a new result path
            mySha.remove();
        }
        // When boolean operation is done, remove united sprites
        b.remove();
    }

    //Cap styles
    if (myP.cap == 0) {
        var cap = new Shape.Rectangle({
            point: [sCopy.position.x-myP.size/2, sCopy.position.y-myP.size/2],
            size: [myP.size, myP.size],
            fillColor: myP.bgColor
        })
       
        cap.rotation = myP.rotation + k*twistadd/250;
        drawing.addChild(cap);
    }

    //Vertical lines only
    // if (myP.cap == 2) {
    //     var l = lineGroup.children.length;
    //     for (i = l-1; i>=0; i--) {            
    //         if (lineGroup.children[i].data.direction == 'horiz') {
    //             lineGroup.children[i].remove();
    //         }
    //     }
    // }

    //Horizontal lines only
    if (myP.cap == 3) {
        var l = lineGroup.children.length;
        for (i = l-1; i>=0; i--) {
            if (lineGroup.children[i].data.direction == 'vert') {
                lineGroup.children[i].remove();
            }
        }
    }

    //debug only
    if (myP.pathStripesOn == 1) {

        for (var s = 0; s < myP.pathStripesCount; s++) {

            var stripe = new Path({
                strokeColor: myP.pathStripesColor,
                strokeWidth: myP.pathStripesWidth
            })

            for (var p = 0; p < steps; p++) {
                stripe.add(stripes[p * myP.pathStripesCount + s])
            }

            stripe.smooth()
        }

    }
}

function updateOneParam(pathIndex, updates) {
    for (key in updates) {
        var prop = updates[key];
        master[pathIndex][key] = prop; // set selected paths property
        updateUIParam(key, prop);       // update corresponding UI element
    }
}

function updateUIParam(key, prop, msg) {
    var uiel = document.getElementById(key);
    var visibleValue = '';
    // Custom sprite input is a file input, for time being just ignore it
    if (key == 'brushCustomSprite') {
        return
    }

    // update value in color UI component
    if(prop.components) {
        uiel.value = rgb2hex(prop);
    }

    // Update value in other types of UI components
    else {       
        // Update the sliders value into numerical indicator 
        uiel.value = prop;

        if (uiel.type == 'checkbox') {
            prop == 0 ? uiel.checked = false : uiel.checked = true;
        }
    
    }

    
    //Slider components have span element for showing numerical representation of the value.
    if (uiel.type == "range") {
        visibleValue = Math.round(prop * 100) / 100;         
    }
    
    if (msg) visibleValue = msg;
    var k = document.getElementById(key + 'Val');
    if (k!=null) {
        k.innerHTML = visibleValue;
    }

}

function updateUI() {
    if (selectedPaths.length == 0) {
        for (key in p) {        
            updateUIParam(key, p[key])
        }
    }

    if (selectedPaths.length == 1) {
        var myProps = master[selectedPaths[0]]; 
        for (key in myProps) {        
            updateUIParam(key, myProps[key])
        }
    }

    if (selectedPaths.length > 1) {
        for (prop in p) {  // eg. prop = rotation
            var compareProps = [];
            for (i = 0; i < selectedPaths.length; i++) {  // key = 0,1,...
                compareProps.push(master[selectedPaths[i]][prop]);  // eg. rotation of path nro 1 
            }

            allEqual(compareProps) ? updateUIParam(prop, compareProps[0]) : updateUIParam(prop, 0, 'mixed');

        }        
    }

    document.getElementById('preset').value = 0
}

// Update all selected paths with params given in function parameters 
function updateSelectedPathsParams(updates) {  
    // Loop through every paths properties in master variable
    for (i = 0; i<selectedPaths.length; i++) {
        if (updates == null) {
            var updates = master[selectedPaths[i]];
        }
        updateOneParam(selectedPaths[i], updates)
        // Loop through every key in passed properties object, eg. {noiseAmp: 10}
    }
}

// When updating from UI let's show progress indicator while working
function updateWithSpinner(val) {
    showProgress();

    setTimeout(function(){ 
        update(val);
        hideProgress();
    }, 50);
}

// Basic update function
function update(val) {
    var pp = Object.assign({}, val);
    delete pp.name; // because name is not a UI field
    updateSelectedPathsParams(pp);
    renderAllPaths();
}

function showSelections() {
    if (selectedPaths.length > 0) {
        for (i=0; i<selectedPaths.length; i++) {
            myWords.children[selectedPaths[i]].selected = true;
        }
    }
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
    if (paramUIElement != null) {
        paramUIElement.onchange = function() {
            var update = {};

            // If element is checkbox, toggle checked property
            if (paramUIElement.type == "checkbox") {
                this.value = this.checked ? 1 : 0;
                update[param] = this.value;
                updateWithSpinner(update);
            } 

            // If element is color, convert to RGB value for paper.js
            if (paramUIElement.type == "color") {  
                var d = hex2rgb(this.value);
                update[param] = d;
                // updateWithSpinner(eval(update));
                updateWithSpinner(update);
            }

            // Make sure we're sending numerical values from range inputs
            if (paramUIElement.type == "range" || paramUIElement.type == "number") {
                update[param] = parseInt(this.value);
                updateWithSpinner(update);
            } 
        
            if (paramUIElement.type == "text" || paramUIElement.nodeName == "SELECT") {
                update[param] = this.value;
            
                if (paramUIElement.id == 'preset') {
                    update = presets[this.value]
                }

                updateWithSpinner(update);
                
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

function between(x, min, max) {
    return x >= min && x <= max;
}
  

function sinBetween(min, max, t) {
    return ((max - min) * Math.sin(t) + max + min) / 2.
}

function allEqual(arr) {
    return new Set(arr).size == 1;
  }

// Export SVG ========================================================

var  exportButton = document.getElementById('export-button');

exportButton.addEventListener("click", function(e) {
	var svg = project.exportSVG({asString: true});
	var blob = new Blob([svg], {type: "image/svg+xml;charset=utf-8"});
	saveAs(blob, 'image.svg');

}, false);



$('#export-simple').click(function() {
    var mypaths = drawing.children;
    var simpAmount = document.getElementById('export-simple-amount').value / 10000;
    for (p=0; p<mypaths.length; p++) {
        mypaths[p].children[0].simplify(simpAmount);
    }

    var svg = project.exportSVG({asString: true});
	var blob = new Blob([svg], {type: "image/svg+xml;charset=utf-8"});
	saveAs(blob, 'image.svg');

});

// Console log debug information
$('#log-params').click(function() {
    console.log(p);
    console.log(presets);
    console.log('master:');
    console.log(master);
    console.log('animatedProperties:');
    console.log(animatedProperties);
    console.log('selectedPaths:');
    console.log(selectedPaths);
    console.log('projects:');
    console.log(wpProjects);
    console.log('myWords:');
    console.log(myWords);
});


$('#debug').click(function() {
    debugMode = !debugMode;
    if (debugMode) {
        myWords.visible = true;
        myWords.selected = true;
        // words.visible = true;
        // words.selected = true;
    }
    else {
        myWords.visible = false;
        myWords.selected = false;
    }
});


// Show collapsible UI section
$('.collapsibleTrigger').change(function(){
    $(this).parent().find('.collapse-button').remove(); //remove other toggles for this selection
    $('.collapseui').hide(); //hide other collapsibles

    showCollapsible($(this));
})

function showCollapsible(myEl) {
    var pos = myEl.offset();    
    pos.top = $('#ui-row').outerHeight();
    var c = myEl.children("option:selected").data('col');
    if (c != null) {
        myEl.after('<span class="collapse-button" data-col="' + c + 'Collapsible">Options</span>');
        var col =  $('#' + c + 'Collapsible');
        col.show().addClass('active').css(pos);
        if (col.offset().left + col.width() > $(window).width()) {
            col.css('right', 0);
            col.css('left', '');
        }
    }
}

function showAllCollapsibles() {
    $('.collapseui').hide();
    $('.collapse-button').remove();
    $('.collapsibleTrigger').each(function(){
        showCollapsible($(this));
    })
}

// Hide and show collapsible properties
$('#ui-row').on('click', 'span.collapse-button', function(){
    var colName = $(this).data('col');
    $('#' + colName).toggle();
});

// Easily reset wedge to balance
$('#wedgeVal').click(function(){
    updateWithSpinner({wedge:50});
});

// Easily set animation brush size to match the one in brush properties
$('#brushSizeReset').click(function(){
    p.aBrushSizeMin = p.size;
    p.aBrushSizeMax = p.size;
    $('#aBrushSizeMin').val(p.size);
    $('#aBrushSizeMax').val(p.size);
});

//Open tab
$('.tab').click(function(){
    $('.ui-section').hide();
    var act = $(this).data('target');
    $('#' + act).show();
    $('.tab').removeClass('active');
    $(this).addClass('active');
    showAllCollapsibles();
});

//Step animation one frame forward
document.getElementById('step-animation').onclick = function() {
    render();
};

$('.ui-section:not(.active)').hide();

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

function easeInBack(x) {
    var c1 = 1.70158;
    var c3 = c1 + 1;
    return c3 * x * x * x - c1 * x * x;
}

function easeInExpo(x) {
    return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
}

function easeInOutBack(x) {
    var c1 = 1.70158;
    var c2 = c1 * 1.525;
    return x < 0.5
        ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
        : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
}

function easeInQuart(x) {
    return x * x * x * x;
}


var dragging = false;
var segment, path, handle;

function onMouseUp(event) {

    if (dragging) {
        pathEffectsEnabled = false;
        updateWords();
        renderAllPaths();
        showSelection()   
        pathEffectsEnabled = true;
    }
    else {
        if (!event.modifiers.shift && !event.modifiers.alt && !Key.isDown('c') && !Key.isDown('x')) {

            // If user clicks on the background, clear the selection
            if (event.item.layer.name !== 'myWords') {
                myWords.fullySelected = false;
                selectedPaths.length = 0;
                updateUI();
                
                $('#ui-row').addClass('inactive');
                $('.collapseui').hide(); //hide other collapsibles

            }
            
            // If user clicks on any path of the drawing
            if (event.item.layer.name == 'myWords' ) {        
                // If path is already selected, unselect it
                if (selectedPaths.includes(event.item.index)) {
                    selectedPaths = selectedPaths.filter(e => e !== event.item.index)
                    event.item.selected = false;
                }
                //otherwise add it to selection
                else {
                    selectedPaths.push(event.item.index);
                    event.item.fullySelected = true;
                    $('#ui-row').removeClass('inactive');
                }
                showSelection();
                updateUI();
            }
        }
    }
    
    dragging = false;
    
}

$("#ui-tabs, #ui-row").click(function(event){
    event.stopPropagation();
});

// Turn paths drawing order to reverse
$('#reversePath').click(function(){
    selectedPaths.forEach(function(item){
        words.children[item].reverse();
    });
    // pathEffectsEnabled = false;
    renderAllPaths();
    // pathEffectsEnabled = true;
});

// Toggle animation property's animateability
$('.animated').click(function(){
    $(this).toggleClass('active');
    var propName = $(this).data('prop');
    var found = animatedProperties.find(o => o.propName === propName);
    found.animate = !found.animate;
});


// Select all paths by pressing A
function onKeyDown(event) {
	if(event.key == 'a') {
        selectedPaths = [...Array(words.children.length).keys()];
        updateUI();
        showSelection()
        $('#ui-row').removeClass('inactive');
    }
}

var hitOptions = {
	segments: true,
	stroke: true,
	fill: true,
    handles: true,
	tolerance: 5
};


var movePath = false;

function onMouseDown(event) {
	segment = path = handle = null;
	var hitResult = project.hitTest(event.point, hitOptions);

	if (!hitResult) {        
        return;
    }
    
	if (hitResult) {        
        // If clicked on empty area with ctrl pressed, start drawing a new path and select it
        if (event.modifiers.alt) {

            if (selectedPaths.length == 0) {
                master.push(Object.assign({}, p))   //get a copy of default params
                newPath = new Path({                //initialize new path
                    strokeWidth: 15,
                    strokeColor: 'black'
                })                  
                newPath.add(event.point)            //add mouse location to new path
                myWords.addChild(newPath)           //add new path to myWords temp copy of all paths in the project
                selectedPaths.push(newPath.index)   //select created path
                updateWords()                       //update master of all paths as a clone of myWords
                renderAllPaths()                    //draw all paths, including the new one (one point isn't visible though)
                showSelection()                    //show selected paths
                updateUI()

                // return
            }
            else if (selectedPaths.length == 1) {
                myWords.children[selectedPaths[0]].add(event.point) 
                updateWords()
                renderAllPaths()
                showSelection()
                updateUI()
                // return

            } else {
                return
            }
            
            $('#ui-row').removeClass('inactive');
        }

        // Modify bezier handles
        if (hitResult.type == 'handle-in') {
            handle = hitResult.segment.handleIn;
        }

        if (hitResult.type == 'handle-out') {
            handle = hitResult.segment.handleOut;
        }
        

        // if (event.item.layer.name == 'myWords') {            
            
        // If clicked on a corner point
        if (hitResult.type == 'segment') {

            segment = hitResult.segment;
            // Remove corner point by simultanously pressing x
            if (Key.isDown('x')) {
                segment.remove()
                updateWords()
                renderAllPaths()
                showSelection()
            }

            if (Key.isDown('c')) {
                var tan = segment.location.tangent
                segment.handleIn -= tan * 20
                segment.handleOut += tan * 20
                updateWords()
                renderAllPaths()
                showSelection()
            }

            if (Key.isDown('s')) {
                if (selectedPaths.length == 1) {

                    
                    var thisPIndex = selectedPaths[0]
                    var thisP = myWords.children[thisPIndex]
                    var path2 = thisP.splitAt(segment.location)
                    console.log(path2)

                    // myWords.insertChild(path2, thisPIndex)           // put splitted path into (this probable not needed)
                    master.push(Object.assign({}, master[thisPIndex]))  // insert copy of current path to master array

                    updateWords()
                    renderAllPaths()
                    showSelection()
                    updateUI()
                }


                

                updateWords()
                renderAllPaths()
                showSelection()
            }
        }

        // If clicked a already selected path with shift pressed – add a new control point
        if (hitResult.type == 'stroke') {
            path = hitResult.item

            if (selectedPaths.includes(path.index) && event.modifiers.shift) {
                var location = hitResult.location;
                segment = path.insert(location.index + 1, event.point);            
            }   
        }

        // }
	}
}

function showSelection() {
    for (var path of myWords.children) {
        if (selectedPaths.includes(path.index)) {
            path.fullySelected = true
        } 
    }
}

// Move path or single point by dragging with mouse
function onMouseDrag(event) {
    dragging = true;
    
	if (segment) {
		segment.point += event.delta;
        // path.smooth();
    }
    
	if (path) {
        path.position += event.delta;                
	}
    
    if (handle) {
		handle.x += event.delta.x;
		handle.y += event.delta.y;
	}
}

function updateWords() {
    words.remove();
    words = myWords.clone();
    words.name = "words";
    words.selected = false;
    words.scale(1/master[0].drawingSize);
}

$('#smoothPath').click(function(){
    
    selectedPaths.forEach(function(item){
        myWords.children[item].smooth()           
    })

    updateWords()            
    renderAllPaths()
    showSelection()
})


// Move selected paths backwards in the stacking order
$('#backwardsPath').click(function(){
    selectedPaths.forEach(function(item){
        myWords.children[item].sendToBack()           // Move the path itself to back        
        master.unshift(master.splice(item, 1)[0])   // Modify the master array to reflect the change
    });

    selectedPaths = []
    updateWords()            
    renderAllPaths()
    showSelection()
});

// Move selected paths backwards in the stacking order
$('#forwardPath').click(function(){
    
    selectedPaths.forEach(function(item){
        myWords.children[item].bringToFront()   // Move path itself to front
        master.push(master.splice(item, 1)[0])  // Modify maste array to reflect the change
        item = myWords.length
    });

    selectedPaths = []

    updateWords()            
    renderAllPaths()
    showSelection()
});


// Delete selected paths
$('#deletePath').click(function(){
    console.log('del')
    var pathsToDelete = selectedPaths
    pathsToDelete.sort()

    for (var i = pathsToDelete.length - 1; i >= 0; i-- ) {
        myWords.children[pathsToDelete[i]].remove()   // Move path itself to front
        master.splice(pathsToDelete[i], 1)  // Modify maste array to reflect the change        
    }

    selectedPaths = []

    updateWords()            
    renderAllPaths()
    showSelection()
});

$('#randomPath').click(function(){
    var brushesToRandomize = [0,2,3,4,5,7,8,12]
    var brushesShadow = [0,8,12]
    var randBrushType = brushesToRandomize[getRandomInt2(0, brushesToRandomize.length)]


    for (var i = 0; i < selectedPaths.length; i++) {
        var thisP = myWords.children[selectedPaths[i]]
        thisP.removeSegments()

        for (var pp = 0; pp < getRandomInt2(3, 10); pp++) {
            thisP.add(view.size * Point.random())            
        }

        thisP.smooth()

        
        var m = master[selectedPaths[i]]
        console.log(m)
        m['size'] = getRandomInt2(10, 200)
        m['brushStrokeWidth'] = 1
        m['bgType'] = randBrushType
        m['noiseOn'] = trueOrFalse()
        m['noiseAngularOn'] = trueOrFalse()
        m['noiseFreq'] = getRandomInt2(5, 30)
        m['noiseAmp'] = getRandomInt2(5, 200)
        m['noiseAmp'] = getRandomInt2(5, 200)
        m['density'] = getRandomInt2(70,99)
        m['twist'] = getRandomInt2(0,200)
        m['directionalContrast'] = getRandomInt2(0,30)
        m['directionalContrast'] = getRandomInt2(0,30)
        m['brushNoiseAmp'] = getRandomInt2(0, 20)
        m['brushNoiseFreq'] = getRandomInt2(0, 50)
        m['wedge'] = getRandomInt2(0, 100)
        if (brushesShadow.includes(m['bgType'])) {
            console.log('on')
            m['lineShadow'] = getRandomInt2(0, 100)
            m['lineShadowWidth'] = 1
            m['lineShadowColor'] = new Color(0,0,0)
        }
        else {
            m['lineShadow'] = 0
        }

        if (randBrushType == 8) {
            m['brushNoiseAmp'] = getRandomInt2(0, 50)
            m['brushNoiseFreq'] = getRandomInt2(0, 100)
            m['brushNoiseSmoothOn'] = trueOrFalse()
        }
        
        var col = getRandomInt2(50,200) / 255
        m['bgColor'] = new Color(col,col,col)
        // m['brushNoiseOn'] = trueOrFalse()

       // console.log(m)
    }
    

    function zeroOrOne() {
        return Math.round(Math.random())
    }

    function trueOrFalse() {
        return (Math.round(Math.random()) == 0 ? false : true)
    }
    updateWords()
    updateUI()
    renderAllPaths()

});


// Random colors refresh
document.getElementById("refreshRandomColor").addEventListener("click", refreshRandomColors, false);

function refreshRandomColors() {
    brushRandomColors = [];
    brushRandomColorsLocked = false;
    renderAllPaths();
}

// CUSTOM SPRITE UPLOAD
document.getElementById("uploadInput").addEventListener("change", handleFile, false);

var myCustomSprite;

// Import SVG for custom sprite
function handleFile() {
    const fileList = this.files;
    project.importSVG(fileList[0], function(item) {
        selectedPaths.forEach(pathNro => 
            master[pathNro].brushCustomSprite = item.children[1]);
        
        renderAllPaths();
    });
}

// Get an array of random numbers sorted in order
function pick(n, min, max) {
    var results = [];
    for (i = 1; i <= n; i++) {
        var value = Math.floor(Math.random() * max + min);
        results.push(value);
    }
    return results.sort(function(a, b){return a-b});
}

// Get AI generated color palettes from colormind.com
$('#brushCircusGenerate').click(function(){
    var myP = master[selectedPaths[0]];
    var inputCols = [];
    
    for (k = 0; k<5; k++) {
        var myID = 'brushCircusLock' + parseInt(k+1);
        var myIDC = 'brushCircusC' + parseInt(k+1);
        var el = document.getElementById(myID);
        if (el.checked) {
            inputCols.push(rgb2col(myP[myIDC]));
        } else {
            inputCols.push('N');
        }
    }
    // console.log(inputCols);

    var url = "http://colormind.io/api/";
    var data = {
        model : "default",
        input : inputCols
    }

    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            var palette = JSON.parse(http.responseText).result;
            brushCircusPalette = pal2rgb(palette);
            palette = pal2rgb(palette);
            for (n=0; n<palette.length; n++) {
                $('#brushCircusC' + parseInt(n+1)).val(rgb2hex(palette[n]));
            }
            for (d=0; d<5; d++) {
                var myIDC = 'brushCircusC' + parseInt(d+1);
                var change = {};
                change[myIDC] = palette[d];
                updateSelectedPathsParams(change);
            }
            renderAllPaths();
        }
    }

    http.open("POST", url, true);
    http.send(JSON.stringify(data));

    function pal2rgb(pal) {
        var palette = [];
        for(i=0; i<pal.length; i++) {
            palette.push(col2rgb(pal[i]));
        }
        return palette;
    }

    function col2rgb(col) {
        var newCol = new Color(col[0]/255, col[1]/255, col[2]/255);
        return newCol;
    }

    function rgb2col(rgb) {
        var newCol = [rgb.red*255, rgb.green*255, rgb.blue*255];
        return newCol;
    }
})



// Patterns ========================================================

function pattern(path, patternNo, patternStrength, patternWidth, patternDensity, randomize) {
    
	
    var newL = new Path({
      strokeJoin: 'bevel'
    });

    var l = path.length;
    var pats = parseInt(l / patternWidth);     // how many patterns fit onto the path?   
    var myWidth = l / pats;               // The actual width of a one pattern that fits exactly on path length
    var offs = patterns[patternNo].offs;  // Normal offsets from the path of this pattern
    var dists = patterns[patternNo].dists;// Distances along the path of this pattern
    var handles = patterns[patternNo].handles;// handle definitions for each segment (can be left empty)
    
	// console.log('l: ' + l + ' pats: ' + pats + ' myWidth: ' + myWidth);

    for (var p = 0; p < pats; p++) {
		var r = Math.random()
		if (r <  patternDensity && p > 1 && p < pats - 1) {
			if (randomize) {
				var myPat = patterns[Math.floor(Math.random()*patterns.length)];

				offs = myPat.offs
				dists = myPat.dists
				handles = myPat.handles
			}

			for (var n = 0; n < offs.length; n++) {
				var h = null;
				if (handles) h = handles[n];     
				var newPoint = offset(p + (dists[n] / 100), path, offs[n] * patternStrength / 10, myWidth, h);
				newL.add(newPoint);
			}
		}
		else {
			var newPoint = path.getPointAt(p * myWidth)
			newL.add(newPoint)
		}
    }
	newL.add(path.getPointAt(path.length))

	return newL;

}

  function offset(p, path, value, myWidth, handles) {
    var l1 = p * myWidth;
    var p1 = path.getPointAt(l1);
    var n1 = normal(path, l1, value);
    var p1 = p1 + n1;
    if (handles) {
      
      
      var t1 = path.getTangentAt(l1);

      if (t1 != null) {
        var hI = new Point({
          length: handles[0][1] * p.patternStrength / 10, // 5 = strength
          angle: t1.angle
        });

        if (handles[0][0] == 'left') hI.angle = t1.angle - 180;
        if (handles[0][0] == 'right') hI.angle = t1.angle - 180;
        if (handles[0][0] == 'up') hI.angle = t1.angle - 90;
        if (handles[0][0] == 'down') hI.angle = t1.angle + 90;
        
        var hO = new Point({
          length: handles[1][1] * p.patternStrength / 10, // 5 = strength
          angle: t1.angle
        });

        if (handles[1][0] == 'left') hO.angle = t1.angle;
        if (handles[1][0] == 'right') hO.angle = t1.angle;
        if (handles[1][0] == 'up') hO.angle = t1.angle - 90;
        if (handles[1][0] == 'down') hO.angle = t1.angle + 90;
        
        var myS = new Segment(p1, hI, hO);
        return myS;
      }
    }

    return p1;
  }
  
  
  function normal(path, loc, value) {
    var vector = path.getNormalAt(loc) * value;
    return vector;
  }