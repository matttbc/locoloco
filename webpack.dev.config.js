const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: [
      '@babel/polyfill',
      APP_DIR + '/index.tsx',
      'webpack-dev-server/client?http://0.0.0.0:3000',
    ]
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/public/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.STS_AUTHORITY': JSON.stringify('https://cognito-idp.us-east-1.amazonaws.com/us-east-1_nym9BKz1r/'),
      'process.env.AUTHENTICATION_CLIENT_ID': JSON.stringify('489lrggrp6q5m1huf4n7s032kb'),
      'process.env.AUTHENTICATION_CLIENT_SCOPE': JSON.stringify('openid email https://1moce99ue8.execute-api.us-east-1.amazonaws.com/admin.all'),
      'process.env.APP_ROOT': JSON.stringify('http://localhost:3000'),
      'process.env.PRIVATE_API_URL': JSON.stringify('https://1moce99ue8.execute-api.us-east-1.amazonaws.com/dev'),
    }),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(jpg|png)$/,
        use: 'file-loader?name=assets/images/[hash].[ext]',
      },
    ]
  },
  devServer: {
    historyApiFallback: {
      index: 'index.html'
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
};

module.exports = config;
