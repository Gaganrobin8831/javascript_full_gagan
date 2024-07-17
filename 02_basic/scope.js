
//var c = 300
let a = 300// global scope

// scope {}

if (true) {
    let a = 10
const b =20
// var c =30
// console.log("Inner : ", a);//bloack sope


}


// console.log(a);
// console.log(b);



function one(){
    const usename = "Gagan"


    function two(){
        const website = "youtube"
        console.log(usename);
    }
    // console.log(website);
    
    two()

}

// one()

if (true) {

    const usename = "Gagan"
    if (usename ==="Gagan") {

        const website = "youtube"
        // console.log(usename +" " + website);
        
    }
    // console.log(website);
}

// console.log(usename);


//********************************intersiting************ */
console.log(addone(5));
function addone(num){
  return num+1
}



// console.log(addTwo(5));// error
const addTwo = function(num){
    return num + 2
}


console.log(addTwo(5));