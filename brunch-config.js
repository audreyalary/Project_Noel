'use strict'
exports.config = {
    paths: {
        watched: ['public'],
        public: 'public'
    },
    files: {
        javascripts: {
            joinTo: {
                'vendor.min.js': /^node_modules/,
                'app.min.js': /^public/
            },
            order: {
                before: [
                    'public/app.js',
                    'public/**/*.md.js',
                    'public/components/**/*.js'
                ]
            }
        },
        stylesheets: {
            joinTo: {
                'css/vendor.min.css': [],
                'css/app.min.css': /^public\/scss/
            }
        }
    },
    npm: {
        enabled: true,
        compilers: ['angular', 'angular-ui-router', 'angular-materialize']
    },
    conventions: {
        assets: /static[\\/]/,
        ignored: ['public/**/*.min.js', 'public/css/*']
    },
    modules: {
        wrapper: false,
        definition: 'commonjs'
    },
    plugins: {
        autoReload: {
            enabled: {
                css: 'on',
                js: 'on',
                json: 'on'
            }
        },
        babel: {
            ignore: [
                /^(node_modules)/
            ]
        }
    },
    overrides: {
        production: {
            sourceMaps: false,
            plugins: {
                autoReload: {
                    enabled: false
                }
            }
        }
    },
    server: {
        path: 'server.js',
        port: 8000,
        run: true
    }
}
