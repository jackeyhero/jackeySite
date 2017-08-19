var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    //配置webpack-dev-server
    devServer:{             
        contentBase:path.join(__dirname,"dist")
    },
    module: {
        loaders: [
            { test: /\.js|jsx$/,exclude:/node_modules/, loaders: ['babel-loader'] },
            { test:/\.css/,loader:"style!css" },
            { test:/\.sass/,loader:'style-loader!css-loader!sass-loader' }
        ]
    }
}