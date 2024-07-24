const coding = ["js","py","cpp","ruby"]

// coding.forEach(function (item) {
//     console.log(item);
// });

// coding.forEach( (val) => {
//     console.log(val);
// } )

function printme(item){
    console.log(item);
}

// coding.forEach(printme)

// coding.forEach( (item, index , arr) => {
//     console.log(item , index , arr);
// } ) 


const myCoding = [
    {
        languagename:"javascript",
        languagefilename: "js"
    },
    {
        languagename:"python",
        languagefilename: "py"
    },
    {
        languagename:"java",
        languagefilename: "java"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.languagename);
})