var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var jquery = require('jquery');
module.exports = function (){
	return {
		entry: {
			app12:[__dirname + './../app/main.js']
			// ,vendor:'jquery'
		},
		output:{
        	path: process.cwd() + '/dist', // 输出到那个目录下（__dirname当前项目目录）
        	filename:'[hash].[name].js' //最终打包生产的文件名
        	// 生产环境地址
	 		// publicPath:"./",
	   //      chunkFilename:'js/[name].js'
		},
		module:{
			loaders:[
				{
					test:/\.json$/,
					loader:'json-loader'
				},
				{
					test: /\.js$/, loader: 'babel-loader'
				},{
					test:/\.css$/,
					loader: 'style-loader!css-loader?module-loader'
				}
				,{
			        test: /\.(woff|woff2|eot|ttf|svg|jpg|png)(\?[a-z0-9]+)?$/,
			        loader: 'url-loader',
			        options: {
			          limit: 1000,
			          name: 'image/[name].[hash:7].[ext]'
			        }
				}
			]
		},
		plugins:[
		    new webpack.DllReferencePlugin({
		      context: path.join(__dirname, "build"),
		      manifest: require("./../build/bundle.manifest.json"),
		    }),
			// 自动构建html插件
			new HtmlWebpackPlugin({
				template:__dirname + './../app/index.html'
			})

		]
	}
}