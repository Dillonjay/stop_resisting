const path = require('path');
const PATHS = {
	// Join paths with path.join()
	// The entry path will be the app folder.  
	app : path.join(__dirname,'app'),
	// The build path will be the output after the build is complete. 
	build : path.join(__dirname,'build')
	};
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
	}
};