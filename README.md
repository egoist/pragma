# pragma

[![NPM version](https://img.shields.io/npm/v/pragma.svg?style=flat)](https://npmjs.com/package/pragma) [![NPM downloads](https://img.shields.io/npm/dm/pragma.svg?style=flat)](https://npmjs.com/package/pragma) [![Build Status](https://img.shields.io/circleci/project/egoist/pragma/master.svg?style=flat)](https://circleci.com/gh/egoist/pragma) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

> Parse pragma and its content from JavaScript comments

## Install

```bash
yarn add pragma
```

## Usage

```js
const pragma = require('pragma')

pragma(`
function foo() {}

/* @babel {
  presets: ['es2015']
} */

function bar() {}

/* @server {
  port: 3000
}
*/
`)

//=> what you get:

{
  babel: {
    presets: ['es2015']
  },
  server: {
    port: 3000
  }
}
```

Both multi-line `/* ... */` and single-line `// ...` comments are supported.

## API

### pragma(input, [options])

#### input

Type: `string`<br>
Required: `true`

#### options

#### parseContent

Type: `function`<br>
Default: <code>source => new Function(&#x60;return ${source}&#x60;)()</code>

The function to process source content, for example: `//@server {port: 1}`, the source content is `{port: 1}` and it will be evaluated.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**pragma** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/pragma/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
