const common = require("./webpack.common.js");

module.exports = common.map((config) => ({
  ...config,
  mode: "production",
  devtool: false,
}));
