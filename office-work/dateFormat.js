function ProperDate(year, month, day, hour, minute) {
  let time = new Date(year, month, day, hour, minute);
  let newdate = Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "numeric",
    hour12: false,
    hourCycle: "h24",
  }).format(time);

  console.log(newdate);
}
ProperDate(2024, 8, 8, 14, 20);


function HourToDate(year, month, day, hour, minute) {
    let time = new Date(year, month, day, hour, minute);
    console.log({time});
    
  let newdate = Intl.DateTimeFormat("en-IN", {
    hour12: true,
    hourCycle: "h12",
    day: "numeric",
    year:"numeric",
    month:"numeric"
  }).format(time);

  console.log(newdate);
}
HourToDate(2024, 8, 8, 4, 20);


function dateToHours(year, month, day, hour, minute) {
    let time = new Date(year, month, day, hour, minute);
    let newdate = Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "numeric",
      hour12: true,
      hourCycle: "h12",
    }).format(time);
  
    console.log(newdate);
  }
  dateToHours(2024, 8, 8, 4, 20);
  