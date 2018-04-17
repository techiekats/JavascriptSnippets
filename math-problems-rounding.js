var areEqual = (a, b) => a === b;
var areEqualWithinTolerance = (a, b, precision) => 
        (a > b) ? (a-b) <= precision : (b-a) <= precision;

console.log(0.1 + 0.2);
console.log( areEqual(0.1 + 0.2, 0.3) );
//E.g. stocks + bonds + cash = 100%
//console.log( areEqualWithinTolerance(0.1 + 0.2, 0.3, 0.0001));

