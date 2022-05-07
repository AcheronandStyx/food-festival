const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// create the main configuration object within our file. We'll write options within this object that tell webpack what to do.
module.exports = {
  // The entry point is the root of the bundle and the beginning of the dependency graph
  entry: {
    // multiple entry points to modularize the code
    app: "./assets/js/script.js",
    events: "./assets/js/events.js",
    schedule: "./assets/js/schedule.js",
    tickets: "./assets/js/tickets.js",
  },

  // webpack will next take the entry point we have provided, bundle that code, and output that bundled code to a folder that we specify.
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.jpg$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name(file) {
                return "[path][name].[ext]";
              },
              publicPath: function (url) {
                return url.replace("../", "/assets/");
              },
            },
          },
          {
            loader: "image-webpack-loader",
          },
        ],
      },
    ],
  },

  //Inside the empty array, we need to tell webpack which plugin we want to use.
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // the report outputs to an HTML file in the dist folder
    }),
  ],
  // provide the mode in which we want webpack to run. By default, webpack wants to run in production mode.
  // In this mode, webpack will minify our code for us automatically, along with some other nice additions.
  mode: "development",
};
