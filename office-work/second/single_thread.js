// Single-Threaded Event Loop Demonstration


console.log("Long-running task completed");


function runlopp() {
  for(let i=0 ; i<1200;i++){
    console.log(i);
    
  }
  looping();
  
}

function looping(){
  console.log("loop is printed");
  
}

runlopp();