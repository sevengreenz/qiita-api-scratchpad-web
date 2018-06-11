var path = require('path');
var webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const DEBUG = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  performance: {
    hints: false
  },
  plugins: [
    new Dotenv({
      path: DEBUG ? './.env.dev' : './.env.production',
      // path: './.env.dev',
      safe: false
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/presentation/index.html',
      inject: true,
      minify: DEBUG
        ? false
        : {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            html5: true,
            minifyCSS: true,
            removeComments: true,
            removeEmptyAttributes: true
          }
    })
  ],
  devtool: 'source-map'
};

if (!DEBUG) {
  module.exports.optimization = {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ]
  };
}
