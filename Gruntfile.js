module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.initConfig({
        concat: {
            dist: {
                src: 
        [
        'js/src/Colors.js', 
        'js/src/Scene.js', 
        'js/src/Camera.js', 
        'js/src/Renderer.js', 
        'js/src/init.js', 
        'js/src/index.js'
        ],
                dest: 'js/index.js'
            }
        }
    });

    grunt.registerTask('dist', ['concat:dist']);
}
