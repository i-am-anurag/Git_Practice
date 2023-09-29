console.log("This is For testing File");

const findMax = (arr)=> {
    let max = 0;
    for(let num of arr) {
        if(num>max)
            max = num;
    }

    return max;
}

const findMin = (arr)=>{
    let min = arr[0];
    for(let i=1;i<arr.length;i++) {
        if(arr[i]<min)
            min = arr[i];
    }

    return min;
}

const arr = [50,90,60,180,2740,560,620,10,55,84,98];

const max = findMax(arr);
const min = findMin(arr)
console.log(`The max number is: ${max} and min number is: ${min}`);

module.exports = {
    findMax,
}