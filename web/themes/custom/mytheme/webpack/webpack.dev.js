const common = require('./webpack.common.js');
module.exports = common.map(config => ({
  ...config,
  mode: 'development',
  devtool: 'inline-source-map',
}));
