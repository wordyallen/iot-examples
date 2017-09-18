const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals');
const { lib: { entries } } = require('serverless-webpack')

module.exports = {
	entry: entries,
	target: 'node',
	externals: [nodeExternals()],
	module: {
		rules: [{
			test: /\.js$/,
			loaders: ['babel-loader'],
			exclude: /node_modules/,
			include: __dirname,
		},{
			test: /\.html$/,
      loader: 'html-loader',
			options: {
        minimize: true
      }
		}
	]},
	output: {
		libraryTarget: 'commonjs',
    path: resolve('dev-server'),
		filename: '[name].js'
	},
};
