/** @format */
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');
const path = require('path');
const { NODE_ENV = 'production' } = process.env;


module.exports = {
	externals: [nodeExternals()],
	watch: NODE_ENV === 'development',
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /(node_modules)/,
				use: ['swc-loader'],
			},
		],
	},
	entry: './src/index.ts',
	mode: NODE_ENV,
	externalsPresets: { node: true },
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js',
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
};
