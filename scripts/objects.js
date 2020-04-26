"use strict";

// Object Example 1.

document.querySelector("#object_btn_1").addEventListener("click", objectMethodEx1);

function objectMethodEx1() {
  let name = "Bobby";
  alert(name);
  alert(name[1]);
  alert(name[name.length-1]);
};
// -----------------------------------------------------------------------------
