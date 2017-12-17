const webpack = require("webpack");

module.exports = {
  devtool: "#@source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "local"),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {
        warnings: false,
      },
    }),
  ],
};