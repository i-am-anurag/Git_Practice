const {runningSum,insertionSort} = require('./array');
const {findMax,findMin} = require('./test');
console.log("This is main file");
// find running sum sum of 1d array 
const arr = [10,15,50,60,1,90,70];
const output = runningSum(arr);
console.log("The output of runnig array sum is:",output);
const max = findMax(arr);
const min = findMin(arr);
console.log("The max value in the array is:",max);
console.log("\nThe min value in the array is:",min);
const sortedArray = insertionSort(arr);
console.log("the Sorted array is:",sortedArray);