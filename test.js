const test = require( 'ava' );
const oneWise = require( '.' );

test( 'an object without properties returns an empty object array', t => {
    const r = oneWise( {} );
    t.deepEqual( r, [ {} ] );
} );

test( 'an object with a single property returns one object with each value', t => {
    const r = oneWise( { "A": [ 1, 2 ] } );
    t.deepEqual( r, [
        { "A": 1 },
        { "A": 2 }
    ] );
} );

test( 'mix values', t => {
    const fakeRandom = () => 0.1;
    const r = oneWise( { "A": [ 1, 2 ], "B": [ "x", "y", "z" ] }, fakeRandom );
    t.deepEqual( r, [
        { "A": 1, "B": "x" },
        { "A": 2, "B": "y" },
        { "A": 1, "B": "z" }
    ] );
} );