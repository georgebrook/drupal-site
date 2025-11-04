const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { buildEntryMap } = require("./webpack.utils");
const { commonRules, commonResolve } = require("./webpack.common");

// Separate JS and SCSS entries
const jsEntries = buildEntryMap("./components/**/src/*.js");
const scssEntries = buildEntryMap("./components/**/src/*.scss");

module.exports = [
  // -----------------------------
  // JS Build
  // -----------------------------
  {
    name: "JS Build",
    entry: jsEntries,
    output: {
      path: path.resolve(__dirname, "../"),
      filename: "[name].js",
    },
    module: {
      rules: commonRules.filter((r) => r.test.toString() === "/\\.js$/"), // only JS rules
    },
    plugins: [
      new ESLintPlugin({
        extensions: ["js"],
        files: "components/**/src/**/*.js",
        emitWarning: true,
        overrideConfigFile: path.resolve(__dirname, "../config.eslint.mjs"),
        configType: "flat",
      }),
    ],
    resolve: commonResolve,
    mode: "development", // change to 'production' for prod build
    devtool: "source-map", // readable JS in dev
  },

  // -----------------------------
  // SCSS Build
  // -----------------------------
  {
    name: "CSS Build",
    entry: scssEntries,
    output: {
      path: path.resolve(__dirname, "../"),
      filename: "[name].css.js", // dummy JS (ignored)
    },
    module: {
      rules: commonRules.filter((r) => r.test.toString() === "/\\.scss$/"), // only SCSS rules
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      new StylelintPlugin({
        files: "components/**/src/**/*.scss",
        emitWarning: true,
      }),
    ],
    resolve: commonResolve,
    mode: "development",
    devtool: false, // no JS source needed
  },
];
