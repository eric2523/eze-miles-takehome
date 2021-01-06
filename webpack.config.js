const path = require("path");

module.exports = {
  entry: "./frontend/app.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "./bundle.js",
  },
  devtool: "source-map", //give me the line of code for errors
  resolve: {
    extensions: [".js", ".jsx", "*"], //makes importing easier, autofill
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //read all js and jsx files
        exclude: /(node_modules)/, //don't include this EVER; it heavy
        use: {
          loader: "babel-loader", //tell webpack to use this to apply changes
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react'], //rules we set when webpack goes through this loader
          },
        },
      },
    ],
  },
  // devtool: "source-map"
};