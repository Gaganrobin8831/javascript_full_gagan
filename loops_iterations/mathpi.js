let pi1 = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(pi1);

pi1.writable = true

console.log(Math.PI =4);


//output

// Microsoft Windows [Version 10.0.19045.4651]
// (c) Microsoft Corporation. All rights reserved.

// C:\Users\Netweb\Desktop\gagan crud>node javscript-learn/mathpi.js
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,       
//   configurable: false      
// }

// C:\Users\Netweb\Desktop\gagan crud>node javscript-learn/mathpi.js
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
// {
//   value: 3.141592653589793,
//   writable: true,
//   enumerable: false,
//   configurable: false
// }

// C:\Users\Netweb\Desktop\gagan crud>node javscript-learn/mathpi.js
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
// 3.141592653589793

// C:\Users\Netweb\Desktop\gagan crud>node javscript-learn/mathpi.js
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
// 4
