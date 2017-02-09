const merge = require('webpack-merge');
// Require the node module path so we can give absolute paths to webpack. 
const path = require('path');
// Create a PATHS variabele to store our absolute paths.

const HtmlWebpackTemplate = require('html-webpack-template');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const PATHS = {
	app : path.join(__dirname, 'app'),
	// The output path will be the build folder.
	build : path.join(__dirname, 'build')
};
// Export the configurations so that webpack will know what do do when called. 
module.exports = {
	// Entry accepts a path or an object of entries. We'll use the
	// object of entries because it's convenient with more complex configurations.
	entry: {
		// This line says bundle up everythng inside of the app folder.
		app : PATHS.app
	},
	output:{ 
		// These lines are saying.... 
		// spit out the final build result iside of the build folder and call it bundle.js
		path : PATHS.build,
		filename : 'bundle.js'
	},
	module : {
		loaders : [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				include: PATHS.app
			},
			{
				test: /\.css$/,
				loaders: ['style-loader','css-loader'],
				include: PATHS.app
			},
			{
				test: /.*\.(png|jpe?g)$/i,
				loader: 'file-loader',
				include: PATHS.app
			}
		]
	},
	plugins : [
		new HtmlWebpackPlugin({
        template: HtmlWebpackTemplate,
        title: 'Uh Oh',
        appMountId: 'app',
        mobile: true, 
        inject: false, 
      })
	]
}