const webpack = require('webpack');

module.exports = () => {
  return {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
      open: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
  };
};
