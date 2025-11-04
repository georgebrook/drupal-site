const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const commonRules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: { loader: "babel-loader", options: { presets: ["@babel/preset-env"] } },
  },
  {
    test: /\.scss$/,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
  },
];

const commonResolve = {
  extensions: [".js", ".scss", ".svg"],
  preferRelative: true,
};

module.exports = { commonRules, commonResolve, MiniCssExtractPlugin };
