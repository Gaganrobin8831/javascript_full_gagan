// singleton

// object literals
// Object.create // constructor throw


const mySym = Symbol("Key1")

const JsUser = {
    name : "Gagan",
    "full name ":"Gagan deep sing",
    age : 25,
    location: "amritsar",
    email: "ahaghd@gmail.com",
    isLoggin: false,
    lastLogin:["monday","sunday"],
    [mySym]:"myKey1"

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name "]);
// console.log(typeof JsUser[mySym]);

// JsUser.email = "gdxv@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "1wdv@gmail.com"
// console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello js User");
}


JsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());