const merge = require("webpack-merge");
const common = require("../client/webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  entry: {
    main: ["react-hot-loader/patch", "/client/src/index.js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "react-hot-loader/webpack",
      },
    ],
  },
  watch: true,
});
