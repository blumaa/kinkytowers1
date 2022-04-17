const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js',
    publicPath: '/'
  },
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },

      // {
      //   test: /\.svg$/,
      //   use: [
      //     {
      //       loader: "babel-loader"
      //     },
      //     {
      //       loader: "react-svg-loader",
      //       options: {
      //         jsx: true // true outputs JSX tags
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.svg$/,
        // type: 'asset/resource',
        use: ['@svgr/webpack'],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    modules: ['src', 'node_modules'] // Assuming that your files are inside the src dir
  },
  plugins: [new MiniCssExtractPlugin()],
}
