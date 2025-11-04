const path = require("path");
const glob = require("glob");

const buildEntryMap = (filesPattern) => {
  return Object.fromEntries(
    glob.sync(filesPattern).map(file => {
      const dir = path.dirname(file.replace("/src/", "/"));
      const name = path.basename(file, path.extname(file));
      const output = path.join(dir, name);
      return [output, file];
    })
  );
};

module.exports = { buildEntryMap };
