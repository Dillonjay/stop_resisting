const webpack = require('webpack')
const path = require('path');
const HtmlWebpackTemplate = require('html-webpack-template');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

// Create some absolute paths for our configuration.
const paths = {
	app : path.join(__dirname, 'app'),
	build : path.join(__dirname, 'build')
};

// Export our config so webpack can pick it up. 
module.exports = {
	entry: {
		// Here is where webpack will start going through files.
		app : paths.app
	},
	output:{ 
		// Here is where webpack will spit out the finished bundles and index.html.
		path : paths.build,
		// Call the finished product bundle.js
		filename : 'bundle.js'
	},
	devtool: 'eval',
	// Dev server settigns. Could also add directly to package.json script. ("build" : "webpack --inline --hot" ect..)
  	devServer: { 
  		// Our dev server is hot( aka listening for change )
    	hot: true,
    	// Refresh on change.
    	inline: true,
    	stats: 'errors-only',
  	},
	module : {
		// Here is where the magic happens.
		loaders : [
			{
				// A regular expression ( will pick up both .js and .jsx files )
				test: /\.jsx?$/,
				// When above file is encountered use this loader. babelrc contains the presets we want to use. 
				loader: 'babel-loader',
				// Give webpack some direction. With out this it will search the etire directory. 
				include: paths.app
			},

			{
				test: /\.css$/,
				loaders: ['style-loader','css-loader'],
				include: paths.app
			},
			{
				test: /.*\.(png|jpe?g)$/i,
				loader: 'file-loader',
				include: paths.app
			}
		]
	},
	// Here are our plugins. 
	plugins : [
		// Magical plugin that will live update changes in your code. This way we avod manually refreshing. 
		new webpack.HotModuleReplacementPlugin(),
		// We are telling webpack to create a new html document and add our bundle as a script tag.
		// (css as an link tag)
		new HtmlWebpackPlugin({
		// This is the template we want to use. You can have also create your own ejs template if you desire. 
        template: HtmlWebpackTemplate,
        title: 'Uh Oh',
        appMountId: 'app',
        mobile: true, 
        inject: false, 
      })
    ]
}