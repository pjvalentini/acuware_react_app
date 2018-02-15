var path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: './client/app/app.jsx',
	output: {
			path: __dirname,
			filename: './client/public/bundle.js'
	},

	// This section desribes the transformations we will perform
	module: {
		loaders: [
			{
				// Only working with files that in in a .js or .jsx extension
				test: /\.jsx?$/,
				// Webpack will only process files in our app folder. This avoids processing
				// node modules and server files unnecessarily
				include: /app/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				query: {
					// These are the specific transformations we'll be using.
					presets: ['react', 'es2015', 'stage-0'],
				},
			},
		],
	},
	resolve: {
		extensions: ['.jsx', '.js'],
	}
};
