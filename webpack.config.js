const path = require('path');
const HtmlWebpackPlugin = require('h')

module.exports = {
    mode:'development',
    entry:{
        main:'./src/components/App.js'
    },
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                include:[
                    path.resolve(__dirname, 'src/components')
                ],
                exclude:'./node_modules',
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:`./views/diary.ejs`
        })
    ]
}