# [@fav/cli.get-color-depth][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Coverage status][coverage-img]][coverage-url]

Determine what colors the terminal supports.

This module is created referencing [`tty.WriteStream#getColorDepth`](https://nodejs.org/dist/latest-v11.x/docs/api/tty.html#tty_writestream_getcolordepth_env) of Node.js API.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions as possible.
> At least, this package supports Node.js >= v0.10.

## Install

To install from npm:

```sh
$ npm install --save @fav/cli.get-color-depth
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/cli.get-color-depth/` directory manually.*

## Usage

```
var getColorDepth = require('@fav/cli.get-color-depth');
getColorDepth() // => 1 or 4 or 8 or 24
```

## API

### <u>getColorDepth([env]) : number</u>

Detects color depth supported by this terminal or the environment indicated by *env*.

**Parameters:**

| Parameter |  Type  | Description               |
|:----------|:------:|:--------------------------|
| *env*     | object | An object containing the environment variables to check. Uses `process.env` if not specified. (Optional) |

**Returns:**

|  Type  | Description      |
|:------:|:-----------------|
| number | Color depth. (1:2 colors / 4:16 colors / 8:256 colors / 24: 16m colors)   |

## Checked

### Node.js (4〜12)

| Platform  |   11   |   12   |
|:---------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |   10   |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|


## License

Copyright (C) 2019 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-cli.get-color-depth/
[npm-img]: https://img.shields.io/badge/npm-v0.1.1-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/cli.get-color-depth
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-cli.get-color-depth.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-cli.get-color-depth
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-cli.get-color-depth/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-cli.get-color-depth?branch=master

[supports-color-url]: https://github.com/chalk/supports-color
[color-support-url]: https://github.com/isaacs/color-support

