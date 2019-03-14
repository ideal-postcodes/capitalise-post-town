"use strict";

import { readFileSync } from "fs";
import { join } from "path";
import { assert } from "chai";
import { capitalisePostTown } from "../lib/index";

const posttowns = readFileSync(join(__dirname, "./post_towns.csv"), {
  encoding: "utf8"
})
  .split("\n")
  .map(posttown => posttown.trim());

const capitalisedPosttowns = posttowns.map(posttown => posttown.toUpperCase());

describe("capitalise", () => {
  for (let i = 0; i < posttowns.length; i++) {
    it(`correctly capitalises ${posttowns[i]}`, () => {
      assert.equal(capitalisePostTown(capitalisedPosttowns[i]), posttowns[i]);
    });
  }
});
