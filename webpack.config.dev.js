const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST  = 'http://localhost';
const PORT  = 8989;
const URL   = `${HOST}:${PORT}`;
const ROOT  = './app/src';

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    `webpack-dev-server/client?${URL}`,
    'webpack/hot/dev-server',
    `${ROOT}/app`
  ],
  output: {
    filename: 'app.bundle.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.EvalSourceMapDevToolPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${ROOT}/index.html`
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /(node_modules|bower_components)/
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
    }, {
      test: /\.html$/,
      loader: 'raw-loader'
    }]
  },
  devServer: {
    contentBase: ROOT,
    port: PORT,
    hot: true,
    inline: true
  }
};