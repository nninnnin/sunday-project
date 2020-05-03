const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode:'development',
    entry:{
        main:['react-hot-loader/patch','./src/index.js']
    },
    output:{
        filename: 'bundle.js',
        path:path.resolve(__dirname, 'public/dist'),
        publicPath:'/',
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.ejs$/,
                use:'ejs-loader'
            },
            {
                test:/\.js$/,
                use:'react-hot-loader/webpack'
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'!!ejs-compiled-loader!views/project.ejs',
            filename:'../../views/project_bundled.ejs',
        }),
    ],
    watch:true
}