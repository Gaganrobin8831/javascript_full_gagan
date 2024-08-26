let currentDate = new Date();
let dateNow = currentDate.getTime();

let recentTime = new Date(2023, 12, 31).getTime();
let total = currentDate - recentTime;
console.log(total);

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;
const month = (365/12) * 24* 60 * 60 * 1000

let totalHours = (total / year);
console.log(totalHours);