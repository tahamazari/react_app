const path = require('path')
const HtmlWebpackPlugIn = require('html-webpack-plugin')

module.exports = {
    devtool: "source-map",
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './dist'),
         filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugIn({
            template: './src/index.html'
        })
    ]
}