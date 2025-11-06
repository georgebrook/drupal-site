const common = require('./webpack.common.js');
module.exports = common.map(config => ({
  ...config,
  mode: 'development',
  devtool: 'inline-source-map',
  stats: {
    all: false,             // start by hiding everything
    assets: true,           // show only the emitted assets
    entrypoints: true,      // show entry points
    warnings: true,         // show warnings
    errors: true,           // show errors
    errorDetails: true,     // include stack traces for errors
  },
}));
