console.log("This is For testing File");

const findMax = (arr)=> {
    let max = 0;
    for(let num of arr) {
        if(num>max)
            max = num;
    }

    return max;
}

const arr = [10,50,90,60,180,2740,560,620,10,55,84,98];

const max = findMax(arr);
console.log(`The max number is: ${max}`);