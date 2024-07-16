// primitive

// 7 types: String ,Number,Boolean,null,undefined,Symbol,BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const otutesideTemp =null
// let useEmail;

// const id =Symbol('123')
// const anotherId = Symbol('123')

// // console.log(id === anotherId);

// const bideNumber = 21435246576534234123345345n //for create bigInt just set n on last




//Refernce Type(Non primitive)

//Array ,Objects,Function

// const heroes =["shaktiman","nagraaj","daya"];

// let myObj={
//     name:"gagan",
//     age:25  
// }

// const MyFunction = function(){
//     console.log("Helo World");
// }


// console.log(typeof bideNumber);
// console.log(typeof otutesideTemp);
// console.log(typeof scoreValue);
// console.log(typeof MyFunction);




// **************************************************
// Stack memory(primitive), Heap (Non-priitive)


//stack (primitive) not effect original data its create copy of original
let myName = "Gagan"
let anotherName = myName

anotherName ="Robin"
// console.log(myName);
// console.log(anotherName);

let user ={
    email:"gaganrobin71@gmail.com",
    upi:"user@ybl"
}

let userTwo = user
userTwo.email = "afsgk124@gmail.com"

console.log(user.email);
console.log(userTwo.email);
