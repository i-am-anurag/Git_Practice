// Running sum of 1d array
var runningSum = function(nums) {
    let output = new Array(nums.length)
    output[0] = nums[0];
    for(let idx = 1; idx < nums.length; idx++) {
        output[idx] = output[idx-1] + nums[idx];
    }
    return output;
};

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i]
        let j
        for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentValue
    }

    return arr
}

// const arr = [1,2,5,0,25,15,30];

// const result = runningSum(arr);

// console.log(`The Result is: ${result}`);

module.exports = {
    runningSum,
    insertionSort,
}
