const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        // contentBase: path.resolve(__dirname, 'public'),
        static: {
          directory: path.join(__dirname, 'public'),
        },
        open: false,
        port: 8080,
        historyApiFallback: true
    },
    // devServer: {
    //   static: {
    //     directory: path.join(__dirname, 'public'),
    //   },
    // },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            },
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: ['file-loader'],
        }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
};
