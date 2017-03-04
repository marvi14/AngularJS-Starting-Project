// Improt Modules
var gulp = require('gulp');
var del = require('del');
var url = require('url');
var fs = require('fs');
var watch = require('gulp-watch');
var sequence = require('gulp-sequence');
var webserver = require('gulp-webserver');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var htmlreplace = require('gulp-html-replace');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');

// Define Paths
var path = {
    libjs: [
        { dist: 'lib/bootstrap', src: 'public/lib/bootstrap/**/*.js' },
        { dist: 'lib/jquery-confirm2', src: 'public/lib/jquery-confirm2/**/*.js' },
        { dist: 'lib/angular-ui-notification', src: 'public/lib/angular-ui-notification/**/*.js' },
        { dist: 'lib/components-font-awesome', src: 'public/lib/components-font-awesome/**/*.js' },
        { dist: 'lib/slick-carousel', src: 'public/lib/slick-carousel/**/*.js' },
        { dist: 'lib/angular-input-stars-directive', src: 'public/lib/angular-input-stars-directive/**/*.js' },
        { dist: 'lib/angular-ui-select', src: 'public/lib/angular-ui-select/**/*.js' },
        { dist: 'lib/requirejs', src: 'public/lib/requirejs/**/*.js' },
        { dist: 'lib/angular', src: 'public/lib/angular/**/*.js' },
        { dist: 'lib/angular-bootstrap', src: 'public/lib/angular-bootstrap/**/*.js' },
        { dist: 'lib/angular-couch-potato', src: 'public/lib/angular-couch-potato/**/*.js' },
        { dist: 'lib/angular-facebook', src: 'public/lib/angular-facebook/**/*.js' },
        { dist: 'lib/angular-loader', src: 'public/lib/angular-loader/**/*.js' },
        { dist: 'lib/angular-mocks', src: 'public/lib/angular-mocks/**/*.js' },
        { dist: 'lib/angular-modal-service', src: 'public/lib/angular-modal-service/**/*.js' },
        { dist: 'lib/angular-parallax', src: 'public/lib/angular-parallax/**/*.js' },
        { dist: 'lib/angular-resource', src: 'public/lib/angular-resource/**/*.js' },
        { dist: 'lib/angular-route', src: 'public/lib/angular-route/**/*.js' },
        { dist: 'lib/angular-sanitize', src: 'public/lib/angular-sanitize/**/*.js' },
        { dist: 'lib/angular-slick', src: 'public/lib/angular-slick/**/*.js' },
        { dist: 'lib/angular-translate', src: 'public/lib/angular-translate/**/*.js' },
        { dist: 'lib/angular-translate-loader-partial', src: 'public/lib/angular-translate-loader-partial/**/*.js' },
        { dist: 'lib/angular-translate-loader-static-files', src: 'public/lib/angular-translate-loader-static-files/**/*.js' },
        { dist: 'lib/angular-translate-loader-static-files', src: 'public/lib/angular-translate-loader-static-files/**/*.js' },
        { dist: 'lib/angular-web-notification', src: 'public/lib/angular-web-notification/**/*.js' },
        { dist: 'lib/bootstrap-ui-datetime-picker', src: 'public/lib/bootstrap-ui-datetime-picker/**/*.js' },
        { dist: 'lib/html5-boilerplate', src: 'public/lib/html5-boilerplate/**/*.js' },
        { dist: 'lib/html5-desktop-notifications', src: 'public/lib/html5-desktop-notifications/**/*.js' },
        { dist: 'lib/jquery', src: 'public/lib/jquery/**/*.js' },
        { dist: 'lib/moment', src: 'public/lib/moment/**/*.js' },
        { dist: 'lib/ng-google-signin', src: 'public/lib/ng-google-signin/**/*.js' },
        { dist: 'lib/ngInfiniteScroll', src: 'public/lib/ngInfiniteScroll/**/*.js' },
        { dist: 'lib/ngmap', src: 'public/lib/ngmap/**/*.js' },
        { dist: 'lib/requirejs-text', src: 'public/lib/requirejs-text/**/*.js' },
        { dist: 'lib/socket.io-client', src: 'public/lib/socket.io-client/**/*.js' },
        { dist: 'lib/underscore', src: 'public/lib/underscore/**/*.js' }
    ],

    assets: [
        { dist: 'img', src: 'public/img/**' },
        { dist: 'audio', src: 'public/audio/**' },
        { dist: 'video', src: 'public/video/**' },
        { dist: 'utils', src: 'public/utils/**' },
        { dist: 'translations', src: 'public/translations/**' }
    ],

    index: 'public/index.html',
    mainJs: 'public/app.js',
    requireConfig: 'public/require-config.js',
    html: 'public/modules/**/*.html',
    js: 'public/modules/**/*.js',
    Userjs: 'public/js/**/*.js',
    fonts: 'public/fonts/**/*',
    distUserjs: 'dist/js',
    css: 'public/css/**/*',
    dist: 'dist',
    distapp: 'dist/modules',
    distcss: 'dist/css',
    distlib: 'dist/lib',
    distfonts: 'dist/fonts'
};

