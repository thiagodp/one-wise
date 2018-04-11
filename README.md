# one-wise

One-wise combinatorial testing generator

> A **1-wise** (*a.k.a.* **1-way**) testing generator guarantees that at least one value of each group appears in the generated tests. The produced array has exactly the length of the largest input array.

## About

This is a fast and simple implementation of a [1-wise testing](https://en.wikipedia.org/wiki/All-pairs_testing) generator. No external dependencies. Uses [semantic versioning](https://semver.org/).

## Install

```bash
npm install one-wise --save
```

## Example


```javascript
const oneWise = require( 'one-wise' );

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
oneWise( { ... }, myPseudoRandomNumberGenerator );
```

## See also

- [shuffle-obj-arrays](https://github.com/thiagodp/shuffle-obj-arrays) - Shuffles the arrays of the given object. A custom PRNG can be used.
- [seedrandom](https://github.com/davidbau/seedrandom) - Predictive PRNG

## License

[MIT](LICENSE) © [Thiago Delgado Pinto](https://github.com/thiagodp)
