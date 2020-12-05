const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const APP_PATH = path.resolve(__dirname, '../src');

module.exports = {
  mode: 'production',
  entry: APP_PATH,
  output: {
    path: path.resolve(__dirname, '../dist', 'js'),
    filename: '[name].[contenthash].bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    open: true,
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public', 'index.html'),
      filename: 'index.html',
      title: 'Hello Program',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        minifyCSS: true,
        minifyURLs: true,
        minifyJS: true,
        removeComments: true,
        removeRedundantAttributes: true,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin(),
  ],
};
