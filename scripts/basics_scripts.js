"use strict";

// Variable Declaration Example.

document.querySelector("#basic_btn_1").addEventListener("click", varDecEx);

function varDecEx() {
  let c = 50;
  let d = 60;
  alert( c + d );
};
// -----------------------------------------------------------------------------

// forEach Example.

document.querySelector("#basic_btn_2").addEventListener("click", forEachExample);

function forEachExample() {
  let c = 50;
  let d = 60;
  [c, d].forEach(alert);
};
// -----------------------------------------------------------------------------
