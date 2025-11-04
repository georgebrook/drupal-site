const { merge } = require('webpack-merge');
const componentsConfigs = require('./webpack.components.js'); // array of JS + SCSS configs
const svgConfig = require('./webpack.svg.js'); // single config

// Development-specific options
const devConfiguration = {
  mode: 'development',
  devtool: 'source-map', // readable JS in dev
};

// Merge dev options into each config and flatten into a single array
module.exports = [
  ...componentsConfigs.map(config => merge(config, devConfiguration)),
  merge(svgConfig, devConfiguration)
];
