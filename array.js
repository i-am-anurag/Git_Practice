// Running sum of 1d array
var runningSum = function(nums) {
    let output = new Array(nums.length)
    output[0] = nums[0];
    for(let idx = 1; idx < nums.length; idx++) {
        output[idx] = output[idx-1] + nums[idx];
    }
    return output;
};

const arr = [1,2,5,0,25,15,30];

const result = runningSum(arr);

console.log(`The Result is: ${result}`);
