const path = require("path");

const mainConfig = {
  entry: "./src/main.tsx",
  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules",
    ],
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  output: {
    filename: "./dist/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

const webpackMerge = require("webpack-merge");
const envConfig = (() => {
  return require("./webpack.local.config.js");
})();

module.exports = webpackMerge(mainConfig, envConfig);