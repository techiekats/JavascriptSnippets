//Snippet 1
var average = arr => arr.reduce((a,b)=> a+b, 0) / arr.length;
console.assert (average([1,2,3,4,5]) === 3, 'Average value is incorrect');
console.assert (average([]) === 0, 'Average value is incorrect'); 

//Snippet 2
/*
function checkIfEmpty (list) {
    if (list) {
        return true;
    }
    return false;
}

var results = [ {value: 0, expected:false, actual:checkIfEmpty(0)}
               ,{value:0/0, expected:false, actual: checkIfEmpty(0/0)}
               ,{value:{}, expected: false, actual: checkIfEmpty({})}
               ,{value:[], expected: false, actual: checkIfEmpty([])}];
console.table(results);*/