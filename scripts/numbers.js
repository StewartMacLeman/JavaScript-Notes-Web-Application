"use strict";

// Numbers Example 1: Exponents

document.querySelector("#number_btn_1").addEventListener("click", numberMethodEx1);

function numberMethodEx1() {
  let exponentOne = 1e3;
  alert(exponentOne);
};

document.querySelector("#number_btn_2").addEventListener("click", numberMethodEx2);

function numberMethodEx2() {
  let exponentTwo = 1e6;
  alert(exponentTwo);
};

document.querySelector("#number_btn_3").addEventListener("click", numberMethodEx3);

function numberMethodEx3() {
  let exponentThree = 1e-3;
  alert(exponentThree);
};

document.querySelector("#number_btn_4").addEventListener("click", numberMethodEx4);

function numberMethodEx4() {
  let exponentFour = 1e-6;
  alert(exponentFour);
};
// -----------------------------------------------------------------------------

// Numbers Example 2: parseInt()

document.querySelector("#number_btn_5").addEventListener("click", numberMethodEx5);

function numberMethodEx5() {
  let stringNumber = "1000";
  alert(typeof stringNumber);

  let aNum = parseInt(stringNumber);
  alert("The value of aNum is " + aNum + " , which is a: " + typeof aNum);
};
// -----------------------------------------------------------------------------

// Numbers Example 3: parseFloat()

document.querySelector("#number_btn_6").addEventListener("click", numberMethodEx6);

function numberMethodEx6() {
  let stringNumber = "20.20";
  alert(typeof stringNumber);

  let aNum = parseFloat(stringNumber);
  alert("The value of aNum is " + aNum + " , which is a: " + typeof aNum);
};
// -----------------------------------------------------------------------------

// Numbers Example 4: Number()

document.querySelector("#number_btn_7").addEventListener("click", numberMethodEx7);

function numberMethodEx7() {
  let stringNumber = "12345";
  alert(typeof stringNumber);

  let aNum = Number(stringNumber);
  alert("The value of aNum is " + aNum + " , which is a: " + typeof aNum);
};

document.querySelector("#number_btn_8").addEventListener("click", numberMethodEx8);

function numberMethodEx8() {

  let aNum = Number("56789");
  alert("The value of aNum is " + aNum + " , which is a: " + typeof aNum);
};

document.querySelector("#number_btn_9").addEventListener("click", numberMethodEx9);

function numberMethodEx9() {

  let aNum = Number(true);
  alert("The value of aNum is " + aNum + " , which is a: " + typeof aNum);
};

document.querySelector("#number_btn_10").addEventListener("click", numberMethodEx10);

function numberMethodEx10() {

  let aNum = Number(false);
  alert("The value of aNum is " + aNum + " , which is a: " + typeof aNum);
};

document.querySelector("#number_btn_11").addEventListener("click", numberMethodEx11);

function numberMethodEx11() {

  let aNum = Number(null);
  alert("The value of aNum is " + aNum + " , which is a: " + typeof aNum);
};

document.querySelector("#number_btn_12").addEventListener("click", numberMethodEx12);

function numberMethodEx12() {

  let aNum = Number(" ");
  alert("The value of aNum is " + aNum + " , which is a: " + typeof aNum);
};

document.querySelector("#number_btn_13").addEventListener("click", numberMethodEx13);

function numberMethodEx13() {

  let aNum = Number("number");
  alert("The value of aNum is " + aNum + " , which is a: " + typeof aNum);
};

document.querySelector("#number_btn_14").addEventListener("click", numberMethodEx14);

function numberMethodEx14() {

  let aDate = Number(new Date());
  alert("The value of aDate is " + aDate + " , which is a: " + typeof aDate);
};
// -----------------------------------------------------------------------------

// Numbers Example 5: The + Operator

document.querySelector("#number_btn_15").addEventListener("click", numberMethodEx15);

function numberMethodEx15() {
  let stringNumber = "12345";
  alert(typeof stringNumber);

  let aNum = +stringNumber;
  alert("The value of aNum is " + aNum + " , which is a: " + typeof aNum);
};

document.querySelector("#number_btn_16").addEventListener("click", numberMethodEx16);

function numberMethodEx16() {
  let favNumber_1 = prompt("What is your favourite number?");
  alert("favNumber_1 is a: " + typeof favNumber_1);

  let favNumber_2 = +prompt("What is your favourite number?");
  alert("The value of favNumber_2 is " + favNumber_2 + " , which is a: " + typeof favNumber_2);
};
// -----------------------------------------------------------------------------

// Numbers Example 6: toString()

document.querySelector("#number_btn_17").addEventListener("click", numberMethodEx17);

function numberMethodEx17() {
  let myNumber = 12345;
  alert(typeof myNumber);

  let  myString = myNumber.toString();
  alert("The value of myString is " + myString +
  " , which is a: " + typeof myString);
};
// -----------------------------------------------------------------------------

// Numbers Example 7: Math.max()

document.querySelector("#number_btn_18").addEventListener("click", numberMethodEx18);

function numberMethodEx18() {
  let maxNumber = Math.max(1, 20, 40, 100);

  alert(maxNumber);
};

