const path = require('path');


module.exports = {
    entery: './script/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[contenthash].js'
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.(png|jpeg|gif|mp3)$/i,
    //             loader: 'file-loader',
    //         }
    //     ]
    // }
}