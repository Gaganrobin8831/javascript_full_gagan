const { hasSubscribers } = require('diagnostics_channel');
const EventEmitter =  require('events')

class MyCLass extends EventEmitter{
    printDetail(message){
        console.log(message);
        this.emit('log', {id:"1",name:"Gagan",isLog:true});
        
    }
}

const myownClass =  new MyCLass();
let newArr = []
 myownClass.on('log', (data) => {
    hasBeenLogged = data.isLog ? "User is Login":"User not Logged In"
  newArr.push(hasBeenLogged)
    console.log(`The id of person is ${data.id} and The name is ${data.name} user is ${hasBeenLogged}`);
    
})



myownClass.printDetail("The user detail Is!")
console.log(newArr);