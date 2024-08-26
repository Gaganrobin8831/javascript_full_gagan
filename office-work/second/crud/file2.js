const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const FILE_PATH = path.join(__dirname, 'example.json');


function handleFileError(res, err) {
    if (err.code === 'ENOENT') {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'File not found' }));
    } else {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Error reading data' }));
    }
}

function writeJSONToFile(filePath, data, res) {
    fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            res.statusCode = 500;
            res.end('Error writing to file');
            return;
        }
        console.log('File updated successfully.');
        res.statusCode = 200;
        res.end('File updated successfully');
        return
    });
}


function updateJSONData(filePath, updateCallback, res) {
    fs.readFile(filePath, 'utf8', (err, existingData) => {
        let jsonArray = [];

        if (err && err.code !== 'ENOENT') { // Ignore file not found error
            console.error('Error reading file:', err);
            res.statusCode = 500;
            res.end('Error reading file');
            return;
        }

        if (existingData) {
            try {
                jsonArray = JSON.parse(existingData);
                if (!Array.isArray(jsonArray)) {
                    throw new Error('File content is not an array');
                }
            } catch (e) {
                console.error('Error parsing existing JSON:', e.message);
                res.statusCode = 500;
                res.end('Error parsing existing JSON');
                return;
            }
        }

   
        updateCallback(jsonArray);

        
        writeJSONToFile(filePath, jsonArray, res);
    });
}

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/read') {
        fs.readFile(FILE_PATH, 'utf8', (err, data) => {
            if (err) {
                handleFileError(res, err);
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(data);
        });
    } else if (req.method === 'POST' && req.url === '/create') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const parsedBody = JSON.parse(body);
                const { username, id, age } = parsedBody;

                if (!username) {
                    res.statusCode = 400;
                    res.end('Missing username');
                    return;
                }

                updateJSONData(FILE_PATH, (jsonArray) => {
                    jsonArray.push({ username, id, age });
                }, res);
            } catch (e) {
                console.error('Error parsing JSON:', e.message);
                res.statusCode = 400;
                res.end('Invalid JSON');
            }
        });

    } else if (req.method === 'PUT' && req.url.startsWith('/update')) {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString(); 
        });

        req.on('end', () => {
            try {
                const parsedBody = JSON.parse(body);
                const { id, username, age } = parsedBody;

                if (id === undefined) {
                    res.statusCode = 400;
                    res.end('Missing id');
                    return;
                }

                updateJSONData(FILE_PATH, (jsonArray) => {
                    const index = jsonArray.findIndex(item => item.id === id);
                    if (index === -1) {
                        res.statusCode = 404;
                        res.end('Record not found');
                        return;
                    }

                   
                    jsonArray[index] = { ...jsonArray[index], username, age };
                }, res);
            } catch (e) {
                console.error('Error parsing JSON:', e.message);
                res.statusCode = 400;
                res.end('Invalid JSON');
            }
        });

    } else if (req.method === 'DELETE' && req.url.startsWith('/delete')) {
        const urlParts = req.url.split('/');
        const id = parseInt(urlParts[urlParts.length - 1]);

        if (isNaN(id)) {
            res.statusCode = 400;
            res.end('Invalid ID');
            return;
        }

        updateJSONData(FILE_PATH, (jsonArray) => {
            const newArray = jsonArray.filter(item => item.id !== id);
            if (newArray.length === jsonArray.length) {
                res.statusCode = 404;
                res.end('Record not found');
                return;
            }
            jsonArray.length = 0; 
            jsonArray.push(...newArray); 
        });

    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
