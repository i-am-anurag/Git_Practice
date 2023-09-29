const {runningSum} = require('./array');
const {findMax} = require('./test');
console.log("This is main file");
// find running sum sum of 1d array 
const arr = [10,15,50,60,1,90,70];
const output = runningSum(arr);
console.log("The output of runnig array sum is:",output);
const max = findMax(arr);
console.log("The max value in the array is:",max);