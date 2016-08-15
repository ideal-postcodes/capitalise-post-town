"use strict";

const fs = require("fs");
const path = require("path");
const assert = require("chai").assert;
const capitalise = require("../index.js");

const posttowns = fs.readFileSync(path.join(__dirname, "./post_towns.csv"), { encoding: "utf8" })
	.split("\n")
	.map(posttown => posttown.trim());

const capitalisedPosttowns = posttowns.map(posttown => posttown.toUpperCase());

describe("capitalise", () => {
	for (let i = 0; i < posttowns.length; i++) {
		it (`correctly capitalises ${posttowns[i]}`, () => {
			assert.equal(capitalise(capitalisedPosttowns[i]), posttowns[i]);
		});
	}
});
