const user = {
    username:"Gagan",
    price:199,
    welmsg:function(){
        console.log(`${this.username} , welcome to Website`);
        // console.log(this);
    }


}

// user.welmsg()

// user.username ="robin"


// user.welmsg()

// console.log(this);

// function one(){
//     let usename = "GAgan"
//     console.log(this.usename);//undefined
// }

// one()


// const Gagan = function() {
//     let usename = "GAgan"
//       console.log(this.usename);
// }

// Gagan()

const Gagan = () => {
    let usename = "GAgan"
      console.log(this);
}

// Gagan()



// const addTwo = (num1 , num2) => {
//    return num1 + num2
// }


//implicit implement
// const addTwo = (num1 , num2) => num1 + num2
// const addTwo = (num1 , num2) => (num1 + num2)
const addTwo = (num1 , num2) =>( { usename:"hitesh"})
   

// console.log(addTwo(3,4));


// const myArr = [2,3,4,5,6]

// myArr.forEach(() => {})