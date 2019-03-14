"use strict";

const exclusion = /^(of|le|upon|on|the)$/;
const containsAmpersand = /\w+&\w+/;

// capitalise word with exceptions on exclusion list
const capitaliseWord = (word: string): string => {
  word = word.toLowerCase();
  if (word.match(exclusion)) return word;
  if (word.match(containsAmpersand)) return word.toUpperCase();

  return word.charAt(0).toUpperCase() + word.slice(1);
};

const joiner = /-/;
const joinerWord = /^(in|de|under|upon|y|on|over|the|by)$/;

// Check for names connected with hyphens
const checkJoins = (string: string): string => {
  if (string.match(joiner) === null) return string;

  return string
    .split("-")
    .map(str => {
      if (str.match(joinerWord)) return str.toLowerCase();

      return capitaliseWord(str);
    })
    .join("-");
};

const boness = /bo'ness/i;

// Handles unusual names which cannot be easily generalised into a rule
const exceptions = (str: string): string => {
  if (str.match(boness)) return "Bo'Ness";

  return str;
};

export const capitalisePostTown = (postTown: string): string => {
  return postTown
    .split(" ")
    .map(capitaliseWord)
    .map(checkJoins)
    .map(exceptions)
    .join(" ");
};