// Clean the Contents of the Distribution Directory
gulp.task('clean', function() {
    return del(path.dist);
});

// Copy Index
gulp.task('copy:index', function() {
    return gulp.src(path.index)
        .pipe(gulp.dest(path.dist));
});
// Copy mainJS
gulp.task('copy:mainJs', function() {
    return gulp.src(path.mainJs)
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest(path.dist));
});
// Copy RequiresConfig
gulp.task('copy:requireConfig', function() {
    return gulp.src(path.requireConfig)
        .pipe(gulp.dest(path.dist));
});
// Copy Fonts
gulp.task('copy:fonts', function() {
    return gulp.src(path.fonts)
        .pipe(gulp.dest(path.distfonts));
});
// Copy Html
gulp.task('copy:html', function() {
    return gulp.src(path.html)
        .pipe(gulp.dest(path.distapp));
});

// Copy Userjs
gulp.task('copy:Userjs', function() {
    return gulp.src(path.Userjs)
        .pipe(uglify())
        .pipe(gulp.dest(path.distUserjs));
});

// Copy Css
gulp.task('copy:css', function() {
    return gulp.src(path.css)
        .pipe(concat('styles.min.css'))
        .pipe(minifyCSS({ keepSpecialComments: 0 }))
        .pipe(gulp.dest(path.distcss));
});

gulp.task('copy:cssfonts', function() {
    gulp.src('public/css/elegant_font/**/*')
        .pipe(gulp.dest(path.distcss + '/elegant_font'));

    return gulp.src('public/css/fontello/**/*')
        .pipe(gulp.dest(path.distcss + '/fontello'));

});

// copy Libs
gulp.task('copy:libjs', function() {
    path.libjs.forEach(function(val, indx) {
        if (val.dist.indexOf('angular') !== -1) {
            gulp.src(val.src)
                .pipe(ngAnnotate())
                .pipe(uglify())
                .pipe(gulp.dest(path.dist + '/' + val.dist));
        } else {
            gulp.src(val.src)
                .pipe(gulp.dest(path.dist + '/' + val.dist));
        }
    });
});

// gulp.task('requirejsoptimize', function() {
//     return gulp.src('public/require-config.js')
//         .pipe(requirejsOptimize(function(file) {
//             return {
//                 baseUrl: "public/",
//                 mainConfigFile: 'public/require-config.js',
//                 name: "require-config",
//                 optimize: 'none',
//                 wrapShim: true,
//                 out: "libs.js",
//                 include: ['lib/requirejs/require.js']
//             };
//         }))
//         .pipe(ngAnnotate())
//         .pipe(gulp.dest('dist/js'));
// });

gulp.task('replace-css', function() {
    gulp.src('public/index.html')
        .pipe(htmlreplace({
            'css': 'css/styles.min.css',
        }))
        .pipe(gulp.dest('dist/'));
});

// copy Libs
gulp.task('copy:assets', function() {
    path.assets.forEach(function(val, indx) {
        gulp.src(val.src)
            .pipe(gulp.dest(path.dist + '/' + val.dist));
    });
});

// TypeScript Transpile
gulp.task('copy:js', function() {
    return gulp.src(path.js)
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest(path.distapp));
});

// Build Project
gulp.task('build', sequence('clean', 'copy:index', 'replace-css', 'copy:libjs', 'copy:fonts', 'copy:requireConfig', 'copy:mainJs', 'copy:html', 'copy:Userjs', 'copy:js', 'copy:css', 'copy:cssfonts', 'copy:assets'));

// Default Task
gulp.task('default', sequence('build', ['serve']));

// Serve Task
gulp.task('serve', function() {
    gulp.src('dist')
        .pipe(webserver({
            livereload: true,
            open: true,
            port: 9089,
            directoryListing: {
                enable: true,
                path: '/index.html'
            },
            middleware: function(req, res, next) {
                var fileName = url.parse(req.url);
                fileName = fileName.href.split(fileName.search).join("");
                var fileExists = fs.existsSync("./dist/" + fileName);
                if (!fileExists) {
                    req.url = "/index.html";
                }
                return next();
            }
        }));
});

// Watch Task
gulp.task('watch', ['watchjs', 'watchcss', 'watchhtml', 'watchindex']);

// Watch TypeScript
gulp.task('watchjs', function() {

    return watch(path.js)
        .pipe(gulp.dest(path.distapp));
});

// Watch Index
gulp.task('watchindex', function() {
    return watch(path.index)
        .pipe(gulp.dest(path.dist));
});

// Watch Html
gulp.task('watchhtml', function() {
    return watch(path.html)
        .pipe(gulp.dest(path.distapp));
});

// Watch CSS
gulp.task('watchcss', function() {
    return watch(path.css)
        .pipe(gulp.dest(path.distapp));
});
