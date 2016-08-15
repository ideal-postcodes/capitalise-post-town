# Capitalise UK Post Towns ![Travis](https://travis-ci.org/ideal-postcodes/capitalise-post-town.svg?branch=master)

Small javascript library and test suite that will properly capitalise post town names

Takes into account odd peculiar naming rules and exceptions

Input needs to be correctly spaced and/or hyphenated

## 

```javascript
const cap = require("capitalise-post-town");

// Simple Case
cap("DRYBROOK") // => Drybrook

// Hypenated
cap("HENLEY-IN-ARDEN") // => Henley-in-Arden

// Minor uncapitalised words
cap("WALTON on THE naze") // => Walton on the Naze

// Exception
cap("BO'NESS") // => Bo'Ness
```

## License

MIT
