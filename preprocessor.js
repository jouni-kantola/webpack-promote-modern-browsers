const fs = require("fs");
const stripJsonComments = require("strip-json-comments");
const tsc = require("typescript");

const tsConfig = JSON.parse(
  stripJsonComments(fs.readFileSync("./tsconfig.json", "utf8"))
);

module.exports = {
  process(src, path) {
    if (path.endsWith(".ts") || path.endsWith(".tsx")) {
      return tsc.transpile(src, tsConfig.compilerOptions, path, []);
    }
    return src;
  }
};
