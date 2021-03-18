// @ts-check
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function _a(...args) {
  return args;
}

const customStyleLoader = {
  loader: 'style-loader',
  options: {
    insert(linkTag) {
      const parent = document.querySelector('#root').shadowRoot;
      parent.appendChild(linkTag);
    },
  },
};

/** @type {import('webpack').Configuration} */
const commonConfig = {
  entry: {
    app: ['react-hot-loader/patch', './src/index.jsx'],
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[contenthash].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              _a('@babel/preset-react', { runtime: 'automatic' }),
            ],
            plugins: ['react-hot-loader/babel'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', customStyleLoader],
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        loader: require.resolve('file-loader'),
        options: {
          limit: 10000,
          name: 'assets/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      minify: false,
      template: 'public/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = commonConfig;
