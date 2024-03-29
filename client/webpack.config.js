var path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve('./bin'),
        filename: 'bundle.js'
    },
    devtool: "source-map",
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ],
        preLoaders: [
            {
                test: /.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
