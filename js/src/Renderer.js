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
