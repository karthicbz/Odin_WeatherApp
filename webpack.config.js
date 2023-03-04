const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    mode:"development",
    entry: "./src/scripts/index.js",
    output:{
        filename: 'main.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    plugins:[
        new htmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    
}