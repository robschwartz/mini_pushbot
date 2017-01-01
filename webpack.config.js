var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel'
            },
            { test: /\.json$/, loader: 'json' },
            { test: /\.png$/, loader: "url-loader?mimetype=image/png" }

        ]
    }
};

module.exports = config;