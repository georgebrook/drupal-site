const path = require('path');
const glob = require('glob');

const entries = {};

// Find all JS files in any src folder under components
const files = glob.sync(path.resolve(__dirname, '../components/**/src/*.js'));

files.forEach(file => {
  const parsed = path.parse(file);

  // Find path relative to 'components' folder
  const componentsIndex = parsed.dir.indexOf('components');
  if (componentsIndex === -1) return; // just in case

  // Get the path after 'components/' and remove the final 'src' folder
  const relativePath = path.relative(
    path.resolve(parsed.dir, '../../..'), // root folder above components
    parsed.dir
  );

  // Alternative safer way: get path inside components folder and remove src
  const insideComponents = parsed.dir.split(path.sep);
  const srcIndex = insideComponents.lastIndexOf('src');
  const pathInsideComponents = insideComponents.slice(insideComponents.indexOf('components') + 1, srcIndex).join('/');

  // Entry key = full path inside components + filename
  entries[`${pathInsideComponents}/${parsed.name}`] = file;
});

module.exports = {
  entry: entries,
  output: {
    // Output to components folder, preserving structure
    path: path.resolve(__dirname, '..', 'components'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
