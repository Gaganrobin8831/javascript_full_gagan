const http = require('http');
const fs = require('fs');
const path = require('path');


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
   
    const filePath = path.join(__dirname, req.url === '/' ? 'home.html' : req.url);
    
   
    const extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.gif':
            contentType = 'image/gif';
            break;
        
    }

    
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
            } else {
              
                res.writeHead(500);
                res.end('Server Error');
            }
        } else {
           
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
