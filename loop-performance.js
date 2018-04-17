function generateNaturalNumbers (length) {
    var list = new Array(length);
    for (var i=0; i<length; i++) {
        list[i] = i + 1;
    }  
    return list;
};
function iterate(list) {
    var startTime = new Date();
    var a = 0;
    //Oh! btw the existence check will fail if any element is zero
    for (var i=0; list[i]; i++)
    {
        a++;
    }
    var endTime = new Date();
    return (endTime.getTime() - startTime.getTime());
};

function iterateSmart(list) {
    var startTime = new Date();
    var a = 0;
    var length = list.length;
    for (var i=0; i < length; i++)
    {
        a++;
    }   
    var endTime = new Date();
    return (endTime.getTime() - startTime.getTime());
};

var list = generateNaturalNumbers(50000000); //Do not add another zero here for demo !

var executionTime = iterate(list);
console.log(`Execution Time for array iteration = ${executionTime}`);
var reducedExecutionTime = iterateSmart(list);
console.log(`Reduced execution Time for array iteration = ${reducedExecutionTime}`);

