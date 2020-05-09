const merge = require("webpack-merge");
const common = require("../client/webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  entry: {
    main: ["./src/index.js"],
  },
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "public/dist"),
    publicPath: "/dist/",
  },
});
