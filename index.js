'use strict';

/**
 * Performs a 1-wise (aka 1-way) interaction with the items of the given parameters.
 *
 * @param {object} map Maps string => array of values, e.g. `{ "foo": [ "x", "y" ], "bar": [ "a", "b", "c" ] }`.
 * @param {function} randomFn Function to generate a pseudo-random number >= 0 and < 1. Assumes `Math.randon()` if not informed.
 * @returns {array} Array with maps with keys and their values.
 */
function oneWise( map, randomFn ) {
    var fn = randomFn || Math.random;
    var interactions = []; // matrix
    var greatest = 1;
    var len = 0;
    var column = null; // parameter
    var row = null;
    for ( var i = 0; i < greatest; ++i ) {
        row = {};
        for ( var key in map ) {
            column = map[ key ];
            len = column.length;
            if ( len > greatest ) {
                greatest = len;
            }
            if ( i < len ) {
                row[ key ] = column[ i ];
            } else if ( len > 0 ) {
                row[ key ] = column[ randomBefore( len, fn ) ];
            }
        }
        interactions.push( row );
    }
    return interactions;
}

function randomBefore( n, randomFn ) {
    return Math.floor( randomFn() * n );
}

module.exports = oneWise;