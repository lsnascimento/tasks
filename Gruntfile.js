module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        appPath: appConfig,

        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            js:{
                files: ['<%= jshint.files %>'],
                tasks: ['jshint']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            }
        },

        jshint: {
            files: ['app/scripts/*.js', 'app/scripts/**/*.js']
        },

        wiredep: {
            app: {
                src: ['<%= appPath.app %>/index.html'],
                ignorePath: /\.\.\//
            },
            cwd: '../',
            dependencies: true,
            devDependencies: false
        },

        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },

            livereload: {
                options: {
                    open: true,
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect().use(
                                '/app/styles',
                                connect.static('./app/styles')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            }
        },

        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: ['.tmp']
                    }
                ]
            },
            server: '.tmp'
        },

        useminPrepare: {
            html: '<%= appPath.app %>/index.html',
            options: {
                dest: '<%= appPath.dist %>/',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        concat: {
            generated: {
                files: [
                    {
                        dest: '.tmp/concat/assets/js/vendor.js',
                        src: [
                            'bower_components/jquery/dist/jquery.js',
                            'bower_components/angular/angular.js',
                            'bower_components/angular-route/angular-route.js',
                            'bower_components/materialize/dist/js/materialize.js'
                        ]
                    }
                ]
            }
        },

        cssmin: {
            generated: {
                files: [
                    {
                        dest: '<%= appPath.dist %>/assets/css/style.min.css',
                        src: [
                            'bower_components/materialize/dist/css/materialize.css',
                            'bower_components/animate.css/animate.css'
                        ]
                    }
                ]
            }
        },

        uglify: {
            generated: {
                files: [
                    {
                        dest: '<%= appPath.dist %>/assets/js/vendor.js',
                        src: ['.tmp/concat/assets/js/vendor.js']
                    }
                ]
            }
        },

        filerev: {
            dist: {
                src: [
                    '<%= appPath.dist %>/assets/scripts/{,*/}*.js',
                    '<%= appPath.dist %>/assets/css/{,*/}*.css'
                ]
            }
        },

        usemin: {
            html: ['<%= appPath.dist %>/{,*/}*.html'],
            css:  ['<%= appPath.dist %>/assets/css/{,*/}*.css'],
            options: {
                assetsDirs: [
                    '<%= appPath.dist %>',
                    '<%= appPath.dist %>/assets/images',
                    '<%= appPath.dist %>/assets/css'
                ]
            }
        }
    });

    grunt.registerTask('default', ['watch', 'wiredep']);
    grunt.registerTask('serve', 'Server running', function (target) {
        // grunt.log.warn(appConfig.app);
        grunt.task.run([
            'clean:server',
            'wiredep',
            'connect:livereload',
            'watch'
        ]);
    });
    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'filerev',
        'usemin'
    ]);
};