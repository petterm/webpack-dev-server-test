//@ts-check
const webpack = require('webpack');
const path = require('path');

/**
 * @type {webpack.Configuration}
 */
const configuration = {
    entry: path.resolve(__dirname, 'src/source.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devServer: {
        contentBase: false,
        host: 'localhost',
        proxy: {
            context: () => true,
            target: 'http://localhost:8080',
        },
        port: 8000,
    },
};

module.exports = configuration;
