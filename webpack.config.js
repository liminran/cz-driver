const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync({
    ...env,
    babel: {
      dangerouslyAddModulePathsToTranspile: [
        'expo-sqlite',
        '@expo/vector-icons',
      ],
    },
  }, argv);

  // 添加fallback，解决wa-sqlite.wasm缺失问题
  config.resolve.fallback = {
    ...config.resolve.fallback,
    'wa-sqlite/wa-sqlite.wasm': false,
    fs: false,
    path: false,
    crypto: false,
  };

  // 确保 Web 平台支持
  if (env.platform === 'web') {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native$': 'react-native-web',
    };
  }

  return config;
}; 