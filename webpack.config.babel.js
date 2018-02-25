export default {
  entry: {
    // Main app's entry point
    bundle: `${__dirname}/index.js`
  },
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // Load imported local javascript
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
