const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
    entry: './script/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.(jpeg|png|mp3|gif|jpg)$/i,
                loader: 'file-loader',
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({ template: resolve(__dirname, 'index.html') })
    ]
}