const myArr = [0,1,2,1,1,1,2,3,4,3,5]
let count=0;


for (let index = 0; index < myArr.length; index++) {
    
    //console.log(myArr[index]);
    let temp = myArr[index]
//console.log(`this is temp value ${temp}`);

   for (let k = 0; k < myArr.length; k++) {
       if (temp == myArr[k]) {
         
            count++;
       
      }
        
     }
  


   
        console.log(`the value is ${temp} as time ${count} array of ${j}`);
        
     
   
count=0;
    
}