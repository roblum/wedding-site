module.exports = function (grunt) {
    grunt.initConfig({
      uglify: {
            counter: {
                files: {
                    'public/js/script.min.js': ['public/js/script.js']
                }
                ,options: {
                    banner: '/* chris & tiff 2015 - <%= grunt.template.today() %> */'
                }
            },
        },
        watch: {
            less : {
              files: ['public/css/main.less']
              ,tasks: ['less']
            },
        },
  // LESS
  less: {
      dist: {
          files: {
            'public/css/styles.css': ['public/css/main.less']
          }
      },
    },
  });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);


};