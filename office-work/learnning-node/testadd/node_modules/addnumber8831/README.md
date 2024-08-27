# addNumber
adding number 

# Must Required in package.json

    "main": "index.js",
     "type": "commonjs",


     this must require your type is commonjs otherwise it will not work



# --------------------------- How to use -----------------



1: For using this first u need to install this package
2: Next u need to import this using 
   
     const  AddNumber = require('addnumber')  // import module

        let data = AddNumber(3,4)
        console.log(data); // AddNumber(value1,value2)    

            OR

    const AddNumber = require('./index') // import module

        console.log(AddNumber(10,20));    // AddNumber(value1,value2)    



