# [`prettier-config-xo`](https://www.npmjs.com/package/prettier-config-xo)

[![npm](https://img.shields.io/npm/v/prettier-config-xo)](https://www.npmjs.com/package/prettier-config-xo)
[![Build Status](https://github.com/jonahsnider/prettier-config-xo/workflows/CI/badge.svg)](https://github.com/jonahsnider/prettier-config-xo/actions)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![codecov](https://codecov.io/gh/jonahsnider/prettier-config-xo/branch/master/graph/badge.svg)](https://codecov.io/gh/jonahsnider/prettier-config-xo)

Prettier config that follows the XO code style.

## Usage

### Default config

Add the `prettier` property to your `package.json`.

```json
{
	"name": "my-cool-library",
	"version": "1.0.0",
	"prettier": "prettier-config-xo"
}
```

### Extending the configuration

```js
// prettier.config.js, or some other file
module.exports = {
	...require('prettier-config-xo'),
	semi: false,
};
```

### Spaces

You can use spaces instead of tabs with the space config:

```js
module.exports = require('prettier-config-xo/space');
```
