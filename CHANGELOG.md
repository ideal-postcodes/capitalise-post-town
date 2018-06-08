# Changelog

Any changes, including backwards incompatible changes will be listed here

## 2.0.1 (08/06/2018)
- Reduce package size by dropping `test` and `mocha.opts`

## 2.0.0 (08/06/2018)
- *Breaking Change.* Module now exports an object with a capitalisation function

```js
// New import method

const { capitalisePostTown } = require("capitalise-post-town");
```

- *Breaking Change.* Location of compiled javascript moved to `dist/index.js`
- Typings file available 
