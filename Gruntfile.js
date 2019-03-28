'use strict';

module.exports = function(grunt) {

    require('time-grunt')(grunt);

    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin',
        // imagemin: 'grunt-contrib-imagemin'
      });

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },
        watch: {
            files: 'css/*.scss',
            tasks: ['sass']   
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        // 'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        },
        copy: {
            html: {
                files: [
                {
                    //for html
                    expand: true,
                    dot: true,
                    cwd: './',
                    src: ['*.html'],
                    dest: 'dist'
                }]                
            },
            fonts: {
                files: [
                {
                    //for font-awesome
                    expand: true,
                    dot: true,
                    cwd: 'node_modules/font-awesome',
                    src: ['fonts/*.*'],
                    dest: 'dist'
                }]
            }
        },

        clean: {
            build: {
                src: [ 'dist/']
            }
        },
        imagemin: {
            // static:{
            //     options: {
            //         optimizationLevel: 3,
            //         svgoPlugins: [{removeViewBox: false}],
            //         use: ['imagemin']
            //     }
            // },
            dynamic: {
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'src/',                   // Src matches are relative to this path
                    src: ['*/*.{png,jpg,jpeg,gif}'],   // Actual patterns to match
                    dest: 'dist/'                  // Destination path prefix
                }]
            }
        },
        copy: {
            html: {
                files: [
                {
                    //for html
                    expand: true,
                    dot: true,
                    cwd: './',
                    src: ['*.html'],
                    dest: 'dist'
                }]                
            },
            fonts: {
                files: [
                {
                    //for font-awesome
                    expand: true,
                    dot: true,
                    cwd: 'node_modules/font-awesome',
                    src: ['fonts/*.*'],
                    dest: 'dist'
                }]
            }
        },

        clean: {
            build: {
                src: [ 'dist/']
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: './',                   // Src matches are relative to this path
                    src: ['*/*.{png,jpg,jpeg,gif}'],   // Actual patterns to match
                    dest: 'dist/'                  // Destination path prefix
                }]
            }
        },
        useminPrepare: {
            foo: {
                dest: 'dist',
                // src: ['contactus.html','aboutus.html','index.html', 'accomodation.html','gallery.html']
                src: ['index.html']
            },
            options: {
                flow: {
                    steps: {
                        css: ['cssmin'],
                        js:['uglify']
                    },
                    post: {
                        css: [{
                            name: 'cssmin',
                            createConfig: function (context, block) {
                            var generated = context.options.generated;
                                generated.options = {
                                    keepSpecialComments: 0, rebase: false
                                };
                            }       
                        }]
                    }
                }
            }
        },
         // Concat
         concat: {
            options: {
                separator: ';'
            },
  
            // dist configuration is provided by useminPrepare
            dist: {}
        },

        // Uglify
        uglify: {
            // dist configuration is provided by useminPrepare
            targetC :{
                files:{
                    'dist/js/index.min.js': [
                        'js/uikit.min.js'
                    ]
                }
            }
        },

        cssmin: {
            targetA: {
            files:{
                        'dist/css/style.min.css': [
                            'node_modules/bootstrap/dist/css/bootstrap.min.css',
                            'node_modules/font-awesome/css/font-awesome.min.css',
                            'node_modules/bootstrap-social/css/bootstrap-social.css',
                            'node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.css',
                            'node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css',
                            'css/uikit.min.css',
                            'css/uikit-rtl.css',
                            'css/layout.css'
                        ]  
                    }
                },
            targetB: {
                files:{
                    'dist/css/gallery.min.css': [
                        'node_modules/bootstrap/dist/css/bootstrap.min.css',
                        'node_modules/font-awesome/css/font-awesome.min.css',
                        'node_modules/bootstrap-social/css/bootstrap-social.css',
                        'node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.css',
                        'node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css',
                        'css/gallery.css'
                    ]
                }
            }
            
        },
        // Usemin
        // Replaces all assets with their revved version in html and css files.
        // options.assetDirs contains the directories for finding the assets
        // according to their relative paths
        usemin: {
            html: ['dist/contactus.html','dist/aboutus.html','dist/index.html','dist/accomodation.html','dist/gallery.html'],
            options: {
                assetsDirs: ['dist', 'dist/css','dist/js']
            }
        },
        htmlmin: {                                         // Task
            dist: {                                        // Target
                options: {                                 // Target options
                    collapseWhitespace: true
                },
                files: {                                   // Dictionary of files
                    'dist/index.html': 'dist/index.html',  // 'destination': 'source'
                    'dist/contactus.html': 'dist/contactus.html',
                    'dist/aboutus.html': 'dist/aboutus.html',
                    'dist/accomodation.html': 'dist/accomodation.html',
                    'dist/gallery.html': 'dist/gallery.html',
                }
            }
        },
        
    });
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('build', [
        'clean',
        'copy',
        'imagemin',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        // 'filerev',
        'usemin',
        'htmlmin'
    ]);
};