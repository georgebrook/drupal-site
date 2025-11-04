const path = require("path");
const SvgSpriteLoaderPlugin = require("svg-sprite-loader/plugin");

module.exports = {
  mode: "production", // or 'development' if needed
  entry: {
    // Inline entry logic: Webpack will run this function to require all SVGs
    sprite: path.resolve(__dirname, "../images/icons/entry.js"),
  },
  output: {
    path: path.resolve(__dirname, "../"), // root of your theme
    filename: "[name].js", // dummy JS, can be ignored
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, "../images/icons/"),
        use: [
          {
            loader: "svg-sprite-loader",
            options: {
              extract: true,
              spriteFilename: "icon-sprite.svg", // sprite goes in theme root
              publicPath: "/",
            },
          },
          { loader: "svgo-loader" }, // optional optimization
        ],
      },
    ],
  },
  plugins: [
    new SvgSpriteLoaderPlugin({ plainSprite: true }),
  ],
};
