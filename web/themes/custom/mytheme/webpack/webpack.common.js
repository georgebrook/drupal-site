const path = require('path');
const glob = require('glob');
const ESLintPlugin = require('eslint-webpack-plugin');

const entries = {};
const files = glob.sync(path.resolve(__dirname, '../components/**/src/*.js'));

files.forEach(file => {
  const parsed = path.parse(file);

  const insideComponents = parsed.dir.split(path.sep);
  const srcIndex = insideComponents.lastIndexOf('src');
  const pathInsideComponents = insideComponents
    .slice(insideComponents.indexOf('components') + 1, srcIndex)
    .join('/');

  entries[`${pathInsideComponents}/${parsed.name}`] = file;
});

module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, '..', 'components'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js'],
      files: '**/src/*.js',
      emitWarning: true,
      overrideConfigFile: path.resolve(__dirname, '../eslint.config.js'),
    }),
  ],
};
