"use strict";

const _ = require("lodash");
const gulp = require("gulp");
const babel = require("gulp-babel");
const mocha = require('gulp-mocha');
const lint = require("gulp-jslint");
const pkg = require("./package.json");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const runSequence = require("run-sequence");

gulp.task("build", () => {	
	return gulp
		.src("./index.js")
		.pipe(babel({
        presets: ['es2015']
    }))
		.pipe(uglify())
		.pipe(rename("capitalise-post-town.min.js"))
		.pipe(gulp.dest("dist/"));
});

gulp.task("lint", () => {
	return gulp.src(["./index.js", "test/"])
		.pipe(lint());
});

gulp.task("test", () => {
	return gulp.src("test/")
		.pipe(mocha({reporter: 'nyan'}));
});

gulp.task("default", done => {
	runSequence(
		"lint",
		"test",
		"build",
		done
	);
});
