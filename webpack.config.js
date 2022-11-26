const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'),
  ESLintPlugin = require('eslint-webpack-plugin'),
  { merge } = require('webpack-merge'),
  dotenv = require('dotenv').config(),
  devConfig = require('./config/webpack.dev.config'),
  prodConfig = require('./config/webpack.prod.config');

const APP_PATH = path.resolve(__dirname, '.', 'src');
const DIST_PATH = path.resolve(__dirname, '.', 'dist');
const TEMPLETE_PATH = path.resolve(__dirname, '.', 'public', 'index.html');
const { TITLE } = dotenv.parsed;

baseConfig = {
  entry: APP_PATH,
  output: {
    path: DIST_PATH,
    filename: 'js/[name].bundle.js',
  },
  resolve: {
    modules: [APP_PATH, 'node_modules'],
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
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
        use: ['style-loader', 'css-loader', 'postcss-loader'],
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
    new ESLintPlugin({
      exclude: ['node_modules'],
    }),
    new HtmlWebpackPlugin({
      template: TEMPLETE_PATH,
      filename: 'index.html',
      title: TITLE,
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
    new ForkTsCheckerWebpackPlugin(),
  ],
};

module.exports = (env) => {
  switch (env.MODE) {
    case 'dev':
      return merge(baseConfig, devConfig(env));
    case 'prod':
      return merge(baseConfig, prodConfig(env));
    default:
      throw new Error('No matching configuration was found!');
  }
};
