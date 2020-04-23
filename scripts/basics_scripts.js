"use strict";

// Variable Declaration Example.

document.querySelector("#basic_btn_1").addEventListener("click", varDecEx);

function varDecEx() {
  let c = 50;
  let d = 60;
  alert("alert( c + d ); " + (c + d) );
};
// -----------------------------------------------------------------------------

// forEach Example.

document.querySelector("#basic_btn_2").addEventListener("click", forEachExample);

function forEachExample() {
  let c = 50;
  let d = 60;
  [c, d, "bananas"].forEach(alert);
};
// -----------------------------------------------------------------------------

// Another Variable Declaration Example.

document.querySelector("#basic_btn_3").addEventListener("click", anotherVarDecEx);

function anotherVarDecEx() {
  let name = "Stewart";
  let language = "JavaScript";
  let emotion = "Joy!";
  alert("When name = \"Stewart\": " + name + " is studying " + language + " , which brings him " + emotion);
  name = "John";
  alert("When name = \"John\": " + name + " is studying " + language + " , which brings him " + emotion);
};
// -----------------------------------------------------------------------------

// Another Variable Declaration Example 2.

document.querySelector("#basic_btn_4").addEventListener("click", anotherVarDecEx2);

function anotherVarDecEx2() {
  let x, y, z;
  x = y = z = 30 * 30;
  alert("alert(x); " + x);
  alert("alert(y); " + y);
  alert("alert(z); " + z);
};
// -----------------------------------------------------------------------------

// Another Variable Declaration Example 3.

document.querySelector("#basic_btn_5").addEventListener("click", anotherVarDecEx3);

function anotherVarDecEx3() {
  let p = 1;
  let q = 2;
  let r = 3 - (p = q + 1);
  alert("alert(p); " + p);
  alert("alert(r); " + r);
};
// -----------------------------------------------------------------------------

// typeof Operator Example.

document.querySelector("#basic_btn_6").addEventListener("click", typeOfExample);

function typeOfExample() {
  let age = 50;
  let name = "Jimmy";
  alert("First alert: " + name + ` is only ${age - 9} years old`);

  alert("Second alert: " + typeof age);
  age = String(age);
  alert("Third alert: " + typeof age);
};
// -----------------------------------------------------------------------------

// Examples of Number Operators.

document.querySelector("#basic_btn_7").addEventListener("click", numberOpEx1);
function numberOpEx1() {
  alert( 8 % 3 );
};

document.querySelector("#basic_btn_8").addEventListener("click", numberOpEx2);
function numberOpEx2() {
  alert( 3 ** 3 );
};

document.querySelector("#basic_btn_9").addEventListener("click", numberOpEx3);
function numberOpEx3() {
  alert( 2 ** (1/3));
};

document.querySelector("#basic_btn_10").addEventListener("click", numberOpEx4);
function numberOpEx4() {
  let number_1 = 1;
  let number_2 = ++number_1;
  alert(number_2);
};

document.querySelector("#basic_btn_11").addEventListener("click", numberOpEx5);
function numberOpEx5() {
  let number_3 = 1;
  let number_4 = number_3++;
  alert(number_4);
  alert(number_3);
  alert(number_4);
};

document.querySelector("#basic_btn_12").addEventListener("click", numberOpEx6);
function numberOpEx6() {
  let zoom = 3;
  zoom += 3;
  alert(`zoom is equal to ${zoom}`);
  zoom *= 3;
  alert(`zoom is equal to ${zoom}`);
};

document.querySelector("#basic_btn_13").addEventListener("click", numberOpEx7);
function numberOpEx7() {
  let boom = ( 1 + 3 , 3 * 3 , 4**2);
  alert(`boom is equal to ${boom}`);
};
// -----------------------------------------------------------------------------

// Examples of Comparison Operators.

document.querySelector("#basic_btn_14").addEventListener("click", comparisonOpEx1);
function comparisonOpEx1() {
  alert(2 >= "2");
};

document.querySelector("#basic_btn_15").addEventListener("click", comparisonOpEx2);
function comparisonOpEx2() {
  alert(2 == "2");
};

document.querySelector("#basic_btn_16").addEventListener("click", comparisonOpEx3);
function comparisonOpEx3() {
  alert(2 === "2");
};

document.querySelector("#basic_btn_17").addEventListener("click", comparisonOpEx4);
function comparisonOpEx4() {
  alert(2 != 3);
};

document.querySelector("#basic_btn_18").addEventListener("click", comparisonOpEx5);
function comparisonOpEx5() {
  alert(2 != 2);
};

document.querySelector("#basic_btn_19").addEventListener("click", comparisonOpEx6);
function comparisonOpEx6() {
  alert(2 != "2");
};

document.querySelector("#basic_btn_20").addEventListener("click", comparisonOpEx7);
function comparisonOpEx7() {
  alert(2 !== "2");
};
// -----------------------------------------------------------------------------

// Examples of Browser Interactions.

document.querySelector("#basic_btn_21").addEventListener("click", browserIntEx1);
function browserIntEx1() {
  let message = "Hi there, hope you're well!";
  alert(message);
};

document.querySelector("#basic_btn_22").addEventListener("click", browserIntEx2);
function browserIntEx2() {
  let favouriteColour = prompt("What is your favourite colour?", "orange");
  alert(`Your favourite colour is ${favouriteColour} `);
};

