const webpack = require('webpack');
require('autoprefixer');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RobotsTxtPlugin = require('robotstxt-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    app: [
      '@babel/polyfill',
      `${APP_DIR}/index.tsx`,
    ],
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.STS_AUTHORITY': JSON.stringify('https://cognito-idp.us-east-1.amazonaws.com/us-east-1_nym9BKz1r/'),
      'process.env.AUTHENTICATION_CLIENT_ID': JSON.stringify('489lrggrp6q5m1huf4n7s032kb'),
      'process.env.AUTHENTICATION_CLIENT_SCOPE': JSON.stringify('openid email https://1moce99ue8.execute-api.us-east-1.amazonaws.com/admin.all'),
      'process.env.APP_ROOT': JSON.stringify('https://master.d2gtcpj8lj87zj.amplifyapp.com'),
      'process.env.PRIVATE_API_URL': JSON.stringify('https://1moce99ue8.execute-api.us-east-1.amazonaws.com/dev'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: './templates/index.html',
    }),
    new RobotsTxtPlugin({
      filePath: './robots.txt',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: 'file-loader?name=assets/images/[hash].[ext]',
      },
    ],
  },
};

module.exports = config;
