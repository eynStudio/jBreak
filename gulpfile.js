var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var less = require('gulp-less');
var path = require('path');
var sourcemaps=require('gulp-sourcemaps');
var minifyCSS = require('gulp-minify-css');
var gutil = require('gulp-util');
var livereload=require('gulp-livereload');
var ngHtml2Js = require("gulp-ng-html2js");
var minifyHtml = require("gulp-minify-html");
var rename = require('gulp-rename');
var merge = require('merge-stream');

var buid_dir = 'server/public/';

var endSrc = [
    'src/vendor/angular-i18n/angular-locale_zh-cn.js',
    'src/js/**/*.js',
    buid_dir + 'js/jb-tpls.js',
    'src/vendor/**/angular-local-storage/dist/angular-local-storage.js',
    '!src/js/**/docs/*.js'
];

gulp.task('html2js', function () {
    return gulp.src(['src/js/**/*.tpl.html', '!src/js/**/docs/*.tpl.html'])
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(ngHtml2Js({
            moduleName: "jb.ui.tpls",
            prefix: "jb/"
        }))
        .pipe(concat("jb-tpls.js"))
        .pipe(gulp.dest(buid_dir + "js/"));
});

gulp.task('less', function () {
    gulp.src('src/less/jBreak.less')
        //.pipe(sourcemaps.init())
        .pipe(less({compress: true}))
        .pipe(gulp.dest(buid_dir + 'css'))
        .pipe(gulp.dest('dist'))
        .pipe(minifyCSS())
        //.pipe(sourcemaps.write())
        .pipe(rename('jBreak.min.css'))
        .pipe(gulp.dest('dist'))
        .pipe(gulp.dest(buid_dir + 'css'));
});
gulp.task('img', function () {
    gulp.src('src/img/**')
        .pipe(gulp.dest('dist/img'))
        .pipe(gulp.dest(buid_dir + 'img'));
});
gulp.task('vendor', function() {
    gulp.src([
        'src/vendor/**/angular/angular.min.js',
        'src/vendor/**/angular/angular.min.js.map',
        'src/vendor/**/angular-mocks/angular-mocks.js',
        'src/vendor/**/angular-cookies/angular-cookies.min.js',
        'src/vendor/**/angular-cookies/angular-cookies.min.js.map',
        'src/vendor/**/angular-resource/angular-resource.min.js',
        'src/vendor/**/angular-resource/angular-resource.min.js.map',
        'src/vendor/**/angular-animate/angular-animate.min.js',
        'src/vendor/**/angular-animate/angular-animate.min.js.map',
        'src/vendor/**/angular-sanitize/angular-sanitize.min.js',
        'src/vendor/**/angular-sanitize/angular-sanitize.min.js.map',
        'src/vendor/**/angular-route/angular-route.min.js',
        'src/vendor/**/angular-route/angular-route.min.js.map',
        'src/vendor/**/angular-ui-router/release/angular-ui-router.min.js',
        'src/vendor/**/respond/dest/respond.min.js',
        'src/vendor/**/html5shiv/dist/html5shiv.min.js',
        'src/vendor/**/bootstrap-theme.min.css',
        'src/vendor/**/bootstrap.min.css',
        'src/vendor/**/bootstrap.min.js',
        'src/vendor/**/bootstrap/dist/fonts/**'
    ])
        .pipe(gulp.dest(buid_dir + 'vendor/'));

    gulp.src(['src/vendor/bootstrap/dist/fonts/**'])
        .pipe(gulp.dest(buid_dir + 'fonts'))
});

gulp.task('end', function () {
    return gulp.src(endSrc)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(ngAnnotate())
        .pipe(concat('jBreak.js'))
        .pipe(gulp.dest('dist'))
        .pipe(gulp.dest(buid_dir + 'js'))
        .pipe(uglify())
        .pipe(rename('jBreak.min.js'))
        .pipe(gulp.dest('dist'))
        .pipe(gulp.dest(buid_dir + 'js'));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('src/js/**/*.js', ['end']);
    gulp.watch('src/js/**/*.html', ['html2js', 'end', 'docs']);
    gulp.watch('src/less/**', ['less']);
    gulp.watch(['src/docs/**','src/**/docs/**'],['docs']);
    gulp.watch([buid_dir]).on('change', livereload.changed);

});
gulp.task('docs',['docs:js','docs:html2js','docs:less'],function(){
    return gulp.src(['src/docs/index-header.html','src/js/ui/**/docs/*.html','src/docs/index-footer.html'])
        .pipe(concat('index.html'))
        .pipe(gulp.dest(buid_dir));
});
gulp.task('docs:js', function () {
    return gulp.src(['src/docs/*.js', 'src/js/ui/**/docs/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(ngAnnotate())
        .pipe(concat('docs.js'))
        .pipe(gulp.dest(buid_dir + 'js'));
});
gulp.task('docs:html2js', function () {
    return gulp.src(['src/js/**/docs/*.tpl.html'])
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(ngHtml2Js({
            moduleName: "demo.tpls",
            prefix: "jb/"
        }))
        .pipe(concat("jb-demo-tpls.js"))
        .pipe(gulp.dest(buid_dir + "js"));
});

gulp.task('docs:less', function () {
    gulp.src('src/docs/docs.less')
        //.pipe(sourcemaps.init())
        .pipe(less({compress: true}))
        //.pipe(sourcemaps.write())
        .pipe(rename('docs.min.css'))
        .pipe(gulp.dest(buid_dir + 'css'));
});

// DEFAULT
gulp.task('default', ['docs','vendor','html2js','end','less','img','watch']);
