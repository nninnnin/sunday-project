const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  entry: {
    main: ["react-hot-loader/patch", "./src/index.js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"), //output.path와 동일해야한다
    compress: true,
    port: 9000,
    writeToDisk: true,
    hot: true,
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
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "!!ejs-compiled-loader!server/views/project.ejs",
      filename: "project_bundled.ejs",
      cache: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  watch: true,
});
