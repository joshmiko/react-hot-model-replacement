module.exports = {
  entry: {
    path: './src/main.js',
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + './build'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './build',
    inline: true
  }
};
