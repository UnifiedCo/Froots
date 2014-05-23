'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'assets/js/*.js',
        '!assets/js/scripts.min.js'
      ]
    },
    sass: {
      dist: {
        files: {
          'assets/css/main.min.css': [
            'assets/sass/app.scss'
          ]
        },
        options: {
          style: 'compressed'
          // TODO: Add source mapping
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'assets/js/scripts.min.js': [
            'assets/js/foundation/foundation.min.js',

            /* Uncomment the Foundation plugins as you need them */
            //'assets/js/plugins/foundation/foundation.abide.js',
            //'assets/js/plugins/foundation/foundation.accordion.js',
            //'assets/js/plugins/foundation/foundation.alert.js',
            //'assets/js/plugins/foundation/foundation.clearing.js',
            //'assets/js/plugins/foundation/foundation.dropdown.js',
            //'assets/js/plugins/foundation/foundation.equalizer.js',
            //'assets/js/plugins/foundation/foundation.interchange.js',
            //'assets/js/plugins/foundation/foundation.joyride.js',
            //'assets/js/plugins/foundation/foundation.js',
            //'assets/js/plugins/foundation/foundation.magellan.js',
            //'assets/js/plugins/foundation/foundation.offcanvas.js',
            //'assets/js/plugins/foundation/foundation.orbit.js',
            //'assets/js/plugins/foundation/foundation.reveal.js',
            //'assets/js/plugins/foundation/foundation.slider.js',
            //'assets/js/plugins/foundation/foundation.tab.js',
            //'assets/js/plugins/foundation/foundation.tooltip.js',
            //'assets/js/plugins/foundation/foundation.topbar.js',
            //'assets/js/plugins/*.js',
            'assets/js/_*.js'
          ]
        },
        options: {
          // JS source map: to enable, uncomment the lines below and update sourceMappingURL based on your install
          // sourceMap: 'assets/js/scripts.min.js.map',
          // sourceMappingURL: '/app/themes/froots/assets/js/scripts.min.js.map'
        }
      }
    },
    version: {
      options: {
        file: 'lib/scripts.php',
        css: 'assets/css/main.min.css',
        cssHandle: 'froots_main',
        js: 'assets/js/scripts.min.js',
        jsHandle: 'froots_scripts'
      }
    },
    watch: {
      sass: {
        files: [
          'assets/sass/*.scss',
          'assets/sass/foundation/*.scss'
        ],
        tasks: ['sass', 'version']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify', 'version']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: false
        },
        files: [
          'assets/css/main.min.css',
          'assets/js/scripts.min.js',
          'templates/*.php',
          '*.php'
        ]
      }
    },
    clean: {
      dist: [
        'assets/css/main.min.css',
        'assets/js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-wp-version');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'sass',
    'uglify',
    'version'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
