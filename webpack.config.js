module.exports = {
  entry: {
    // Main app's entry point
    bundle: `${__dirname}/index.tsx`
  },
  output: {
    filename: 'bundle.js',
    environment: {
      // The environment supports arrow functions ('() => { ... }').
      arrowFunction: false,
    }
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
