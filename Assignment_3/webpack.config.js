const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'index.bundle.js'
    },
    devServer: {
        port: 3010,
        // static: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
};
