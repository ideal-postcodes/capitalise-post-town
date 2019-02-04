[![CircleCI](https://circleci.com/gh/ideal-postcodes/capitalise-post-town.svg?style=svg)](https://circleci.com/gh/ideal-postcodes/capitalise-post-town) [![Coverage Status](https://coveralls.io/repos/github/ideal-postcodes/capitalise-post-town/badge.svg?branch=master)](https://coveralls.io/github/ideal-postcodes/capitalise-post-town?branch=master)

# Capitalise UK Post Towns

Small javascript library and test suite that will properly capitalise post town names

Takes into account odd peculiar naming rules and exceptions

Input needs to be correctly spaced and/or hyphenated

## Install

```
npm install capitalise-post-town
```

## Usage

```javascript
const { capitalisePostTown } = require("capitalise-post-town");

// Simple Case
capitalisePostTown("DRYBROOK") // => Drybrook

// Hypenated
capitalisePostTown("HENLEY-IN-ARDEN") // => Henley-in-Arden

// Minor uncapitalised words
capitalisePostTown("WALTON on THE naze") // => Walton on the Naze

// Exception
capitalisePostTown("BO'NESS") // => Bo'Ness
```

## License

MIT
