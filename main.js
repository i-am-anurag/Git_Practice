const {runningSum} = require('./array');
console.log("This is main file");
// find running sum sum of 1d array 
const arr = [10,15,50,60,1,90];
const output = runningSum(arr);
console.log("The output of runnig array sum is:",output);