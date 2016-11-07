export default {
  entry: {
    // Main app's entry point
    bundle: `${__dirname}/index.js`
  },
  output: {
    filename: 'bundle.js'
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
