var average = arr => arr.reduce((a,b)=> a+b, 0) / arr.length;
average([1,2,3,4,5,6]);
//average([]);  handle the NaN


/*floating point numbers*/
0.1 + 0.2 === 0.3 // is false 
9007199254740992 + 1 // is equal to 9007199254740992  
9007199254740992 + 2 // is equal to 9007199254740994


/*beware of rounding errors*/

//https://modernweb.com/45-useful-javascript-tips-tricks-and-best-practices/