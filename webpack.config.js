const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

const config = {
  entry: './src/ts/app.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('src/ts'),
      path.resolve('src/components'),
      path.resolve('node_modules')
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.ts', '.js', '.vue', '.json', '.png', '.scss']
  },
  module: {
    rules: [
      // Loader for TypeScript.
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      // Loader for Vue components.
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // Makes tslint work for Vue components
        options: {
          loaders: {
              ts: 'ts-loader!tslint-loader'
          }
      }
      },
      // Loader for scss.
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
      // File loader retains original file name and extension.
      // Used for favicon.
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html'
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    open: true, // When open is enabled, the dev server will open the browser.
    overlay: true, // Show a full-screen overlay in the browser when there are compiler errors or warnings.
  },
  devtool: 'source-map',
};

module.exports = config;
