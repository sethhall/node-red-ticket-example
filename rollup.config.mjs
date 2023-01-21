import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default {
  input: "index.js",
  output: { file: "bundle.js" },
  plugins: [json(), resolve({ preferBuiltins: false }), commonjs()],
};
