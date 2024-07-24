//control Flow

//if


// const isUserLoggedIn = true

// const temparture = 41

// if (temparture === 40) {
//     console.log("executed");
// }
// else
// {
//     console.log("greater than 50");
// }

// <,>, <=, >= , == , === ,!= , !==

// const score = 200 

// if (score > 100) {
//     let power = "Fly"

//     console.log(`user power ${power} `);
// }
// // console.log(`user power ${power} `);


const balance = 1000

//implicit scope
// if (balance > 500) console.log("yes"),console.log("test2");

// if (balance < 500) {

// console.log("less than 500");
    
// }else if (balance <750) {
    
// console.log("less than 750");
    
// }

// else if (balance <950) {
    
// console.log("less than 950");
    
// }
// else{
//     console.log("less than 1200");

// }

// const isUserLoggedIn = true
// const loggedInFromGoggle = false
// const debitCard = true
// const  emailLoggedIn = true

// if (isUserLoggedIn && debitCard) {

//     console.log("allow");
    
// }

// if (loggedInFromGoggle || emailLoggedIn) {
//     console.log("allow");
// }

// Nullish coalescing operator (??): null undefined

let val1;

// val1 = 5 ?? 10

// val1 = null ?? 10

// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);

//terniary operator
 
// condition ? true : false


const iceTea = 100

iceTea <=80 ? console.log("less than 80") : console.log("more than 80")

