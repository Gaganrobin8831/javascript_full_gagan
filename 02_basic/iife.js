//Immediately Invoked Function Expressions(IIFE)

//named iife
(function Gagan(){
    console.log(`DB Connected`);
})();// without smeicolon; its not stop and we can not define another funtion after this function


// Gagan()
//function()//execution()


//simple iife
((name)=>{
    console.log(`DB Connected ${name}`);
})('Gagan');