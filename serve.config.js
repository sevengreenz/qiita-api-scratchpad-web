const convert = require('koa-connect');
const serve = require('webpack-serve');
const history = require('connect-history-api-fallback');
const config = require('./webpack.config.js');
var path = require('path')

serve({
    add: (app, middleware, options) => {
        app.use(convert(history({
            logger: console.log.bind(console),
            rewrites: [
                { from: /\/authorized/, to: '/index.html' },
            ]
        })));
        // since we're manipulating the order of middleware added, we need to handle
        // adding these two internal middleware functions.
        // middleware.webpack();
        // middleware.content();

        // router *must* be the last middleware added
        // app.use(router.routes());
    },
    content: path.resolve(__dirname, 'dist'),
    dev: {
        publicPath: './dist'
    }
});
