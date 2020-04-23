"use strict";

// Function Example 1.

document.querySelector("#function_btn_1").addEventListener("click", functionEx1);

function functionEx1() {
  function greeting(name, age){
    alert("Hello, my name is " + name + ". I'm " + age + " years old!");
  };
  greeting("Tommy", "30");
};
// -----------------------------------------------------------------------------

// Function Example 2.

document.querySelector("#function_btn_2").addEventListener("click", functionEx2);

function functionEx2() {
  function localVariable(){
    let name = "PJ";
    alert("My name is " + name + "!");
  };
  localVariable();
  alert(name);
};
// -----------------------------------------------------------------------------

// Function Example 3.

document.querySelector("#function_btn_3").addEventListener("click", functionEx3);

function functionEx3() {
  let outerName = "MJ";
  function outerNameTest(){
    let outerName = "MMJJ";
    alert("My name is " + outerName);
  };
  outerNameTest();
  alert(outerName);
};
// -----------------------------------------------------------------------------

// Function Example 4.

document.querySelector("#function_btn_4").addEventListener("click", functionEx4);

function functionEx4() {
  let parameterName = "JimBob";

  function parameterNameTest( parameterName, age = 100 ){
    alert("I'm " + parameterName + ", I'm " + age + "!");
  };

  parameterNameTest(parameterName, 20);
  parameterNameTest(parameterName);
  parameterNameTest("Billy Bob", 30);
};
// // -----------------------------------------------------------------------------
//
// Function Example 5.

document.querySelector("#function_btn_5").addEventListener("click", functionEx5);

function functionEx5() {
  let dow, ray, mee;

  function calcDow(ray = 10, mee = 10){
    dow = ray + mee;
    return dow;
  };
  alert(dow);
  calcDow(20,30);
  alert(dow);
  calcDow();
  alert(dow);
};
// // -----------------------------------------------------------------------------
//
// Function Example 6.

document.querySelector("#function_btn_6").addEventListener("click", functionEx6);

function functionEx6() {

  function compareValue(a , b){
    if (a > b){
      alert("a is greater than b!");
    }
    else if (a < b){
      alert("b is greater than a");
    }
    else if (a == b){
      alert("The values are the same!");
    }
  };
  compareValue(10, 5);
  compareValue(5, 10);
  compareValue(5, 5);
};
// // -----------------------------------------------------------------------------
//
// // Function Example 7.
//
document.querySelector("#function_btn_7").addEventListener("click", functionEx7);

function functionEx7() {

  function calcThePower(baseNumber, exponentNumber){
    baseNumber = +prompt("Please add your base number", "");
    exponentNumber = +prompt("Please add your exponent", "");
    let value = baseNumber ** exponentNumber;
    alert(value);
    return value;
  };
  calcThePower();

};
// // -----------------------------------------------------------------------------
//
// // Function Example 8.
//
document.querySelector("#function_btn_8").addEventListener("click", functionEx8);

function functionEx8() {

  let funcExpression = function(){
    alert("Hello world!");
  }
  alert(funcExpression);
  funcExpression();
};
// -----------------------------------------------------------------------------
//
// // Function Example 9.
//
document.querySelector("#function_btn_9").addEventListener("click", functionEx9);

function functionEx9() {
  let sum = (a,b) => a + b;
  alert(sum(1,1));
};
// -----------------------------------------------------------------------------
//
// // Function Example 10.
//
document.querySelector("#function_btn_10").addEventListener("click", functionEx10);

function functionEx10() {
  let greetings = () => {
    return alert("Hi there!");
  };

  greetings();
};
// -----------------------------------------------------------------------------
//
// // Function Example 11.
//
document.querySelector("#function_btn_11").addEventListener("click", functionEx11);

function functionEx11() {
  let moreGreetings = (name) => {
    let salutation = "Hello ";
    let end = "!";
    return alert(salutation + name + end);
  };

 moreGreetings("Bobby");
};
// -----------------------------------------------------------------------------
