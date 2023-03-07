const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const cssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const terserPlugin = require('terser-webpack-plugin');

module.exports={
    mode:"production",
    entry: "./src/scripts/index.js",
    output:{
        filename: 'main.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    optimization:{
        minimizer: [
            new cssMinimizerPlugin(),
            new terserPlugin()
        ],
    },
    plugins:[
        new htmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new miniCssExtractPlugin({
            filename: '[name].[hash].css',
        }),
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    miniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader: 'file-loader',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            }
        ]
    }
}