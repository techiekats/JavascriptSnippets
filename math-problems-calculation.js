var average = arr => arr.reduce((a,b)=> a+b, 0) / arr.length;
//average([1,2,3,4,5,6]);
average([]); // is NaN, should be 0

