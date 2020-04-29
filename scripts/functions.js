"use strict";

// Function Example 1: Function Declaration

document.querySelector("#function_btn_1").addEventListener("click", functionEx1);

function functionEx1() {
  function greeting(name, age){
    return alert("Hello, my name is " + name + ". I'm " + age + " years old!");
  };
  greeting("Tommy", "30");
};
// -----------------------------------------------------------------------------

// Function Example 2: Variable Scope

document.querySelector("#function_btn_2").addEventListener("click", functionEx2);

function functionEx2() {
  function localVariable(){
    let name = "PJ";
    return alert("My name is " + name + "!");
  };
  localVariable();
  alert(name);
};
// -----------------------------------------------------------------------------

// Function Example 3: Variable Scope

document.querySelector("#function_btn_3").addEventListener("click", functionEx3);

function functionEx3() {
  let outerName = "MJ";
  function outerNameTest(){
    let outerName = "MMJJ";
    return alert("My name is " + outerName);
  };
  outerNameTest();
  alert(outerName);
};
// -----------------------------------------------------------------------------

// Function Example 4: Parameters and Arguments

document.querySelector("#function_btn_4").addEventListener("click", functionEx4);

function functionEx4() {
  let parameterName = "JimBob";

  function parameterNameTest( parameterName, age = 100 ){
    return alert("I'm " + parameterName + ", I'm " + age + "!");
  };

  parameterNameTest(parameterName, 20);
  parameterNameTest(parameterName);
  parameterNameTest("Billy Bob", 30);
};
// -----------------------------------------------------------------------------

// Function Example 5: Parameters and Arguments

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
// -----------------------------------------------------------------------------

// Function Example 6: Parameters and Arguments

document.querySelector("#function_btn_6").addEventListener("click", functionEx6);

function functionEx6() {

  function compareValue(a , b){
    if (a > b){
      return alert("a is greater than b!");
    }
    else if (a < b){
      return alert("b is greater than a");
    }
    else if (a == b){
      return alert("The values are the same!");
    }
  };
  compareValue(10, 5);
  compareValue(5, 10);
  compareValue(5, 5);
};
// -----------------------------------------------------------------------------

// Function Example 7: Parameters and Arguments

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
// -----------------------------------------------------------------------------

// Function Example 8: Function Expression (Anonymous)

document.querySelector("#function_btn_8").addEventListener("click", functionEx8);

function functionEx8() {

  let funcExpression = function(){
    return alert("Hello world!");
  }
  alert(funcExpression);
  funcExpression();
};
// -----------------------------------------------------------------------------

// Function Example 9: Arrow Function

document.querySelector("#function_btn_9").addEventListener("click", functionEx9);

function functionEx9() {
  let sum = (a,b) => a + b;
  alert(sum(1,1));
};
// -----------------------------------------------------------------------------

// Function Example 10: Arrow Function

document.querySelector("#function_btn_10").addEventListener("click", functionEx10);

function functionEx10() {
  let greetings = () => {
    return alert("Hi there!");
  };

  greetings();
};
// -----------------------------------------------------------------------------

// Function Example 11: Arrow Function

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

// Function Example 12: call()

document.querySelector("#function_btn_12").addEventListener("click", functionEx12);

function functionEx12() {

function speakName() {
    return alert(`My name is ${this.name} and I am a ${this.job}.`);
  }

  let employee_1 = {
    name : "Bobby",
    age : 50,
    job : "Gardener"
  };

  let employee_2 = {
    name : "Dave",
    age : 40,
    job : "Driver"
  };

  speakName.call(employee_1);
  speakName.call(employee_2);
};
// -----------------------------------------------------------------------------

// Function Example 13: call() with Arguments

document.querySelector("#function_btn_13").addEventListener("click", functionEx13);

function functionEx13() {

function speakName(age) {
    return alert(`My name is ${this.name} and I am a ${this.job}. I'm ${age}!`);
  }

  let employee_1 = {
    name : "Bobby",
    job : "Gardener"
  };

  let employee_2 = {
    name : "Dave",
    job : "Driver"
  };

  speakName.call(employee_1, 50);
  speakName.call(employee_2, 40);
};
// -----------------------------------------------------------------------------

// Function Example 14: apply()

document.querySelector("#function_btn_14").addEventListener("click", functionEx14);

function functionEx14() {

function speakName() {
    return alert(`My name is ${this.name} and I am a ${this.job}.`);
  }

  let employee_1 = {
    name : "Bobby",
    job : "Gardener"
  };

  let employee_2 = {
    name : "Dave",
    job : "Driver"
  };

  speakName.apply(employee_1);
  speakName.apply(employee_2);
};
// -----------------------------------------------------------------------------

// Function Example 15: apply() with Arguments

document.querySelector("#function_btn_15").addEventListener("click", functionEx15);

function functionEx15() {

function speakName(age, nationality) {
    return alert(`My name is ${this.name} and I am a ${this.job}.
    I'm ${age} and I'm ${nationality}.`);
  }

  let employee_1 = {
    name : "Bobby",
    job : "Gardener"
  };

  let employee_2 = {
    name : "Dave",
    job : "Driver"
  };

  speakName.apply(employee_1, [50, "Scottish"]);
  speakName.apply(employee_2, [40, "Australian"]);
};

document.querySelector("#function_btn_16").addEventListener("click", functionEx16);

function functionEx16() {

function speakName(age, nationality) {
    return alert(`My name is ${this.name} and I am a ${this.job}.
    I'm ${age} and I'm ${nationality}.`);
  }

  let employee_1 = {
    name : "Bobby",
    job : "Gardener",
    extra: [50, "Scottish"]
  };

  let employee_2 = {
    name : "Dave",
    job : "Driver"
  };
  let empl2Extra = [40, "Australian"];

  speakName.apply(employee_1, employee_1.extra);
  speakName.apply(employee_2, empl2Extra);
};
// -----------------------------------------------------------------------------
