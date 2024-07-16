const name = "Gagan"
const repoCount = 7

// console.log(name+repoCount+" VAlue");



//back ticks modern concept mostly use in this time
console.log(`Hello My name is ${name} my repo count is ${repoCount}`);

const gameNAme = new String('Gagan-robin-singh')

// console.log(gameNAme[0]);//Key Value

// console.log(gameNAme.__proto__);//Prototype

// console.log(gameNAme.length);//for lenght
// console.log(gameNAme.toUpperCase());//For uppercase

// console.log(gameNAme.charAt(2));//Check charckter where is 
// console.log(gameNAme.indexOf('n'));//Check charckter where is this postion

// const newString = gameNAme.substring(0,4)
// console.log(newString);//not incude last value if we enter 0,4 is show only 0to 3 chracter not another


// const anotherString1 = gameNAme.slice(-6,-4)
// console.log(`Hello ${anotherString1}`);

const newString2 = "  gagan  "
console.log(newString2);
console.log(newString2.trim());

const url ="https://google.com/gagan%20robin"


console.log(url.replace('%20', '-'));

console.log(url.includes('gagan'));//true

console.log(gameNAme.split('-'));