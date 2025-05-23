const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
import { mode } from './node_modules/webpack/lib/dependencies/HarmonyExportImportedSpecifierDependency';
module.exports = {
  entry: {
    main: './js/script.js',
    styles: './css/style.css'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}