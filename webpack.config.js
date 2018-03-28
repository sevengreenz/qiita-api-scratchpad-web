var path = require('path')
var webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const DEBUG = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      { test: /\.html$/, loader: 'html-loader' }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  performance: {
    hints: false
  },
  plugins: [
    new Dotenv({
      // path: DEBUG ? './.env.dev' : './.env.production',
      path: './.env.dev',
      safe: false
    }),
  ],
  devtool: 'source-map',
}

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
  }
  //   module.exports.devtool = 'eval'
  //   // http://vue-loader.vuejs.org/en/workflow/production.html
  //   module.exports.plugins = (module.exports.plugins || []).concat([
  //     new webpack.DefinePlugin({
  //       'process.env': {
  //         NODE_ENV: '"production"'
  //       }
  //     }),
  //     //    new webpack.optimize.UglifyJsPlugin({
  //     //      sourceMap: true,
  //     //      compress: {
  //     //        warnings: false
  //     //      }
  //     //    }),
  //     new webpack.LoaderOptionsPlugin({
  //       minimize: true
  //     })
  //   ])
}