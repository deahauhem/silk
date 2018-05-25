const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  "mode": process.env["NODE_ENV"] === "production" ? 
    "production" : "development",
  "resolve": {
    "alias": {
      "vue$": "vue/dist/vue.esm.js"
    }
  },
  "plugins": [
    new HtmlWebpackPlugin({
      "title": "Index",
      "template": "./src/index.html",
      /*
      "minify": {
        "removeComments": true,
        "collapseWhitespace": true,
        "removeAttributeQuotes": true  
      }
      */
    })
  ],
}
