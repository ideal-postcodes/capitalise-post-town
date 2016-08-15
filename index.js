"use strict";

const exclusion = /^(of|le|upon|on|the)$/;
const containsAmpersand = /\w+&\w+/;

// capitalise word with exceptions on exclusion list
const capitalise = word => {
	word = word.toLowerCase();
	if (word.match(exclusion)) return word;
	if (word.match(containsAmpersand)) return word.toUpperCase();
	return word.charAt(0).toUpperCase() + word.slice(1);
};

const joiner = /-/;
const joinerWord = /^(in|de|under|upon|y|on|over|the|by)$/;

// Check for names connected with hyphens
const checkJoins = string => {
	if (string.match(joiner) === null) return string;
	return string
		.split("-")
		.map(string => {
			if (string.match(joinerWord)) return string.toLowerCase();
			return capitalise(string);
		})
		.join("-")
}

const boness = /bo'ness/i;

// Single instance cases
const exceptions = string => {
	if (string.match(boness)) return "Bo'Ness";
	return string;	
}

module.exports = posttown => {
	return posttown
		.split(" ")
		.map(capitalise)
		.map(checkJoins)
		.map(exceptions)
		.join(" ");
};
