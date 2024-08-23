
import fs from 'fs'

const filePath = 'text.txt';

fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

console.log("Hello how are you");


