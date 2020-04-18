"use strict";

let pageTopButton = document.querySelector(".pageTop");
pageTopButton.addEventListener("click", toTheTop);

window.onscroll = function() {showButton()};

function showButton() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    pageTopButton.style.display = "block";
  } else {
    pageTopButton.style.display = "none";
  }
}

function toTheTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// --document.body.scrollTop is used for Safari browers.
// --document.documentElement.scrollTop is used for Chrome, Firefox, IE and Opera.
