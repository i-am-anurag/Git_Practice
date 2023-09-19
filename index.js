console.log("Hello form node js");

function findMaxConsecutiveOnes (nums) {
    let largestCount = 0;
    let currentCount = 0;
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] === 0) {
            currentCount = 0;
        } else {
            currentCount++;
        };
        if (currentCount > largestCount) largestCount = currentCount;
    };
    return largestCount;
};

let arr = [1,2,1,1,1,5,1,6,1,1,0];
const result = findMaxConsecutiveOnes(arr);

console.log(result);