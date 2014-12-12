'use strict';

module.exports = {
    options: {
        open: true,
        port: 9000,
        hostname: 'localhost',
        livereload: false,
        keepalive: true,
        config: '<%= config %>'
    },

    dev: {
        options: {
            base: '<%= config.base %>'
        }
    }
};