import path from 'path'

export default {
  devtool: 'source-map',
  entry: {
    // Main app's entry point
    bundle: path.join(__dirname, 'index.js')
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [{
      // Load imported local javascript
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      // Load imported stylesheets
      test: /\.s?css$/,
      loaders: ['style', 'css', 'postcss', 'sass']
    }]
  }
}
