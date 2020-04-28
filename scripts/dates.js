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

// Dates Example 13: setMonth()

document.querySelector("#date_btn_16").addEventListener("click", dateMethodEx16);

function dateMethodEx16() {
  let date = new Date();
  date.setMonth(0);
  alert(date);
};

document.querySelector("#date_btn_17").addEventListener("click", dateMethodEx17);

function dateMethodEx17() {
  let date = new Date();
  date.setMonth(11);
  alert(date);
};

document.querySelector("#date_btn_18").addEventListener("click", dateMethodEx18);

function dateMethodEx18() {
  let date = new Date();
  date.setMonth(-1);
  alert(date);
};

document.querySelector("#date_btn_19").addEventListener("click", dateMethodEx19);

function dateMethodEx19() {
  let date = new Date();
  date.setMonth(-12);
  alert(date);
};
// -----------------------------------------------------------------------------

// Dates Example 14: setDate()

document.querySelector("#date_btn_20").addEventListener("click", dateMethodEx20);

function dateMethodEx20() {
  let date = new Date();
  date.setDate(1);
  alert(date);
};

document.querySelector("#date_btn_21").addEventListener("click", dateMethodEx21);

function dateMethodEx21() {
  let date = new Date();
  date.setDate(31);
  alert(date + " - Months with less than 31 days, will move the spare days into the following month!");
};

document.querySelector("#date_btn_22").addEventListener("click", dateMethodEx22);

function dateMethodEx22() {
  let date = new Date();
  date.setDate(0);
  alert(date);
};

document.querySelector("#date_btn_23").addEventListener("click", dateMethodEx23);

function dateMethodEx23() {
  let date = new Date();
  date.setDate(-1);
  alert(date);
};

document.querySelector("#date_btn_24").addEventListener("click", dateMethodEx24);

function dateMethodEx24() {
  let date = new Date();
  date.setDate(date.getDate() + 40);
  alert(date);
};
// -----------------------------------------------------------------------------

// Dates Example 15: setHours()

document.querySelector("#date_btn_25").addEventListener("click", dateMethodEx25);

function dateMethodEx25() {
  let date = new Date();
  date.setHours(0);
  alert(date);
};

document.querySelector("#date_btn_26").addEventListener("click", dateMethodEx26);

function dateMethodEx26() {
  let date = new Date();
  date.setHours(23);
  alert(date);
};

document.querySelector("#date_btn_27").addEventListener("click", dateMethodEx27);

function dateMethodEx27() {
  let date = new Date();
  date.setHours(14);
  alert(date);
};
// -----------------------------------------------------------------------------

// Dates Example 16: setMinutes()

document.querySelector("#date_btn_28").addEventListener("click", dateMethodEx28);

function dateMethodEx28() {
  let date = new Date();
  date.setMinutes(0);
  alert(date);
};

document.querySelector("#date_btn_29").addEventListener("click", dateMethodEx29);

function dateMethodEx29() {
  let date = new Date();
  date.setMinutes(59);
  alert(date);
};

document.querySelector("#date_btn_30").addEventListener("click", dateMethodEx30);

function dateMethodEx30() {
  let date = new Date();
  date.setMinutes(30);
  alert(date);
};
// -----------------------------------------------------------------------------

// Dates Example 17: setSeconds()

document.querySelector("#date_btn_31").addEventListener("click", dateMethodEx31);

function dateMethodEx31() {
  let date = new Date();
  date.setSeconds(0);
  alert(date);
};

document.querySelector("#date_btn_32").addEventListener("click", dateMethodEx32);

function dateMethodEx32() {
  let date = new Date();
  date.setSeconds(59);
  alert(date);
};

document.querySelector("#date_btn_33").addEventListener("click", dateMethodEx33);

function dateMethodEx33() {
  let date = new Date();
  date.setSeconds(30);
  alert(date);
};
// -----------------------------------------------------------------------------

// Dates Example 17: setMilliseconds()

document.querySelector("#date_btn_34").addEventListener("click", dateMethodEx34);

function dateMethodEx34() {
  let date = new Date();
  date.setMilliseconds(0);
  alert(date + " - Milliseconds are not displayed!");
};

document.querySelector("#date_btn_35").addEventListener("click", dateMethodEx35);

function dateMethodEx35() {
  let date = new Date();
  date.setMilliseconds(999);
  alert(date + " - Milliseconds are not displayed!");
};

document.querySelector("#date_btn_36").addEventListener("click", dateMethodEx36);

function dateMethodEx36() {
  let date = new Date();
  date.setMilliseconds(500);
  alert(date + " - Milliseconds are not displayed!");
};
// -----------------------------------------------------------------------------

// Dates Example 18: setTime()

document.querySelector("#date_btn_37").addEventListener("click", dateMethodEx37);

function dateMethodEx37() {
  let date = new Date();
  let milliSecDay = 24 * 60 * 60 * 1000;
  date.setTime(milliSecDay);
  alert(date + " - 1 day has been added to the 1st of January, 1970!");
};
document.querySelector("#date_btn_38").addEventListener("click", dateMethodEx38);

function dateMethodEx38() {
  let date = new Date();
  let milliSecDay = 24 * 60 * 60 * 1000;
  date.setTime(-milliSecDay);
  alert(date + " - 1 day has been subtracted from the 1st of January, 1970!");
};

document.querySelector("#date_btn_39").addEventListener("click", dateMethodEx39);

function dateMethodEx39() {
  let date = new Date();
  let milliSecDay = 24 * 60 * 60 * 1000;
  date.setTime(milliSecDay * 3);
  alert(date + " - 3 days have been added to the 1st of January, 1970!");
};

document.querySelector("#date_btn_40").addEventListener("click", dateMethodEx40);

function dateMethodEx40() {
  let date = new Date();
  let milliSecDay = 24 * 60 * 60 * 1000;
  date.setTime(date.getTime() + milliSecDay);
  alert(date + " - 1 day has been added to the current day!");
};

// -----------------------------------------------------------------------------
