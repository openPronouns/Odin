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
				use: ['ts-loader'],
			},
		],
	},
	entry: './src/index.ts',
	mode: NODE_ENV,
	target: 'node',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js',
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
};