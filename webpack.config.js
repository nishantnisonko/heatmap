module.exports = {
  cache: true,
  debug: true,
  devtool: 'source-map',
  entry: ['./js/index.js'],
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx|es6)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.less', '.css']
  }
};
