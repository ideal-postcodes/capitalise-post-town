![CI](https://github.com/ideal-postcodes/capitalise-post-town/workflows/CI/badge.svg) [![codecov](https://codecov.io/gh/ideal-postcodes/capitalise-post-town/branch/master/graph/badge.svg)](https://codecov.io/gh/ideal-postcodes/capitalise-post-town) ![Dependencies](https://img.shields.io/david/ideal-postcodes/capitalise-post-town.svg?style=flat) ![Size](https://img.shields.io/bundlephobia/min/capitalise-post-town.svg?style=flat)

# Capitalise UK Post Towns

[![Try capitalise-post-town on RunKit](https://badge.runkitcdn.com/capitalise-post-town.svg)](https://npm.runkit.com/capitalise-post-town)

Small JavaScript library and test suite that will properly capitalise post town names

Takes into account odd peculiar naming rules and exceptions

Input needs to be correctly spaced and/or hyphenated

## Links

- [Get browser ready JS bundles](https://github.com/ideal-postcodes/capitalise-post-town-bundled)

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
capitalisePostTown("BFPO") // => BFPO
```

## Licence

MIT
