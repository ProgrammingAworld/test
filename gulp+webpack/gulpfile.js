//引入gulp工具
var gulp=require('gulp');

//引入gulp-server模块
var webserver=require('gulp-webserver');

//引入css预处理的模块
var sass=require('gulp-sass');

//压缩 css
var minify=require('gulp-minify-css');

//引入js的模块化工具 gulp-webpack ，获得js文件名模块vinyl-named js压缩模块gulp-uglify
var named=require('vinyl-named');
var webpack=require('gulp-webpack');
var uglify=require('gulp-uglify');

//引入fs url模块
var fs=require('fs');
var url=require('url');
//引入rev和revCollector 实现版本号控制
var rev=require('gulp-rev');
var revCollector=require('gulp-rev-collector');

//引入gulp-sequence控制执行顺序
var sequence=require('gulp-sequence');
//启动服务
//和上边的webserver没有关系这里只是要完成的任务的名称
gulp.task('webserver',function () {
   gulp.src('./')
   //这里的webserver和第一个webserver是一样的
   .pipe(webserver({
      //设置localhost
      host:'localhost',
      //设置localhost的端口号
      port:8090,
      //显示打开localhost时是否显示文件夹目录
      directoryListing:{
         enable:true,
         path:'./'
      },
      //动态自主刷新（页面，css，js改变都会触发）
      livereload:true,
      //mock数据
      middleware:function (req,res,next) {
         var urlObj=url.parse(req.url,true);
         switch (urlObj.pathname) {
            case '/api/orders':
               res.setHeader('Content-type','application/json');
               fs.readFile('./mock/list.json',function (err,data) {
                  res.end(data);
               });
                  return;
               case '/api/user':
               //.....
                  return;
               case '/api/cart':
                  return;
         }
         next();
      }
   }))
});

//css预处理
var cssFile=[
   './src/styles/app.scss'
];
//js预处理
var jsFile=[
   './src/scripts/app.js'
]

gulp.task('packjs',function () {
   gulp.src(jsFile)
   //获取所有js的名称
   .pipe(named())
   //加载js文件
   .pipe(webpack({
      output:{
         filename:'[name].js'
      },
      module:{
         loaders:[
            {
               test:/\.js$/,
               loader:'imports?define=>false'
            }
         ]
      }
   }))
   //编译js
   .pipe(uglify().on('error',function (err) {
      console.log('\x07',err.lineNumber,err.message);
      return this.end();
   }))
   .pipe(gulp.dest('./build/prd/scripts/'))
});

//版本号控制
var cssDistFiles=[
   './build/prd/styles/app.css'
]
var jsDistFiles=[
   './build/prd/scripts/app.js'
]
gulp.task('ver',function () {
   //控制css的版本号并替换index中原来的css
   gulp.src(cssDistFiles)
   //产生md5串
   .pipe(rev())
   .pipe(gulp.dest('./build/prd/styles/'))
   .pipe(rev.manifest())
   .pipe(gulp.dest('./build/ver/styles/'));
   //控制js的版本号,利用生成的md5码，遍历css和js，把后缀替换成md5加后缀
   gulp.src(jsDistFiles)
   .pipe(rev())
   .pipe(gulp.dest('./build/prd/scripts/'))
   .pipe(rev.manifest())
   .pipe(gulp.dest('./build/ver/scripts/'));
});


gulp.task('html',function () {
   gulp.src(['./build/ver/**/*','./build/*.html'])
   .pipe(revCollector())
   .pipe(gulp.dest('./build/'))
});

gulp.task('min',sequence('copy-index','ver','html'));//sequense中的内容顺序执行


gulp.task('scss',function () {
   gulp.src(cssFile)
   //先预编译
   .pipe(sass().on('error',sass.logError))
   //模块化
   .pipe(minify())
   //模块化之后文件存放的位置(目标文件夹)
   .pipe(gulp.dest('./build/prd/styles/'));
});

//拷贝index.html到build文件夹中
gulp.task('copy-index',function () {
   gulp.src('./index.html')
      .pipe(gulp.dest('./build'));
});


//copy images到hbuil
gulp.task('copy-images',function () {
   gulp.src('./images/*.{jpg.png}')
   .pipe(gulp.dest('./build/images/'))
});

//侦测文件变化，执行相应的任务
gulp.task('watch',function () {
   gulp.watch('./index.html',['copy-index']);
   gulp.watch('./images/**/*',['copy-images']);
   gulp.watch('./src/styles/*.{scss,css}',['scss','min']);
   gulp.watch('./src/scripts/*.js',['packjs','min']);
})

//配置default 任务 执行任务队列
gulp.task('default',['watch','webserver'],function () {
   console.log('任务队列执行完毕');
})
