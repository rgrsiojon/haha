const webpack = require('webpack');
const path = require('path');
const Fiber = require('fibers');
const BUILD_DIR = path.resolve(__dirname, 'dist/');
const APP_DIR = path.resolve(__dirname, 'src');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  entry: ['babel-regenerator-runtime', APP_DIR + '/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
                implementation: require("sass"),
                fiber: Fiber
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: 'responsive-loader',
              quality: 85,
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]

  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/style.css'
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    proxy: {
      "/api": {
      "target": 'http://178.128.223.165:7000',
      "pathRewrite": { '^/api': '' },
      "changeOrigin": true,
      "secure": false
      }
    }
  }
};
