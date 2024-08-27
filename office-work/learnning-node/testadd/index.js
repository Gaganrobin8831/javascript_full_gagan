const http = require('http');
const url = require('url');
const fs = require('fs');

const historyFilePath = 'history.json';

let history = [];
let id =1;
if (fs.existsSync(historyFilePath)) {
  try {
    history = JSON.parse(fs.readFileSync(historyFilePath, 'utf-8'));
  } catch (error) {
    console.error('Failed to load history. Starting with an empty history.');
  }
}


function calculate(operation, num1, num2) {
  switch (operation) {
    case 'add':
      return num1 + num2;
    case 'subtract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
    default:
      return 'Error: Invalid operation';
  }
}

const requestListener = (req, res) => {

  const parsedUrl = url.parse(req.url, true);
//   console.log(parsedUrl);
  

  const pathname = parsedUrl.pathname;
//   console.log(pathname);
  



  if (pathname === '/calculate' && req.method === 'GET') {

    // console.log(parsedUrl.query);
    
    const { operation, num1, num2 } = parsedUrl.query;
    
    // console.log( operation, num1, num2 );

   
    const n1 = parseFloat(num1);

    const n2 = parseFloat(num2);

    if (!operation || isNaN(n1) || isNaN(n2)) {

      res.writeHead(400, { 'Content-Type': 'application/json' });

      res.end(JSON.stringify({ error: 'Invalid query parameters.' }));

      return;
    }

    const result = calculate(operation, n1, n2);

   
    

    const entry = {id:id++, operation, num1: n1, num2: n2, result };
    
    history.push(entry);

    if (history.length > 100) {

      history.shift(); 

    }

    
    
    fs.writeFileSync(historyFilePath, JSON.stringify(history, null, 2));

    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify(entry));
    

  } else if (pathname === '/history' && req.method === 'GET') {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify(history,null,2));

  } else {

    res.writeHead(404, { 'Content-Type': 'text/plain' });

    res.end('Not Found');

  }
  
};


const server = http.createServer(requestListener);


server.listen(3000, () => {
  console.log('Calculator server is running on http://localhost:3000');
});









