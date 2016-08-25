const gulp=require('gulp'),
	rename=require('gulp-rename'),
	uglify=require('gulp-uglify'),
	babel=require('gulp-babel'),
	sourcemaps=require('gulp-sourcemaps');

gulp.task('build.js',()=>{
	gulp.src('src/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel({presets:['es2015']}))
		.pipe(uglify())
		.pipe(rename(path=>{
			path.basename+=".min";
			path.extname='.js';
		}))
		.pipe(gulp.dest('build'));
});
gulp.task('watch',()=>{
	gulp.watch('src/**/*.js',['build.js']);
});
gulp.task('default',['build.js','watch']);