'use strict';

const path = require("path");
const webpack = require("webpack");
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname,

    entry: './project_static/js/index',

    output: {
        path: path.resolve('./project_static/bundles/'),
        filename: "[name]-[hash].js"
    },

    plugins: [
        new BundleTracker({filename: './webpack-stats.json'})
    ],

    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },

    resolve: {
        modules: ['node_modules', path.resolve(__dirname, "apps")],
        extensions: ['.js', '.jsx']
    }
};