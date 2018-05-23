const gulp = require("gulp"),
		sass = require("gulp-sass"),
		uglify = require("gulp-uglify"),
		babel = require("gulp-babel"),
		htmlmin =require("gulp-htmlmin"),
		connect = require("gulp-connect");
		// php = require("gulp-connect-php");
// grunt.initConfig({
//     php: {
//         test: {
//             options: {
//             	base: 'app',
//             	port: 8010,
//                 keepalive: true,
//                 open: true
//             }
//         }
//     }
// });
//启动webserver
gulp.task("conn",function(){
	connect.server({
		root : "dist",
		liverreload : true
		});
	});
//压缩html
gulp.task("html",function(){
	gulp.src("src/**/*.html")
		.pipe(htmlmin({collapseWhitespace:true}))
		.pipe(gulp.dest("dist"))
		.pipe(connect.reload());
});
//压缩php
gulp.task("php",function(){
	gulp.src("src/php/*.php")
		.pipe(php())
		.pipe(gulp.dest("dist/php"))
		.pipe(connect.reload());
});

//压缩JS
gulp.task("js",function(){
	gulp.src("src/js/*.js")
		.pipe(babel({
			presets:["env"]
		}))
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"))
		.pipe(connect.reload());
});

//编译sass
gulp.task("sass",function(){
	gulp.src("src/sass/*.scss")
		.pipe(sass({outputstyle:"compressed"}))
		.pipe(gulp.dest("dist/css/"))
		.pipe(connect.reload());
});


//复制lib
gulp.task("copy-lib",function(){
	gulp.src("src/lib/**/*.*")
		.pipe(gulp.dest("dist/lib"));
});

//复制php
gulp.task("copy-php",function(){
	gulp.src("src/php/*.php")
		.pipe(gulp.dest("dist/php"));
})

//复制base
gulp.task("copy-base",function(){
	gulp.src("src/css/*.css")
		.pipe(gulp.dest("dist/css"));
});

//复制img
gulp.task("copy-images",function(){
	gulp.src("src/images/**/*.*")
		.pipe(gulp.dest("dist/images"));
});

//复制mock
gulp.task("copy-mock",function(){
	gulp.src("src/mock/**/*.*")
		.pipe(gulp.dest("dist/mock"));
});

gulp.task("copy",["copy-lib","copy-images","copy-mock","copy-base","copy-php"]);

//监视任务
gulp.task("watch",function(){
	gulp.watch("src/sass/*.scss",["sass"]);
	gulp.watch("src/**/*.html",["html"]);
	gulp.watch("src/js/*.js",["js"])
})


//定义默认任务
gulp.task("default",["sass","html","js","copy","conn","watch"]);