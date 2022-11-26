
module.exports = () => {
  return {
    mode: 'production',
    plugins: [
      
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      runtimeChunk: {
        name: (entrypoint) => `runtimechunk~${entrypoint.name}`,
      },
    },
    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
      hints: false,
    },
  };
};
