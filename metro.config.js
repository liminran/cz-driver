// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// 确保 Web 平台支持
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

// 支持更多文件扩展名
config.resolver.sourceExts = [
  'js',
  'jsx',
  'json',
  'ts',
  'tsx',
  'cjs',
  'web.js',
  'web.jsx',
  'web.ts',
  'web.tsx'
];

// 导出配置
module.exports = config; 