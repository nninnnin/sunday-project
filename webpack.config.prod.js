const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: ["./src/index.js"],
  },
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "public/dist"),
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ejs$/,
        use: "ejs-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "!!ejs-compiled-loader!views/project.ejs",
      filename: "../../views/project_prod_bundled.ejs",
    }),
  ],
};
