// Single-Threaded Event Loop Demonstration


console.log("Long-running task completed");

setTimeout(() => {
  console.log("Timer triggered!");
}, 1000); 

setInterval(() => {
  console.log("Interval triggered!");
}, 1000); 

console.log("Script finished");