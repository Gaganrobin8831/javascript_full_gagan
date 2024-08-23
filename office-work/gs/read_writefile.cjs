const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');


const textToWrite = 'Hello, Node.js! This is a test file.';


function createAndWriteFile() {
  fs.writeFile(filePath, textToWrite, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('File written successfully.');

   
    readFile();
  });
}


function readFile() {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File content:', data);
  });
}


createAndWriteFile();
