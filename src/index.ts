/**
 * Performs a 1-wise (aka 1-way) interaction with the items of the given parameters.
 *
 * @param {object} map Maps string => array of values, e.g. `{ "foo": [ "x", "y" ], "bar": [ "a", "b", "c" ] }`.
 * @param {Function} randomFn Function to generate a pseudo-random number >= 0 and < 1. Assumes `Math.randon()` if not informed.
 * @returns {Array} Array with maps with keys and their values.
 */
export default function oneWise( map: any, randomFn: Function ): any[] {
    const fn = randomFn || Math.random;
    let interactions = []; // matrix
    let greatest = 1;
    let len = 0;
    let column = null; // parameter
    let row = null;
    for ( let i = 0; i < greatest; ++i ) {
        row = {};
        for ( let key in map ) {
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

function randomBefore( n: number, randomFn: Function ): number {
    return Math.floor( randomFn() * n );
}
