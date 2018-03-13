const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

const config = {
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[hash].bundle.js"
  },
  resolve: {
    modules: [
      path.resolve("src"),
      path.resolve("src/js"),
      path.resolve("node_modules") // For easily importing libraries
    ]
  },
  module: {
    rules: [
      // Loader for scss.
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      // File loader retains original file name and extension.
      // Used for favicon.
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file-loader?name=[name].[ext]"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html"
    })
  ]
};

module.exports = config;
