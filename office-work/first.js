let ages = [1,21,3,23,3,45,35,6,57,235,2,1,2]

let coldedrink = []

// coldedrink=ages.filter(e=> e>= 21)

// const agesqure = ages  
//     .map(age => Math.sqrt(age))
//     .map(age => age*100)

// console.log(agesqure);

// const ageSum = ages.reduce((total, age) => total +age , 0)

// console.log(ageSum);

// function minutestoSecond(min) {
//   return min * 60
// }

// console.log(minutestoSecond(6));

// function ageToDay(age) {
//   return age * 365
// }

// console.log(ageToDay(24));

// function generateRandom(min,max) {
//   return Math.floor(Math.random(1,10) * 10 + 1)
  
// }

// console.log(generateRandom(1,10));

// let string = 'Gagan'



// function reverseString(str) {
//   return str.split('').reverse().join('')
// }

// console.log(reverseString(string));

function sum(...args) {
  let sum = 0;
  for (let arg of args) sum =sum + arg;
  return sum;
}


// console.log(sum(1,2,3,4));


let line = 'hello how are you'

for (const i of line) {
   if (i === " ") {
    
    console.log('hell',line[i+1]);
   }
 
  console.log(i);
}
