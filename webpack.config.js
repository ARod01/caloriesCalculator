const path = require ("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/script.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [ 
                    { loader: 'style-loader'},
                    { loader: 'css-loader'},
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin ({
            filename: 'index.html',
            template: './public/index.html'
        })
    ]
}