const webpack = require('webpack');
const path = require('path');

module.exports = (env, options) => {
    const isProduction = options.mode === 'production';
    const config = {
        mode: isProduction ? 'production' : 'development',
        entry: './scripts/index.js',
        devtool: isProduction ? 'none' : 'source-map',
        watch: !isProduction,
        output: {
            path: __dirname,
            filename: 'script.js',
        },
    }
    return config;
}