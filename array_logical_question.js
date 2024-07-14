const myArr = [0, 1, 2, 1, 1, 1, 2, 3, 4, 3,3, 5];
let countMap = {};

// First, count the occurrences of each element in the array
for (let i = 0; i < myArr.length; i++) {
    let temp = myArr[i];
    if (countMap[temp] !== undefined) {
        countMap[temp]++;
        console.log(countMap[temp]);
    } else {
        countMap[temp] = 1;
        // console.log("1");
    }
}


console.log(countMap);
// Then, print out the elements that appear more than once
for (let key in countMap) {
    if (countMap[key] > 1) {
        console.log(`The value ${key} appears ${countMap[key]} times.`);
    }
}
