
//function to return current month value
var m1 = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var m2 = month[m1.getMonth()];
//returns current day of the month
var d1 = new Date();
var d2 = d1.getDate();
//returns current year
var y1 = new Date();
var y2 = y1.getYear();
var y3 = y2 + 1900;
//prints month, day and year values by replacing id tags in html file
document.getElementById("month").innerHTML = m2;
document.getElementById("day").innerHTML = d2+", ";
document.getElementById("year").innerHTML = y3;
