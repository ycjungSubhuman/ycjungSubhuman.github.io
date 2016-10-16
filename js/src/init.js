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