document.querySelector("#number_btn_19").addEventListener("click", numberMethodEx19);

function numberMethodEx19() {
  let bunchOfNumbers = [1, 20, 40, 100];

  let maxNumber = Math.max(bunchOfNumbers);

  alert(maxNumber);
};

document.querySelector("#number_btn_20").addEventListener("click", numberMethodEx20);

function numberMethodEx20() {
  let bunchOfNumbers = [1, 20, 40, 100];

  let maxNumber = Math.max(...bunchOfNumbers);

  alert(maxNumber);
};

document.querySelector("#number_btn_21").addEventListener("click", numberMethodEx21);

function numberMethodEx21() {
  let bunchOfNumbers = [1, 20, 40, 100];

  let maxNumber = bunchOfNumbers.reduce(function(a, b){
    return Math.max(a, b);
  })

  alert(maxNumber);
};
// -----------------------------------------------------------------------------

// Numbers Example 8: Math.min()

document.querySelector("#number_btn_22").addEventListener("click", numberMethodEx22);

function numberMethodEx22() {
  let minNumber = Math.min(1, 20, 40, 100);

  alert(minNumber);
};

document.querySelector("#number_btn_23").addEventListener("click", numberMethodEx23);

function numberMethodEx23() {
  let bunchOfNumbers = [1, 20, 40, 100];

  let minNumber = Math.min(bunchOfNumbers);

  alert(minNumber);
};

document.querySelector("#number_btn_24").addEventListener("click", numberMethodEx24);

function numberMethodEx24() {
  let bunchOfNumbers = [1, 20, 40, 100];

  let minNumber = Math.min(...bunchOfNumbers);

  alert(minNumber);
};


document.querySelector("#number_btn_25").addEventListener("click", numberMethodEx25);

function numberMethodEx25() {
  let bunchOfNumbers = [1, 20, 40, 100];

  let minNumber = bunchOfNumbers.reduce(function(a, b){
    return Math.min(a, b);
  })

  alert(minNumber);
};
// -----------------------------------------------------------------------------

// Numbers Example 9: Math.pow()

document.querySelector("#number_btn_26").addEventListener("click", numberMethodEx26);

function numberMethodEx26() {
  let base = 2;
  let exponent = 3;

  let result = Math.pow(2,3);

  alert(result);
};
// -----------------------------------------------------------------------------

// Numbers Example 10: Math.sqrt()

document.querySelector("#number_btn_27").addEventListener("click", numberMethodEx27);

function numberMethodEx27() {
  let num = 9;
  let result = Math.sqrt(num);

  alert(result);
};
// -----------------------------------------------------------------------------

// Numbers Example 11: Math.round()

document.querySelector("#number_btn_28").addEventListener("click", numberMethodEx28);

function numberMethodEx28() {
  let numDown = 9.3991;
  let numUp = 9.5013;

  let resultDown = Math.round(numDown);
  let resultUp = Math.round(numUp);

  alert("Alert 1: " + resultDown);
  alert("Alert 2: " + resultUp);
};
// -----------------------------------------------------------------------------

// Numbers Example 12: Math.ceil()

document.querySelector("#number_btn_29").addEventListener("click", numberMethodEx29);

function numberMethodEx29() {
  let num_1 = 9.3991;
  let num_2 = 9.5013;

  let result_1 = Math.ceil(num_1);
  let result_2 = Math.ceil(num_2);

  alert("Alert 1: " + result_1);
  alert("Alert 2: " + result_2);
};
// -----------------------------------------------------------------------------

// Numbers Example 13: Math.floor()

document.querySelector("#number_btn_30").addEventListener("click", numberMethodEx30);

function numberMethodEx30() {
  let num_1 = 9.3991;
  let num_2 = 9.5013;

  let result_1 = Math.floor(num_1);
  let result_2 = Math.floor(num_2);

  alert("Alert 1: " + result_1);
  alert("Alert 2: " + result_2);
};
// -----------------------------------------------------------------------------

// Numbers Example 14: Math.trunc()

document.querySelector("#number_btn_31").addEventListener("click", numberMethodEx31);

function numberMethodEx31() {
  let num_1 = 9.3991;
  let num_2 = 9.5013;

  let result_1 = Math.trunc(num_1);
  let result_2 = Math.trunc(num_2);

  alert("Alert 1: " + result_1);
  alert("Alert 2: " + result_2);
};
// -----------------------------------------------------------------------------

// Numbers Example 15: Math.random()

document.querySelector("#number_btn_32").addEventListener("click", numberMethodEx32);

function numberMethodEx32() {
  let num = Math.random();
  alert("This will produce a random number between 0 (inclusive) and 1 (exclusive): " + num );
};

document.querySelector("#number_btn_33").addEventListener("click", numberMethodEx33);

function numberMethodEx33() {
  let num = Math.floor((Math.random() * 10) + 1);
  alert("This will produce a random number between 1 and 10: " + num );
};
// -----------------------------------------------------------------------------

document.querySelector("#number_btn_34").addEventListener("click", numberMethodEx34);

function numberMethodEx34() {
  let num = Math.floor((Math.random() * 100) + 1);
  alert("This will produce a random number between 1 and 100: " + num );
};
// -----------------------------------------------------------------------------
