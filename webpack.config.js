var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		path.resolve(__dirname, 'app/main.jsx'),
	],
	module: {
		loaders: [
      { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file?name=public/fonts/[name].[ext]' },
      { test: /\.css$/, include: path.resolve(__dirname, 'app'), loader: 'style-loader!css-loader' },
      { test: /\.(js|jsx)$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel-loader' },
		],
	},
	output: {
		filename: './public/bundle.js',
	},
	resolve: {
		extensions: ['.jsx', '.js', '.json'],
	}
};
