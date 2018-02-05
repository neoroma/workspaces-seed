const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let plugins = [
  new HtmlWebpackPlugin({
    template: './template/index.html',
    inject: 'body',
    filename: 'index.html',
    excludeChunks: ['proxy']
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }
  })
]

let devtool = 'eval'

const prodPlugins = []

const fullExternals = Object.assign({})
let bundle = [
  'babel-polyfill',
  './src/index.js'
]

if (process.env.NODE_ENV === 'production') {
  plugins = plugins.concat(prodPlugins)
  devtool = 'source-map'
} else {
  bundle = bundle.concat('react-hot-loader/patch')
}

module.exports = {
  entry: {
    app: bundle
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: 'babel-loader' }],
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  },
  devServer: {
    stats: 'minimal',
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true
  },
  devtool
}
