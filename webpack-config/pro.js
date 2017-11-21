var webpack = require('webpack');
var merge = require('webpack-merge')
var baseWebpickConfig = require('./base.js');
var path = require('path')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const AssetsPlugin=require('assets-webpack-plugin');
var proConfig = merge(baseWebpickConfig(),{
	plugins:[
		// new webpack.DefinePlugin({
	 //    	'process.env.NODE_ENV': JSON.stringify('production')
	 //    }),
    	// 将多个模块打包成缓存 后续页面读取缓存
		// new webpack.optimize.CommonsChunkPlugin({
		//     name: 'module',
		//     minChunks: function (module, count) {
		//        return (
		//           module.resource &&
		//           /\.js$/.test(module.resource) &&
		//           module.resource.indexOf(
		//             path.join(__dirname, '../node_modules')
		//           ) === 0
		//        )
		//     }
		// }),
		new webpack.DefinePlugin({
		  "process.env": { 
		     NODE_ENV: JSON.stringify("production") 
		   }
		}),

		// new AssetsPlugin({
	 //        filename:'webpack.assets.js',
	 //        processOutput:function(assets){
	 //            return 'window.WEBPACK_ASSETS='+JSON.stringify(assets);
	 //        }
	 //    }),
		// new webpack.optimize.CommonsChunkPlugin({
		//     name: 'manifest',
  //     		chunks: ['module']
		// })
		// 代码压缩
		// ,
		new UglifyJsPlugin({
			output: {
				comments: false,  // remove all comments
			},
			compress: {
				warnings: false
			}
		})
	]
})
module.exports = proConfig