const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	"module": {
		"rules": [
			{
				"test": /\.tsx?$/,
				"loader": "ts-loader"
			}
		]
	},
	"plugins": [
		new HtmlWebpackPlugin({
			"title": "Index",
            "template": "./src/index.html"
		})
	],
    "devtool": "cheap-eval-source-map"

}
