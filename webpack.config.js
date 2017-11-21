var dev = require('./webpack-config/dev.js');
var pro = require('./webpack-config/pro.js');
var dll = require('./webpack.dll.config.js');
var env = process.env.NODE_ENV;
var finallyModule = {}
switch(env){
	case 'dev':
	finallyModule = dev;
	break;
	case 'pro':
	finallyModule = pro;
	break;
	case 'dll':
	finallyModule = dll;
	break;
}
module.exports = finallyModule
