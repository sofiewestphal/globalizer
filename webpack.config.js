const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },

  devServer: {
    inline: true,
    contentBase: './dist',
    port: 4000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|otf)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            limit: 10000,
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ImageminPlugin({ test: /\.(png|jpg|gif)$/ }),
  ],
};
