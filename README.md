# one-wise

> One-wise combinatorial testing generator

[![npm version](https://badge.fury.io/js/one-wise.svg)](https://badge.fury.io/js/one-wise)
[![Build Status](https://travis-ci.org/thiagodp/one-wise.svg?branch=master)](https://travis-ci.org/thiagodp/one-wise)
[![Coverage Status](https://coveralls.io/repos/github/thiagodp/one-wise/badge.svg)](https://coveralls.io/github/thiagodp/one-wise)

A **1-wise** (*a.k.a.* **1-way**) testing generator guarantees that at least one value of each group appears in the generated tests. The produced array has exactly the length of the largest input array.

## About

This is a fast and simple implementation of a [1-wise testing](https://en.wikipedia.org/wiki/All-pairs_testing) generator. No external dependencies. Uses [semantic versioning](https://semver.org/).

## Install

```bash
npm install one-wise
```

## Example

```javascript
oneWise( {
    "foo": [ "x", "y" ],
    "bar": [ "a", "b", "c", "d" ],
    "baz": [ "f", "g" ]
} )
```
will return
```json
[
   { "foo": "x", "bar": "a", "baz": "f" },
   { "foo": "y", "bar": "b", "baz": "g" },
   { "foo": "x", "bar": "c", "baz": "f" },
   { "foo": "y", "bar": "d", "baz": "g" }
]
```
**Note**: the values of `foo` and `bar` in the last two lines are picked *randomly*.

It uses JavaScript's `Math.random()`, but a *predictive* pseudo-random generator function (*e.g.,* [seedrandom](https://github.com/davidbau/seedrandom)) can be passed as a second argument. Such function must work like `Math.random()` and return a number >= 0 and < 1.
```javascript
oneWise( /* your object */, myPseudoRandomNumberGenerator );
```

## Declaration

### Browser

```html
<script crossorigin src="https://unpkg.com/one-wise" ></script>
<script>
console.log(
	oneWise( {
		"foo": [ "x", "y" ],
		"bar": [ 1, 2, 3 ]
	} )
);
</script>
```

**Option 2**: Using unpkg and ESM:
```html
<script crossorigin src="https://unpkg.com/one-wise/index.esm.js" ></script>
<script>
import oneWise from 'one-wise';
</script>
```

### CommonJS (NodeJS)

```javascript
const oneWise = require('one-wise');
```

### ESM/TypeScript

```javascript
import oneWise from 'one-wise';
```

## API

### oneWise( obj [, prngFunc ] )

- `obj` {object} - The given object.
- `prngFunc` {function} - Pseudo-random number generator function used to pick array elements to repeat. Defaults to `Math.random`.

## See also

- [shuffle-obj-arrays](https://github.com/thiagodp/shuffle-obj-arrays) - Shuffles the arrays of the given object. A custom PRNG can be used.
- [seedrandom](https://github.com/davidbau/seedrandom) - Predictive PRNG

## License

[MIT](LICENSE) © [Thiago Delgado Pinto](https://github.com/thiagodp)
