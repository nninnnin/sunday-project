const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'development',
    entry:{
        main:['react-hot-loader/patch','./src/index.js']
    },
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname, 'public/dist'),
        publicPath: '/dist/'
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
                test: /\.js$/,
                include: /node_modules\/react-dom/,
                use: ['react-hot-loader/webpack']
            },
        ]
    },
    devServer:{
        contentBase:path.resolve(__dirname, 'public/dist'),
        hot:true
    },
    plugins:[

    ],
    watch:true
}