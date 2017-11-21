var webpack = require('webpack');
var baseWebpickConfig = require('./base.js');
var merge = require('webpack-merge')
var decConfig = merge(baseWebpickConfig(),{
	devtool: '#cheap-module-eval-source-map',
	devServer: {
		historyApiFallback: true,
		inline: true,
		hot:true
	}
})
module.exports = decConfig
