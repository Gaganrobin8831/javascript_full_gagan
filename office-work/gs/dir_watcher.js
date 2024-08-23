import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const directoryToWatch = path.join(__dirname, 'checkdir'); 

fs.watch(directoryToWatch, (eventType, filename) => { 
    console.log("\nThe file", filename, "was modified!"); 
    console.log("The type of change was:", eventType); 
  }); 
    
console.log(`Watching for changes in ${directoryToWatch}`);
