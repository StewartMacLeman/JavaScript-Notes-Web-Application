"use strict";

// Strings Example 1.

document.querySelector("#string_btn_1").addEventListener("click", stringMethodEx1);

function stringMethodEx1() {
  let name = "Bobby";
  alert(name);
  alert(name[1]);
  alert(name[name.length-1]);
};
// -----------------------------------------------------------------------------

// Strings Example 2: length

document.querySelector("#string_btn_2").addEventListener("click", stringMethodEx2);

function stringMethodEx2() {
  let name = "Bobby";
  alert(name.length);
};
// -----------------------------------------------------------------------------

// Strings Example 3: indexOf()

document.querySelector("#string_btn_3").addEventListener("click", stringMethodEx3);

function stringMethodEx3() {
  let name = "Bobby";
  alert(name.indexOf('y'));
};
// -----------------------------------------------------------------------------

// Strings Example 4: indexOf()

document.querySelector("#string_btn_4").addEventListener("click", stringMethodEx4);

function stringMethodEx4() {
  let name = "Bobby";
  alert("If the substring is not present, then the value returned is: " + name.indexOf('z'));
};
// -----------------------------------------------------------------------------

// Strings Example 5: slice()

document.querySelector("#string_btn_5").addEventListener("click", stringMethodEx5);

function stringMethodEx5() {
  let name = "Bobby";
  alert("alert 1: " + name.slice(0,1));
  alert("alert 2: " + name.slice(0,2));
  alert("alert 3: " + name.slice(0,3));
  alert("alert 4: " + name.slice(0,4));
  alert("alert 5: " + name.slice(0,5));
};
// -----------------------------------------------------------------------------

// Strings Example 6: slice()

document.querySelector("#string_btn_6").addEventListener("click", stringMethodEx6);

function stringMethodEx6() {
  let name = "Bobby";
  alert("alert 1: " + name.slice(0));
  alert("alert 2: " + name.slice(1));
  alert("alert 3: " + name.slice(2));
  alert("alert 4: " + name.slice(3));
  alert("alert 5: " + name.slice(4));
};
// -----------------------------------------------------------------------------

// Strings Example 7: slice()

document.querySelector("#string_btn_7").addEventListener("click", stringMethodEx7);

function stringMethodEx7() {
  let name = "Billy Bob!";
  alert("alert 1: " + name.slice(1,2));
  alert("alert 2: " + name.slice(1,3));
  alert("alert 3: " + name.slice(2,7));
  alert("alert 4: " + name.slice(-1));
  alert("alert 5: " + name.slice(3,-1));
};
// -----------------------------------------------------------------------------

// Strings Example 8: toLowerCase()

document.querySelector("#string_btn_8").addEventListener("click", stringMethodEx8);

function stringMethodEx8() {
  let name = "Bobby";
  alert(name.toLowerCase());
};
// -----------------------------------------------------------------------------

// Strings Example 9: toUpperCase()

document.querySelector("#string_btn_9").addEventListener("click", stringMethodEx9);

function stringMethodEx9() {
  let name = "Bobby";
  alert(name.toUpperCase());
};
// -----------------------------------------------------------------------------

// Strings Example 10: slice() and toUpperCase()

document.querySelector("#string_btn_10").addEventListener("click", stringMethodEx10);

function stringMethodEx10() {
  let name = "bobby";
  alert(name[0].toUpperCase());
  alert(name[0].toUpperCase() + name.slice(1, name.length-1));
  alert(name[0].toUpperCase() + name.slice(1, name.length));
};
// -----------------------------------------------------------------------------

// Strings Example 11: replace()

document.querySelector("#string_btn_11").addEventListener("click", stringMethodEx11);

function stringMethodEx11() {
  let name = "bobby";

  alert(name.replace( 'obb' , 'udd'));
  alert(name + " - This has not changed the original!");
};
// -----------------------------------------------------------------------------

// Strings Example 12: replace()

document.querySelector("#string_btn_12").addEventListener("click", stringMethodEx12);

function stringMethodEx12() {
  let name = "bobby";

  name = name.replace( 'obb' , 'udd');
  alert(name);
  alert(name + " - The original has been changed!");
};
// -----------------------------------------------------------------------------

// Strings Example 13: concat()

document.querySelector("#string_btn_13").addEventListener("click", stringMethodEx13);

function stringMethodEx13() {
  let firstName = "Bob";
  let secondName = "Jones";
  let fullName = firstName.concat(secondName);
  alert("Alert 1: " + fullName);

  let space = " ";
  fullName = firstName.concat(space).concat(secondName);
  alert("Alert 2: " + fullName);
};
// -----------------------------------------------------------------------------

// Strings Example 14: repeat()

document.querySelector("#string_btn_14").addEventListener("click", stringMethodEx14);

function stringMethodEx14() {
  let greeting = "Hello there! ";
  alert(greeting.repeat(3));

  let manyGreetings =
  parseInt(prompt("Have many greetings would you like to make?", "1"));

  alert(greeting.repeat(manyGreetings));
};
// -----------------------------------------------------------------------------

// Strings Example 15: match()

document.querySelector("#string_btn_15").addEventListener("click", stringMethodEx15);

function stringMethodEx15() {
  let sentence = "There are lots and lots and lots of them!";

  let containsLots1 = sentence.match(/lots/);
  alert("Alert 1: " + Array.isArray(containsLots1));
  alert("Alert 2: " + containsLots1);

  let containsLots2 = sentence.match(/lots/g);
  alert("Alert 3: " + containsLots2);
};
// -----------------------------------------------------------------------------
