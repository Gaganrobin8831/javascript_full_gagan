//Dates

let myDate = new Date()

// console.log(myDate.toString()); //Fri Jul 12 2024 11:09:49 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //Fri Jul 12 2024
// console.log(myDate.toLocaleString()); //12/7/2024, 11:09:49 am
// console.log(typeof myDate);//object

// let myCreateDate = new Date(2023,0,23) //Mon Jan 23 2023
// // let myCreateDate = new Date(2023,0,23,5,3) //23/1/2023, 5:03:00 am
// let myCreateDate = new Date("2024-01-14")//14/1/2024, 5:30:00 am
let myCreateDate = new Date("01-12-2024")//12/1/2024, 12:00:00 am


// console.log(myCreateDate.toLocaleString());

let mytimeStamp = Date.now()

// // console.log(mytimeStamp);//1720763163680
// // console.log(myCreateDate.getTime());//1704997800000 ms
// console.log(Math.floor(Date.now()/1000));//1720763311 s

// javascript create date new Date() method its create arraye and month start from 0 to 11 but in Date("2024-01-14") month start from 1

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDate()} and the time`


//custmize
newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:'GMT'
})

console.log(newDate);


