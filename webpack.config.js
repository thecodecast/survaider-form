module.exports = {
  entry: "./source/main.js",
  output: {
    path: "./",
    filename: "js/main.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /public/],
        loader: 'babel',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  devServer: {
    inline: true,
    hot: true,
    contentBase: "./",
    historyApiFallback: true,
    port: 3000
  }
}
