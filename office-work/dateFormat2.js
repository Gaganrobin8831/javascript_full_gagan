// function dateToTime(year, month, day, hour, minute, tz) {

//  let now = new Date(year,month,day,hour,minute);

//   if (hour > 12 && minute > 1 && hour <= 24) {
//     console.log(`${now.getHours()}:${now.getMinutes()}`);
//   } else {
//     console.log(`${now.getHours()}:${now.getMinutes()}`);
//   }
// }
// dateToTime(2024, 7, 8, 14, 20);

// function timeToDate("09:12") {
//   console.log(`${day}/${month}/${year}`);
// }
// timeToDate(2024, 8, 8, 4, 20);

// function timeToDate(year, month, day, hour, minute, tz) {

//   let now = new Date(year, month, day, hour, minute)
//   console.log(`${now.getDate()}/${now.getMonth()}/${now.getFullYear()} `);
// }
// timeToDate(2024, 7, 8, 4, 20);

function dateToFullTime(year, month, day, hour, minute, tz) {
  if (hour > 24 || hour < 1) {
    console.log("Please Enter valid time");
  } else {
    let now = new Date(year, month, day, hour, minute);
    if (hour == 24) {
      if (minute >= 0 && minute <= 9) {
        console.log(`${hour}:0${now.getMinutes()} ${(tz = "AM")}`);
      } else {
        console.log(`${hour}:${now.getMinutes()} ${(tz = "AM")}`);
      }
    } else {
      if (hour >= 12 && hour < 24) {
        if (hour == 12) {
          hour = 12;
          if (minute >= 0 && minute <= 9) {
            console.log(`${hour}:0${now.getMinutes()} ${(tz = "AM")}`);
          } else {
            console.log(`${hour}:${now.getMinutes()} ${(tz = "AM")}`);
          }
        } else {
          hour -= 12;
          if (hour >= 1 && hour <= 9) {
            if (minute >= 0 && minute <= 9) {
              console.log(`0${hour}:0${now.getMinutes()} ${(tz = "PM")}`);
            } else {
              console.log(`0${hour}:${now.getMinutes()} ${(tz = "PM")}`);
            }
          } else {
            console.log(`${hour}:${now.getMinutes()} ${(tz = "PM")}`);
          }
        }
      } else {
        if (hour >= 1 && hour <= 9) {
          if (minute >= 0 && minute <= 9) {
            console.log(`0${hour}:0${now.getMinutes()} ${(tz = "AM")}`);
          } else {
            console.log(`0${hour}:${now.getMinutes()} ${(tz = "AM")}`);
          }
        } else {
          console.log(`${hour}:${now.getMinutes()} ${(tz = "AM")}`);
        }
      }
    }
  }
}
dateToFullTime(2024, 8, 8, 1, 880);
