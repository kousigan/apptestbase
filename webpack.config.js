// const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const pkg = require('./package.json');
// const path = require('path');
// const libraryName= pkg.name;

// module.exports = {
//     mode:'development',
//     entry: './src/library/index.ts',
//     output: {
//         path: path.resolve(__dirname,'dist'),
//         filename: 'index.js',
//         libraryTarget:'umd',
//         library:'apptestbase'
//     },
//     module:{
//         rules:[
//             {
//                 test: /\.(ts)x?$/,
//                 use: {
//                   loader: 'ts-loader',
//                   options: {
//                     compilerOptions: {
//                     noEmit: false, // this option will solve the issue
//                  },
//                 },
//                },
//               },
//               {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                 }
//             },
//               {
//                 test:/\.css$/,
//                 use:['style-loader','css-loader']
//               },
//         ]
//     },
//     externals:{
//         react: 'react',
//         styledComponents: 'styled-components'
//     },
//     resolve: {
//         extensions: ['.jsx', '.ts', '.tsx', '...']
//     }
// }

const path = require('path')

module.exports = {
    entry: "./src/library/index.ts",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        libraryTarget: "umd",
        library: "ui-lib"
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.tsx?$/,
                use: ["babel-loader", "ts-loader"],
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts"]
    },
    externals: {
        react: "react"
    }
}