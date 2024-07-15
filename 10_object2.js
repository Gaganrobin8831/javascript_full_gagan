// const tinderUser = new Object() // single tern object

const tinderUser = {} // non single tern object

tinderUser.id = "123avs"

tinderUser.name ="gagan"

tinderUser.isLoggedin = false

// console.log(tinderUser);

// const regularUser = {
//     email:"some@gmail.com",tinderUser
//     fullname:{
//         userFullname:{
//             fisrtname:"gagan",
//             lastName: "Singh"
//         }
//     }
// }

// console.log(regularUser.fullname?.userFullname.fisrtname);


const object1 ={
    1:"a",
    2:"b"
}

const object2 = {
3:"d",
    4:"e"
}
const object4 = {
5:"f",
    6:"g"
}

// const obj3 = {object1, object2}

// const obj3 =Object.assign({} , object1 , object2,object4)
const obj3 = {...object1, ...object2, ...object4}//spread
// console.log(obj3);


const users = [
    {
        id:1,
        email:"jshdfj@gmauil.com",
    },
    {
        id:2,
        email:"js@gmail.com",
    }
]

users[1].email
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));