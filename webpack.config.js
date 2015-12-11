module.exports = {
  context: __dirname + "/client/app",
  entry: "./app.js",

  output: {
    filename: "app.js",
    path: __dirname + "/public/dist",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
