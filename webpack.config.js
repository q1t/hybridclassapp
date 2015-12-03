module.exports = {
  entry: './www/js/es6/main.js',
  devtool: 'inline-source-map',
  output: {
    path: './www/js/',
    filename: 'extratools.js'
  },
  babel: {
    presets: ['es2015', 'stage-0'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
    ]
  }
}
