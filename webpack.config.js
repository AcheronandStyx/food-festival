const path = require("path");
const webpack = require("webpack");

// create the main configuration object within our file. We'll write options within this object that tell webpack what to do.
module.exports = {
  // The entry point is the root of the bundle and the beginning of the dependency graph
  entry: "./assets/js/script.js",

  // webpack will next take the entry point we have provided, bundle that code, and output that bundled code to a folder that we specify.
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },

  //Inside the empty array, we need to tell webpack which plugin we want to use.
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
  // provide the mode in which we want webpack to run. By default, webpack wants to run in production mode.
  // In this mode, webpack will minify our code for us automatically, along with some other nice additions.
  mode: "development",
};
