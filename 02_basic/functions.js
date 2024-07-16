

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








