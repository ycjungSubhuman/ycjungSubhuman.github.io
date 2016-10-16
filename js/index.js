var Colors = {
    black:      0x222222,
    blueStrong: 0x323476,
    blueWeak:   0x586BA4,
    yellow:     0xF5DD90,
    orange:     0xF68E5F,
    red:        0xF76C5E,
}

//make a default scene on init
var Scene = new THREE.Scene();

//init a default perspective camera on load.
var Camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//create a default renderer on init
var Renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();
Renderer.setSize(window.innerWidth, window.innerHeight);
Renderer.setClearColor( Colors.yellow, 1 );
document.body.appendChild(Renderer.domElement);

window.onresize = function() {
    Renderer.setSize(window.innerWidth, window.innerHeight);
    Camera.aspect = window.innerWidth/window.innerHeight;
    Camera.updateProjectionMatrix();
}

var AnimationCallback = function() {
    Renderer.render(Scene, Camera);
    requestAnimationFrame(AnimationCallback);
}

var Init = {
    initScene: function() {
        var geoSphere = new THREE.SphereGeometry(5, 32, 32);
        var matDefaultSphere = new THREE.MeshBasicMaterial({ color: Colors.red });
        var nameSphere = new THREE.Mesh(geoSphere, matDefaultSphere);
        Scene.add(nameSphere);
        Camera.position.z = 20;
    },
    initAnimationCallback: function() {
        AnimationCallback();
    },
}

window.onload = function() {
    Init.initScene();
    Init.initAnimationCallback();
}
