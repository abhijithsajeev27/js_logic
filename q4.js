const { Console } = require('console');
const fs= require('fs');
var read=require('readline-sync')

date=read.question("Enter the date...");
month=read.question("Enter the Month...");
year=read.question("Enter the Year...");

let datet=14;
let montht =11;
let yeart=2022;

let date2=datet-date;
let month2=montht-month;
let year2=yeart-year;
// console.log(date2)
// console.log(month2)
console.log("Age in years....",year2)

let month_age= (12*year2)
month_age+=month2
console.log("Age in month...",month_age)
week_age=month_age*4;
console.log("Age in week.....", week_age)
day_age=week_age*7;
console.log("Age in days.....", day_age)
hour_age=day_age*24;
console.log("Age in Hours.....", hour_age)