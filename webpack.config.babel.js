module.exports = {
  entry: {
    // Main app's entry point
    bundle: `${__dirname}/index.ts`
  },
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      }
    ]
  },
  mode: 'production'
}
