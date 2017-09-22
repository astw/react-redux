import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    debug: true,
   // devtool: 'inline-source-map',
    devtool:'cheap-module-eval-source-map',
    noInfo: false,
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client?reload=true',// note that it reloads the page if hot module reloading fails
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {      // webpack doesn't generate physical files, it generate files in memory in dev.
        //path: path.resolve(__dirname, 'src'),
        path:__dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer:{
      contentBase: './src'
    },
    plugins: [
        // Create HTML file that includes reference to bundled JS.

        // new HtmlWebpackPlugin({
        //     template: 'src/index.html',
        //     inject: true
        // }),


        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
          {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
          {test: /(\.css)$/, loaders: ['style', 'css']},
          {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
          {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
          {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
          {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    }
};
