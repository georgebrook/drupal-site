const path = require("path");
const glob = require("glob");
const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintWebpackPlugin = require("stylelint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Collect entries dynamically
const entries = {};

// Find JS files
const jsFiles = glob.sync(path.resolve(__dirname, "../components/**/src/*.js"));
jsFiles.forEach((file) => {
  const parsed = path.parse(file);
  const parts = parsed.dir.split(path.sep);
  const srcIndex = parts.lastIndexOf("src");
  const insideComponents = parts.slice(
    parts.indexOf("components") + 1,
    srcIndex,
  );
  const entryKey = insideComponents.length
    ? `${insideComponents.join("/")}/${parsed.name}`
    : parsed.name;
  entries[entryKey] = file;
});

// Find SCSS files
const scssFiles = glob.sync(
  path.resolve(__dirname, "../components/**/src/*.scss"),
);
scssFiles.forEach((file) => {
  const parsed = path.parse(file);
  const parts = parsed.dir.split(path.sep);
  const srcIndex = parts.lastIndexOf("src");
  const insideComponents = parts.slice(
    parts.indexOf("components") + 1,
    srcIndex,
  );
  const entryKey = insideComponents.length
    ? `${insideComponents.join("/")}/${parsed.name}-css`
    : `${parsed.name}-css`;
  entries[entryKey] = file;
});

const commonConfig = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, "../components"), // keeps same folder structure
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["js"],
      files: "**/src/*.js",
      emitWarning: true,
      overrideConfigFile: path.resolve(__dirname, "../eslint.config.js"),
    }),
    new StylelintWebpackPlugin({
      files: "**/src/*.scss",
    }),
    new MiniCssExtractPlugin({
      filename: ({ chunk }) => {
        // Output CSS alongside JS but without the 'src' folder in the path
        return chunk.name.replace("-css", ".css");
      },
    }),
  ],
  resolve: {
    extensions: [".js", ".scss", ".css"],
  },
};

module.exports = [
  {
    entry: {},
    plugins: [
      new StylelintWebpackPlugin({
        files: "components/**/*.scss",
        configFile: path.resolve(__dirname, "../.stylelintrc.json"),
        emitWarning: false,
        emitError: true,
        failOnError: true,
        lintDirtyModulesOnly: false,
      }),
    ],
  },
  commonConfig,
];
