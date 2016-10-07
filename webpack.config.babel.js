import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

let plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    },
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(true),

  // Generate an index.html
  // details @ https://github.com/ampedandwired/html-webpack-plugin
  new HtmlWebpackPlugin({
    title: 'SweetAlert2 Webpack Demo',
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins = plugins.concat([
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true,
    }),
  ]);
}

export default {
  devtool: 'source-map',
  entry: {
    // Polyfill ES2015 features
    'babel-polyfill': 'babel-polyfill',

    // Main app's entry point
    bundle: path.join(__dirname, 'src', 'index.js'),
  },
  module: {
    loaders: [{
      // Load imported js and/or jsx
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
    }, {
      // Load imported JSON
      test: /\.json$/,
      loader: 'json',
    }, {
      // Load imported stylesheets
      test: /\.s?css$/,
      loaders: ['style', 'css', 'postcss', 'sass'],
    }, {
      // Load any imported images or fonts
      test: /\.(eot|ttf|woff2?|otf|svg|png|jpg)$/,
      loader: 'file?name=[name].[ext]',
    }],
  },
  output: {
    path: 'dist',
    filename: '[name].[chunkhash].js',
    library: 'bundle',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    publicPath: '',
    pathinfo: true,
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
  plugins,
};
