var fs = require('fs');
deleteDir(process.cwd() + '/dist')
function deleteDir(dir){
	if(!fs.existsSync(dir)){
		console.log('没有发现'+dir+'文件夹!')
		return
	}else{
		if (fs.statSync(dir).isDirectory()){
			var files = fs.readdirSync(dir);
			[].slice.apply(files).forEach(function(file){
				var url = dir + '/' + file
				if(fs.statSync(url).isDirectory()){
					// console.log(1)
					deleteDir(url)
				}else{
					fs.unlinkSync(url);
					console.log('文件路径是：'+url)
				}
			})
			console.log(dir)
			fs.rmdirSync(dir);
			// console.log('删除文件夹成功')
		}else{
			fs.unlinkSync(process.cwd() + dir);
			console.log('刪除文件成功')
		}
	}
}
