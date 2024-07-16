const score = 400
// console.log(score);

const balance = new Number(100)

// console.log(balance);

// console.log(balance.toString().length);// convert to string
// console.log(balance.toFixed(2));

// const anotherNumber = 1123.8966 //1.12e+3
// // const anotherNumber = 1123.8966 //124

// console.log(anotherNumber.toPrecision(3));


const hunderds= 1000000
// console.log(hunderds.toLocaleString('en-In'));//10,00,000
// console.log(hunderds.toLocaleString(''));//1,000,000

// **************************Maths**************************************


// console.log(Math);
// console.log(Math.abs(-31));//negative to postive ,postive as a this same

// console.log(Math.round(4.3));//4
// console.log(Math.round(4.6));//5
// console.log(Math.ceil(4.2));//5 use upper value only same as round
// console.log(Math.floor(4.9));//4 use lover value only
// console.log(Math.min(4,3,5,2));//2
// console.log(Math.max(4,3,5,2));//5
/// alaways run between 0 or 1
// console.log(Math.random());
// console.log((Math.random()*10) + 1);//5.803375373355819 /// add +1 for avoid 0.01334 in random
// console.log(Math.floor(Math.random()*10) + 1);//4 any 

const min = 10
const max = 20

// console.log(Math.random() * (max - min + 1))
console.log(Math.floor(Math.random() * (max - min + 1))+min)

