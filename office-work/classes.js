class User {
    constructor(name,email,pass) {
        this.name = name
        this.email = email 
        this.pass = pass
    }
    EncryptedPassword(){
        return `The username is ${this.pass}abc`
    }
    changeName(){
        return this.name.toUpperCase()
    }
}

const userObject = new User("Gagan","gagan@gmail.com",1213)
console.log(userObject.changeName());
