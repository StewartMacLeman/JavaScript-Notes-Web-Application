"use strict";

// Dates Example 1: Get the Current Date

document.querySelector("#date_btn_1").addEventListener("click", dateMethodEx1);

function dateMethodEx1() {
  let date = new Date();
  alert(date);
};
// -----------------------------------------------------------------------------

// Dates Example 2: getFullYear()

document.querySelector("#date_btn_2").addEventListener("click", dateMethodEx2);

function dateMethodEx2() {
  let date = new Date();
  let year = date.getFullYear();
  alert(year);
};
// -----------------------------------------------------------------------------

// Dates Example 3: getMonth()

document.querySelector("#date_btn_3").addEventListener("click", dateMethodEx3);

function dateMethodEx3() {
  let date = new Date();
  let month = date.getMonth();
  alert(month);
};

document.querySelector("#date_btn_4").addEventListener("click", dateMethodEx4);

function dateMethodEx4() {
  let date = new Date();
  let month = date.getMonth();
  let monthsArray = ["January", "February", "March", "April",
   "May", "June", "July", "August", "September", "October",
    "November", "December"];

  alert(monthsArray[month]);
};
// -----------------------------------------------------------------------------

// Dates Example 4: getDate()

document.querySelector("#date_btn_5").addEventListener("click", dateMethodEx5);

function dateMethodEx5() {
  let date = new Date();
  let dayNumber = date.getDate();
  alert(dayNumber);
};
// -----------------------------------------------------------------------------

// Dates Example 5: getDay()

document.querySelector("#date_btn_6").addEventListener("click", dateMethodEx6);

function dateMethodEx6() {
  let date = new Date();
  let day = date.getDay();
  alert(day);
};

document.querySelector("#date_btn_7").addEventListener("click", dateMethodEx7);

function dateMethodEx7() {
  let date = new Date();
  let day = date.getDay();
  let daysOftheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday", "Sunday"];

  alert(daysOftheWeek[day]);
};
// -----------------------------------------------------------------------------

// Dates Example 6: getTime()

document.querySelector("#date_btn_8").addEventListener("click", dateMethodEx8);

function dateMethodEx8() {
  let date = new Date();
  let time = date.getTime();
  alert("This is the number of milliseconds since the 1st of January, 1970: "
   + time);
};
// -----------------------------------------------------------------------------

// Dates Example 7: Date.now()

document.querySelector("#date_btn_9").addEventListener("click", dateMethodEx9);

function dateMethodEx9() {
  let date = Date.now();
  alert("This is the number of milliseconds since the 1st of January, 1970: "
   + date);
};
// -----------------------------------------------------------------------------

// Dates Example 8: getHours()

document.querySelector("#date_btn_10").addEventListener("click", dateMethodEx10);

function dateMethodEx10() {
  let date = new Date();
  let hour = date.getHours();
  alert(hour);
};
// -----------------------------------------------------------------------------

// Dates Example 9: getMinutes()

document.querySelector("#date_btn_11").addEventListener("click", dateMethodEx11);

function dateMethodEx11() {
  let date = new Date();
  let minutes = date.getMinutes();
  alert(minutes);
};
// -----------------------------------------------------------------------------

// Dates Example 10: getSeconds()

document.querySelector("#date_btn_12").addEventListener("click", dateMethodEx12);

function dateMethodEx12() {
  let date = new Date();
  let seconds = date.getSeconds();
  alert(seconds);
};
// -----------------------------------------------------------------------------

// Dates Example 11: getMilliseconds()

document.querySelector("#date_btn_13").addEventListener("click", dateMethodEx13);

function dateMethodEx13() {
  let date = new Date();
  let milliSeconds = date.getMilliseconds();
  alert(milliSeconds);
};
// -----------------------------------------------------------------------------

// Dates Example 12: setFullYear()

document.querySelector("#date_btn_14").addEventListener("click", dateMethodEx14);

function dateMethodEx14() {
  let date = new Date();
  date.setFullYear(2019);
  alert(date);
};

document.querySelector("#date_btn_15").addEventListener("click", dateMethodEx15);

function dateMethodEx15() {
  let date = new Date();
  date.setFullYear(2019, 9, 19);
  alert(date);
};
// -----------------------------------------------------------------------------
