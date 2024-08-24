const fs = require('fs');
const path = require('path');


const directoryToWatch = path.join(__dirname, 'checkdir');

fs.watch(directoryToWatch, (eventType, filename) => {
    if (filename) {
        const filePath = path.join(directoryToWatch, filename);
        
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
               
                console.log(`The file ${filename} was deleted.`);
            } else {
               
                console.log(`The file ${filename} was modified.`);
            }
        });

        if (eventType === 'rename') {
            console.log(`The file ${filename} was created or deleted.`);
        } else if (eventType === 'change') {
            console.log(`The file ${filename} was modified.`);
        }
    } else {
        console.log('Filename not provided.');
    }
});

console.log(`Watching for changes in ${directoryToWatch}`);
