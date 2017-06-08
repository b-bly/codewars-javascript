/*
Create range generator function that will take up to 3 parameters - start value, step and stop value. This function should return an iterable object with numbers. For simplicity, assume all parameters to be positive numbers.

Examples:

range(5) --> 1,2,3,4,5
range(3, 7) --> 3,4,5,6,7
range(2, 3, 15) --> 2,5,8,11,14

*/

function range(a, b, c) {
    var endVal, startVal, step, seq;
    if (b === undefined) {
        endVal = a;
        return Array.apply(null, Array(endVal)).map(function(_, i){
            return i + 1;
        });
    }
    if (c === undefined) {
        startVal = a;
        endVal = b;
        return  Array.apply(null, Array(endVal - startVal + 1)).map(function(_, i){
            return startVal + i;
        });
    }
    if (c !== undefined) {
        startVal = a;
        step = b;
        endVal = c;
        return  Array.apply(null, Array(Math.floor((endVal - startVal)/step) +1)).map(function(_, i){
            return startVal + i * step;
        });
    }
    return [];
}
