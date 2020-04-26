const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'development',
    entry:{
        main:'./src/index.js'
    },
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname, 'public/dist')
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
        ]
    },
    watch:true
}