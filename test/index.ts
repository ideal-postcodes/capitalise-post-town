"use strict";

import * as fs from "fs";
import * as path from "path";
import { assert } from "chai";
import { capitalisePostTown } from "../lib/index";

const posttowns = fs.readFileSync(path.join(__dirname, "./post_towns.csv"), { encoding: "utf8" })
	.split("\n")
	.map(posttown => posttown.trim());

const capitalisedPosttowns = posttowns.map(posttown => posttown.toUpperCase());

describe("capitalise", () => {
	for (let i = 0; i < posttowns.length; i++) {
		it (`correctly capitalises ${posttowns[i]}`, () => {
			assert.equal(capitalisePostTown(capitalisedPosttowns[i]), posttowns[i]);
		});
	}
});
