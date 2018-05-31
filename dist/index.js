"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exclusion = /^(of|le|upon|on|the)$/;
var containsAmpersand = /\w+&\w+/;
// capitalise word with exceptions on exclusion list
var capitaliseWord = function (word) {
    word = word.toLowerCase();
    if (word.match(exclusion))
        return word;
    if (word.match(containsAmpersand))
        return word.toUpperCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
};
var joiner = /-/;
var joinerWord = /^(in|de|under|upon|y|on|over|the|by)$/;
// Check for names connected with hyphens
var checkJoins = function (string) {
    if (string.match(joiner) === null)
        return string;
    return string
        .split("-")
        .map(function (str) {
        if (str.match(joinerWord))
            return str.toLowerCase();
        return capitaliseWord(str);
    })
        .join("-");
};
var boness = /bo'ness/i;
// Single instance cases
var exceptions = function (string) {
    if (string.match(boness))
        return "Bo'Ness";
    return string;
};
var capitalisePostTown = function (posttown) {
    return posttown
        .split(" ")
        .map(capitaliseWord)
        .map(checkJoins)
        .map(exceptions)
        .join(" ");
};
exports.capitalisePostTown = capitalisePostTown;
//# sourceMappingURL=index.js.map