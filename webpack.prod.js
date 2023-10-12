const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },

    devtool: 'inline-source-map',

    devServer: {
        static: './dist',
        port: 8001,
        open: true,
        hot: false,
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: "./src/index.pug",
            filename: "index.html"
        }),
    ],
    module: {
        rules:[
            {
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                    }
                }, 'css-loader'],
                test: /\.css$/
            },
            {
				test: /\.pug$/,
				use: 'pug-loader',               
            },
            {
                test: /\.ts/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    }

}