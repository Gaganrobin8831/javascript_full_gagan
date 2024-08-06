let now = new Date()
// only run in browser
// let local = navigator.language;
// console.log(local);
console.log(now);
let newdate = Intl.DateTimeFormat('en-US',{

    hour:"numeric",
    minute:"numeric",
   hourCycle:"h12"
}).format(now)
console.log(newdate);

let newdate2 = Intl.DateTimeFormat('en-IN').format(now)
console.log(newdate2);
let newdate3 = Intl.DateTimeFormat('ar-SY').format(now)
console.log(newdate3);
let newdateJapan = Intl.DateTimeFormat('ja-JP').format(now)
console.log(newdateJapan);



