由于node——modules中的文件太多并且文件名太长，导致文件上传失败，
但是这个文件夹可以在npm init 的时候自动生成，下载之后可以自己初始化一下，就可以生成这个文件夹。

操作的基本流程：
（npm和cnpm都可以互换）

	npm i gulp -g  //全局安装
	
	gulp --help
	
	gulp -v //显示版本号

进入操作的目录 cd ..

	npm init 初始化项目

	cnpm i gulp -save-dev/-D //本地安装

	mkdir gulpfile.js//创建项目

 //copy文件
 
 引入gulp工具
 
 copy所有文件  **/*
gulp.dest路径的设置 
 	dest(*.{jpg.png}) copy文件 后缀为 jpg.png的文件
 
 
 //配置default 任务 执行任务队列

	 gulp.task('default',['copy-index','copy-images','webserver'],function () {
			//default 是任务的命令，后边跟的是要执行的任务的列表，最后是回调函数
	   console.log('任务队列执行完毕');
})
 //gulp服务的安装
 	npm i gulp -webserver -D

 
//安装 vinyl-named gulp-webpack gulp-uglify（可以一次安装）

	npm i vinyl-named gulp-webpack gulp-uglify

//安装imports-loader压缩js
 	npm i imports-loader -D
 
 
 mock数据:
 
 
 
 //根据文件内容生成编码
 
 
 
 //顺序执行数组的内容
 gulp-sequence -D

 

所有要安装的插件:
	1.gulp
	2.gulp -webserver
	3.gulp-sass
	4.gulp-minify-css
	5.vinyl-named 
	6.gulp-webpack 
	7.gulp-uglify
	8.imports-loader
	9.gulp-sequence
	
需要用到的所有插件（包括需要在npm中安装的和不需要再npm安装的插件）

	1.gulp
	2.gulp -webserver
	3.gulp-sass
	4.gulp-minify-css
	5.vinyl-named 
	6.gulp-webpack 
	7.gulp-uglify
	8.imports-loader
	9.gulp-sequence
	10.gulp-rev(不需要下载的)
	11.gulp-rev-collector(不需要下载的)
	12.fs（不许需要下载）
	13.url(不需要下载的)
	
	
	
	
所有的安装完成之后：
	1.进入要操作的文件夹
	2.npm init npm对文件初始化
	3.cnpm i gulp -save-dev/-D 本地安装gulp
	4.npm i gulp -webserver -D 本地安装本地服务
	5.gulp 启动服务
	

