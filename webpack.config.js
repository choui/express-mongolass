/**
 * Created by admin on 2017/4/10.
 */
var  path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');


var  plugins = [];
plugins.push( new CleanWebpackPlugin(['dist'], {
    root: path.resolve(__dirname),
    verbose: true,
    dry: false,
    //exclude: ['shared.js']
}));



module.exports = {
    entry:{
        index:'./index.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:plugins
}
