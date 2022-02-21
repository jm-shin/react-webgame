const path = require('path');

module.exports = {
    name: 'word-relay-dev',
    mode: 'development',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    entry: {
        app: ['./client'],
    },//입력
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            },
        }]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },//출력
};