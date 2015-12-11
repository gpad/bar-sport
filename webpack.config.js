module.exports = {
  context: __dirname + "/client/app",
  entry: "./app.js",

  output: {
    filename: "app.js",
    path: __dirname + "/public/dist",
  },
}
