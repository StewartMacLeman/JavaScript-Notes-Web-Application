"use strict";

// Events Example 1.

document.querySelector("#event_btn_1").addEventListener("click", eventMethodEx1);

function eventMethodEx1() {
  let name = "Bobby";
  alert(name);
  alert(name[1]);
  alert(name[name.length-1]);
};
// -----------------------------------------------------------------------------
