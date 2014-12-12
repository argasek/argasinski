'use strict';

module.exports = function(grunt) {

    var path = require('path');
    var config = {
        app: 'src/javascript',
        tasks: 'src/tasks',
        base: 'src',
        dist: 'dist',
        tmp: '.tmp'
    };

    require('load-grunt-config')(grunt, {
        // Tasks path
        configPath: path.join(process.cwd(), config.tasks),

        // Runt grunt.initConfig
        init: true,

        // Expose <%= config.vars %>
        data: {
            config: config
        },

        loadGruntTasks: {
            pattern: 'grunt-*',
            config: require('./package.json'),
            scope: 'devDependencies'
        }
    });

    grunt.registerTask('serve', ['connect']);

};