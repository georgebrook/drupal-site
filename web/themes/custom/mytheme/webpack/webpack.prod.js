const { merge } = require("webpack-merge");
const componentsConfigs = require("./webpack.components.js"); // array of JS + SCSS configs
const svgConfig = require("./webpack.svg.js"); // single config
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

// Production-specific options
const prodConfiguration = {
  mode: "production",
  devtool: "source-map", // production-friendly source maps
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "all",
      name: (module, chunks) => {
        const allChunksNames = chunks.map((chunk) => chunk.name).join("-");
        return `vendors~${allChunksNames}`;
      },
    },
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
};

// Merge prod options into each config and flatten the array
module.exports = [
  ...componentsConfigs.map((config) => merge(config, prodConfiguration)),
  merge(svgConfig, prodConfiguration),
];
