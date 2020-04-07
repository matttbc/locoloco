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
      'webpack-dev-server/client?http://0.0.0.0:8000',
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
      'process.env.API_URL': JSON.stringify('http://localhost:3000/dev'),
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
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
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
