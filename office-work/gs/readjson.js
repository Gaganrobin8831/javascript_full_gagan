const fs = require('fs')

const path = './data.json';

function readJSONFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      try {
        const jsonData = JSON.parse(data);
        resolve(jsonData);
      } catch (parseErr) {
        reject(parseErr);
      }
    });
  });
}

function writeJSONFile(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, JSON.stringify(data), 'utf8', (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

async function updateData() {
  try {
    const data = await readJSONFile(path);
    console.log('Original Data:', data);

    data.age += 1;
    data.occupation = 'Engineer'; 

    await writeJSONFile(path, data);
    console.log('Data has been updated and written back to the file.');
  } catch (error) {
    console.error('Error:', error);
  }
}

updateData();