document.querySelector("#basic_btn_23").addEventListener("click", browserIntEx3);
function browserIntEx3() {
  confirm("Do you wish to continue?");
};

// -----------------------------------------------------------------------------

// Examples of if else statements.

document.querySelector("#basic_btn_24").addEventListener("click", ifElseEx1);
function ifElseEx1() {
  let codeExperience = prompt("How many years have you been coding for?", "Nevermind!");

  if (codeExperience >= 2) {
    alert(`${codeExperience} years, that's impressive!`);
  } else if ((codeExperience > 0) && (codeExperience < 2)){
    alert(`I see, good stuff!`);
  } else if (codeExperience == "Nevermind!"){
    alert(`Please excuse me!`);
  } else if ((codeExperience == 0) || (codeExperience == null)){
    alert(`Thanks anyway!`);
  } else {
    alert(`Sorry, I don't understand! Please use the number keys.`);
    ifElseEx1();
  }
};

document.querySelector("#basic_btn_25").addEventListener("click", ifElseEx2);
function ifElseEx2() {
  let age = prompt("How old are you?");

  if ( age >= 18 ){
    alert("Please come in and enjoy your night!");
  } else {
    alert("Sorry, not tonight!");
  };
};

document.querySelector("#basic_btn_26").addEventListener("click", ifElseEx3);
function ifElseEx3() {
  let age = prompt("How old are you?");
  (age >=18) ? alert("Please come in!") : alert("Sorry, not tonight!");
};

document.querySelector("#basic_btn_27").addEventListener("click", ifElseEx4);
function ifElseEx4() {
  let nameOfJavaScript =
  prompt("What is the official name of JavaScript", "Don't know!");

  if ((nameOfJavaScript == "ECMAScript") || (nameOfJavaScript == "ecmascript")){
    alert("Right!");
  } else {
    alert("The answer is ECMAScript");
  }
};

document.querySelector("#basic_btn_28").addEventListener("click", ifElseEx5);
function ifElseEx5() {
  let message;
  let login = prompt("Are you an Employee or a Director", "Employee")

  if (login == null){
    login = 'cancel';
  }
  let lowerLogin = login.toLowerCase();

  if (lowerLogin == 'employee') {
    message = 'Hello there!';
  } else if (lowerLogin == 'director') {
    message = 'Greetings Boss!';
  } else if (lowerLogin == '') {
    message = 'No login, please try again.';
  } else if (lowerLogin == 'cancel'){
    message = 'You have cancelled!';
  } else {
    message = 'Not sure about that, please try again.';
  }
  alert(message);
};

document.querySelector("#basic_btn_29").addEventListener("click", ifElseEx6);
function ifElseEx6() {
  let message;
  let login = prompt("Are you an Employee or a Director", "Employee")

  if (login == null){
    login = 'cancel';
  }
  let lowerLogin = login.toLowerCase();

  lowerLogin == "employee" ? message = "Hello there!" :
  lowerLogin == "director" ? message = "Greetings Boss!" :
  lowerLogin == "" ? message = "No login!" :
  lowerLogin == "cancel" ? message = "Cancelled!": message = "Please re-enter";
  alert(message);
};
// -----------------------------------------------------------------------------

// Examples of while, do while and for statements.

document.querySelector("#basic_btn_30").addEventListener("click", whileEx1);
function whileEx1() {
  let books = 25;

  while (books <= 29){
    alert( "I have room for more books!");
    ++books;
  }
  alert("I've no more space for books!");
};

document.querySelector("#basic_btn_31").addEventListener("click", doWhileEx1);
function doWhileEx1() {
  let books = 25;
  do {
    ++books;
    alert("I still have space for more books");
  } while ( books < 29);
  alert("Now I don't!");
};

document.querySelector("#basic_btn_32").addEventListener("click", forEx1);
function forEx1() {
  for (let albums = 40; albums < 43; ++albums){
    alert("Please buy me more albums!")
  }
  alert("That's enough, many thanks!")
};

document.querySelector("#basic_btn_33").addEventListener("click", forEx2);
function forEx2() {
  for (let num = 0; num <10; ++num){
    if (num%2 != 0) continue;
    alert(num);
  }
};
// -----------------------------------------------------------------------------

// Examples switch statements.

document.querySelector("#basic_btn_34").addEventListener("click", switchEx1);
function switchEx1() {
  let switchNumber =
  +prompt("Please type in one of the following: 10, 20, 30 or 40.", "");

  switch (switchNumber) {
    case 10 : alert("You typed in the number 10!");
    break;
    case 20 : alert("You typed in the number 20!");
    break;
    case 30 : alert("You typed in the number 30!");
    break;
    case 40 : alert("You typed in the number 40!");
    break;
    default: alert("You have not typed in any of the options.")
  }
};

document.querySelector("#basic_btn_35").addEventListener("click", switchEx2);
function switchEx2() {
  let switchGroup =
  prompt("Choose the correct colour of bananas: red, blue, purple or yellow", "");

  switch (switchGroup){
    case "yellow":
    alert("Bingo, you're correct!");
    break;
    case null:
    alert("You've cancelled!")
    break;

    case "red":
    case "blue":
    case "purple":
    alert("Nope!");
    break;

    default : alert("Try that one again!")
  }
};
// -----------------------------------------------------------------------------
