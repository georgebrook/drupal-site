const common = require("./webpack.common.js");
const WebpackBar = require("webpackbar");

module.exports = common.map((config, index) => ({
  ...config,
  mode: "production",
  devtool: false,
  stats: {
    preset: "errors-warnings",
    assets: false,
    entrypoints: false,
    chunks: false,
    modules: false,
    colors: true,
  },
  plugins: [
    ...(config.plugins || []),
    new WebpackBar({
      name: "Build Theme Assets",
      color: "#4caf50",
    }),
  ],
}));
