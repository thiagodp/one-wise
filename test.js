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


test( 'combination of 2 with lengths 2 and 1', t => {
    const fakeRandom = () => 0.1;
    const r = oneWise( { "A": [ 1, 2 ], "B": [ "x" ] }, fakeRandom );
    t.deepEqual( r, [
        { "A": 1, "B": "x" },
        { "A": 2, "B": "x" },
    ] );
} );

test( 'combination of 2 with lengths 2 and 3', t => {
    const fakeRandom = () => 0.1;
    const r = oneWise( { "A": [ 1, 2 ], "B": [ "x", "y", "z" ] }, fakeRandom );
    t.deepEqual( r, [
        { "A": 1, "B": "x" },
        { "A": 2, "B": "y" },
        { "A": 1, "B": "z" }
    ] );
} );

test( 'combination of 3 with lengths 2, 3, and 2', t => {
    const fakeRandom = () => 0.1;
    const r = oneWise(
		{
			"A": [ 1, 2 ],
			"B": [ "x", "y", "z" ],
			"C": [ "foo", "bar" ]
		},
		fakeRandom
	);
    t.deepEqual( r, [
        { "A": 1, "B": "x", "C": "foo" },
        { "A": 2, "B": "y", "C": "bar" },
		{ "A": 1, "B": "z", "C": "foo" },
    ] );
} );


test( 'combination of 3 with lengths 4, 3, 2', t => {
    const fakeRandom = () => 0.1;
    const r = oneWise(
		{
			"A": [ 1, 2, 3, 4 ],
			"B": [ "x", "y", "z" ],
			"C": [ "foo", "bar" ]
		},
		fakeRandom
	);
    t.deepEqual( r, [
        { "A": 1, "B": "x", "C": "foo" },
        { "A": 2, "B": "y", "C": "bar" },
		{ "A": 3, "B": "z", "C": "foo" },
		{ "A": 4, "B": "x", "C": "foo" },
    ] );
} );

test( 'combination of 3 with lengths 4, 1, 0', t => {
    const fakeRandom = () => 0.1;
    const r = oneWise(
		{
			"A": [ 1, 2, 3, 4 ],
			"B": [ "x" ],
			"C": []
		},
		fakeRandom
	);
    t.deepEqual( r, [
        { "A": 1, "B": "x" },
        { "A": 2, "B": "x" },
		{ "A": 3, "B": "x" },
		{ "A": 4, "B": "x" },
    ] );
} );
