// const userEmail = "jcdb@gmail.com"

const userEmail = []
if (userEmail) {
    console.log("Go user email");
}
else{
    console.log("dont have user email");
}


// falsy value

// false , 0 , -0 , BigInt 0n, "",null ,undefined,NaN


// ---------------------------

// truethy values
// "0",'false'," ", [], {}, function(){}


// if (userEmail.length === 0) {
//     console.log("Array is Empty");
// }


const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}