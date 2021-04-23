## [3.0.1](https://github.com/ideal-postcodes/capitalise-post-town/compare/3.0.0...3.0.1) (2021-04-23)


### Bug Fixes

* **Release:** Trigger release ([237aa01](https://github.com/ideal-postcodes/capitalise-post-town/commit/237aa01194d209703fca4a5dff7b682f345c785c))

# [3.0.0](https://github.com/ideal-postcodes/capitalise-post-town/compare/2.0.3...3.0.0) (2021-02-18)


### Bug Fixes

* **tsconfig:** Bump tsconfig ([1776a26](https://github.com/ideal-postcodes/capitalise-post-town/commit/1776a269ab04e2f6bb4cbbea36d2515399d026ad))


### chore

* **Node:** Drop explicit support for Node 8 ([595dcdb](https://github.com/ideal-postcodes/capitalise-post-town/commit/595dcdba6af32368bce7a2591de91cc1e8afa829))


### Features

* **BFPO:** Handle BFPO post town ([9614a40](https://github.com/ideal-postcodes/capitalise-post-town/commit/9614a408665d1350809ee7442646b2a7d0498ad4))


### BREAKING CHANGES

* **Node:** Node 8 no longer forms part of CI testing

# Changelog

Any changes, including backwards incompatible changes will be listed here

## 2.0.3 (14/03/2019)

- Standardise tsconfig
- Standardise tslint
- Apply new code formatting standards

## 2.0.2 (12/02/2019)

- Move typescript into dev dependencies
- Drop unused dependencies
- Add runkit example

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
