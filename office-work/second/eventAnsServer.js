const http = require('http');
const EventEmitter = require('events');

class MyClass extends EventEmitter {
    printDetail(message) {
        console.log(message);
        this.emit('log', { id: "1", name: "Gagan", isLog: true });
    }
}

const server = http.createServer();

const myOwnClass = new MyClass();

let newArr = [];

myOwnClass.on('log', (data) => {
    let hasBeenLogged = data.isLog ? "User is Logged In" : "User not Logged In";
    console.log(`The id of person is ${data.id} and The name is ${data.name}. ${hasBeenLogged}`);

    let name = data.name;
    let id = data.id;
    newArr.push({ hasBeenLogged, id, name });
});

myOwnClass.printDetail("The user detail Is!");

const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

server.on('request', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(newArr));
});
