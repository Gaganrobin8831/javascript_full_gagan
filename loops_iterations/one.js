// for

// for (let i = 0; i <= 10; i++) {
//   const element = i
//   if (element == 5) {
//     console.log("5 is best number");
    
//   }
//     console.log(element);
// }


for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop ${i}`);
  for (let j = 0; j < 10; j++) {
    
    // console.log(`inner loop ${j} and outer loop ${i}`);
    // console.log(i + 'x' + j + '=' + i*j);
  }
    
}

const  myArray = ["flash", "ironman","thor"]
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
    
}


// break and continue

for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log(`detected 5`);
        continue
    }
    
    console.log(`value of index is ${index}`);
   
}