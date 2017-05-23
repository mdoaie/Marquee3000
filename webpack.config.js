module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(bower_components)/,
        loader: 'babel-loader?presets[]=es2015'
      }
    ]
  },
  entry: './source/js/script.js',
  output: {
    filename: 'script.js'
  }
}