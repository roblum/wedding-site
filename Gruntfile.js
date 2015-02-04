module.exports = function (grunt) {
    grunt.initConfig({
      uglify: {
            counter: {
                files: {
                    'js/script.min.js': ['js/script.js']
                }
                ,options: {
                    banner: '/* chris & tiff 2015 - <%= grunt.template.today() %> */'
                }
            },
        },
        watch: {
            less : {
              files: ['css/main.less']
              ,tasks: ['less']
            },
        },
  // LESS
  less: {
      dist: {
          files: {
            'css/styles.css': ['css/main.less']
          }
      },
    },
  });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);


};