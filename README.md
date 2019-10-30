# trim-php

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][dependency-image]][dependency-url]

Removes whitespace and other predefined characters.

## Install

Via `npm`
```
npm install trim-php
```

Via Yarn
```
yarn add trim-php
```

## Usage

Import Package in `Node.js`.

```
var trim = require('trim-php');
```

Import Package in `React`

```
import trim from 'trim-php';
```

## Examples

### Removes whitespace and other predefined characters from the left side of a string.

```
var trim = require('trim-php');
var str = '\n    Hello World!     \n';

console.log('Without Trim: ', str);
console.log('With lTrim: ', trim.lTrim(str));
```

### Removes whitespace and other predefined characters from the right side of a string.

```
var trim = require('trim-php');
var str = '\n    Hello World!     \n';

console.log('Without Trim: ', str);
console.log('With rTrim: ', trim.rTrim(str));
```

### Removes whitespace and other predefined characters from both sides of a string.

```
var trim = require('trim-php');
var str = '\n    Hello World!     \n';

console.log('Without Trim: ', str);
console.log('With trimPhp: ', trim.trimPhp(str));
```

### Removes whitespace and other predefined characters from both sides of a string in `React`.

```
import trim from 'trim-php';

var str = '\n    Hello World!     \n';

console.log('Without Trim: ', str);
console.log('With trimPhp: ', trim.trimPhp(str));
```

## Parameters

| Attributes | Type | Required | Description |
| ----------- | ----- | ----------- | ------------- |
| str | String | Yes | Specifies the string to check. |
| charList | String | No | Specifies which characters to remove from the string. |

## Return

Returns the modified string.

## Tested

This package is tested with the `Node.js` and `React` Application. 

[npm-image]: https://img.shields.io/npm/v/trim-php.svg
[npm-url]: https://www.npmjs.com/package/trim-php
[downloads-image]: https://img.shields.io/npm/dm/trim-php.svg

[travis-image]: https://img.shields.io/travis/com/samiahmedsiddiqui/trim-php.svg
[travis-url]: https://travis-ci.com/samiahmedsiddiqui/trim-php
