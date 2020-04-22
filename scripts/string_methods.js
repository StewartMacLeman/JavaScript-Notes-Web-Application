"use strict";

// String Method Example 1.

document.querySelector("#string_btn_1").addEventListener("click", stringMethodEx1);

function stringMethodEx1() {
  let name = "Bobby";
  alert(name);
  alert(name[1]);
  alert(name[name.length-1]);
};
// -----------------------------------------------------------------------------

// String Method Example 2.

document.querySelector("#string_btn_2").addEventListener("click", stringMethodEx2);

function stringMethodEx2() {
  let name = "Bobby";
  alert(name.length);
};
// -----------------------------------------------------------------------------

// String Method Example 3.

document.querySelector("#string_btn_3").addEventListener("click", stringMethodEx3);

function stringMethodEx3() {
  let name = "Bobby";
  alert(name.indexOf('y'));
};
// -----------------------------------------------------------------------------

// String Method Example 4.

document.querySelector("#string_btn_4").addEventListener("click", stringMethodEx4);

function stringMethodEx4() {
  let name = "Bobby";
  alert("If the substring is not present, then the value returned is: " + name.indexOf('z'));
};
// -----------------------------------------------------------------------------

// String Method Example 5.

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

// String Method Example 6.

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

// String Method Example 7.

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

// String Method Example 8.

document.querySelector("#string_btn_8").addEventListener("click", stringMethodEx8);

function stringMethodEx8() {
  let name = "Bobby";
  alert(name.toLowerCase());
};
// -----------------------------------------------------------------------------

// String Method Example 9.

document.querySelector("#string_btn_9").addEventListener("click", stringMethodEx9);

function stringMethodEx9() {
  let name = "Bobby";
  alert(name.toUpperCase());
};
// -----------------------------------------------------------------------------

// String Method Example 10.

document.querySelector("#string_btn_10").addEventListener("click", stringMethodEx10);

function stringMethodEx10() {
  let name = "bobby";
  alert(name[0].toUpperCase());
  alert(name[0].toUpperCase() + name.slice(1, name.length-1));
  alert(name[0].toUpperCase() + name.slice(1, name.length));
};
// -----------------------------------------------------------------------------

// String Method Example 11.

document.querySelector("#string_btn_11").addEventListener("click", stringMethodEx11);

function stringMethodEx11() {
  let name = "bobby";

  alert(name.replace( 'obb' , 'udd'));
  alert(name + " - This has not changed the original!");
};
// -----------------------------------------------------------------------------

// String Method Example 12.

document.querySelector("#string_btn_12").addEventListener("click", stringMethodEx12);

function stringMethodEx12() {
  let name = "bobby";

  name = name.replace( 'obb' , 'udd');
  alert(name);
  alert(name + " - The original has been changed!");
};
// -----------------------------------------------------------------------------
