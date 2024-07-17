

function sayname(){
    console.log("G");
    console.log("a");
    console.log("g");
    console.log("a");
    console.log("n");
}

// sayname()//execute
// sayname//reffernce


// function addTwoNumbers(num1, num2)//parameters
// function addTwoNumbers(num1, num2){
//    console.log( num1+num2);
// }
function addTwoNumbers(num1, num2){
//   let result = num1 + num2
//   return result

return num1+num2
  
}

const result = addTwoNumbers(3,5)//arrgument

// console.log("Result: ",result);


function loginUserMessage (username = "Singh"){
   
      if (!username) {
        console.log("plese enter a username");
        return
      }
      return `${username} Just logged In`
}

// console.log(loginUserMessage("Gagan"))
// console.log(loginUserMessage())

// ... here is rest otherwise spread

function calccartprice(va1, val2,...num1){
  return num1
}

// console.log(calccartprice(200,300,500,2000));

const user = {
  username:"Gagan",
  prices:199
}

function handleObject(anyObject){

  console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);

}

// handleObject(user)
// handleObject({
//   username:"robin",
//   price:399
// })

const myNewArray =[200,400,100,6000]


function handleArray(getArray){
  return getArray[2]
}

// console.log(handleArray(myNewArray));

console.log(handleArray([100,200,3000,4000]));
