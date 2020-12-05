const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const APP_PATH = path.resolve(__dirname, '../src');

module.exports = {
  mode: 'development',
  entry: APP_PATH,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    open: true,
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    alias: { src: path.resolve(__dirname, '../src') },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.woff(2)?(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        use: ['url-loader?limit=10000'],
      },
      {
        test: /\.(ttf|eot)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
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
