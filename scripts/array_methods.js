"use strict";

// Array Method Example 1.

document.querySelector("#array_btn_1").addEventListener("click", arrayMethodEx1);

function arrayMethodEx1() {
  let shoppingList = ['beer', 'cider', 'bread', 'jam', 'biscuits'];
  alert(shoppingList[0]);
  alert(shoppingList[2]);
  alert(shoppingList[shoppingList.length-1]);
};
// -----------------------------------------------------------------------------

// Array Method Example 2.

document.querySelector("#array_btn_2").addEventListener("click", arrayMethodEx2);

function arrayMethodEx2() {
  let shoppingList = ['beer', 'cider', 'bread', 'jam', 'biscuits'];
  alert(shoppingList[1]);
  shoppingList[1] = 'wine';
  alert(shoppingList[1]);
};
// -----------------------------------------------------------------------------

// Array Method Example 3.

document.querySelector("#array_btn_3").addEventListener("click", arrayMethodEx3);

function arrayMethodEx3() {
  let anotherList = ['cereal', 'peas', 'beans', ['butter', 'milk', 'yogurt']]
  alert(anotherList[2]);
  alert(anotherList[3][0]);
  alert(anotherList[3][2]);
};
// -----------------------------------------------------------------------------

// Array Method Example 4.

document.querySelector("#array_btn_4").addEventListener("click", arrayMethodEx4);

function arrayMethodEx4() {
  let shoppingList = ['beer', 'cider', 'bread', 'jam', 'biscuits'];
  alert(shoppingList);
  shoppingList.push('apples');
  alert(shoppingList);
};
// -----------------------------------------------------------------------------

// Array Method Example 5.

document.querySelector("#array_btn_5").addEventListener("click", arrayMethodEx5);

function arrayMethodEx5() {
  let shoppingList = ['beer', 'cider', 'bread', 'jam', 'biscuits'];
  alert(shoppingList);
  shoppingList.pop();
  alert(shoppingList);
};
// -----------------------------------------------------------------------------

// Array Method Example 6.

document.querySelector("#array_btn_6").addEventListener("click", arrayMethodEx6);

function arrayMethodEx6() {
  let shoppingList = ['beer', 'cider', 'bread', 'jam', 'biscuits'];
  alert(shoppingList);
  shoppingList.unshift('apples');
  alert(shoppingList);
};
// -----------------------------------------------------------------------------

// Array Method Example 7.

document.querySelector("#array_btn_7").addEventListener("click", arrayMethodEx7);

function arrayMethodEx7() {
  let shoppingList = ['beer', 'cider', 'bread', 'jam', 'biscuits'];
  alert(shoppingList);
  shoppingList.shift();
  alert(shoppingList);
};
// -----------------------------------------------------------------------------

// Array Method Example 8.

document.querySelector("#array_btn_8").addEventListener("click", arrayMethodEx8);

function arrayMethodEx8() {
  let shoppingList = ['beer', 'cider', 'bread', 'jam', 'biscuits'];
  alert(shoppingList);
  let newString = shoppingList.toString();
  alert(newString + " - The default delimiter will be a comma (,)!");
  let anotherString = shoppingList.join(' + ');
  alert(anotherString + " - The ' + ' delimiter has been used!");
  let yetAnotherString = shoppingList.join('');
  alert(yetAnotherString + " - The '' delimiter has been used, which removes the default comma!");
};
// -----------------------------------------------------------------------------

// Array Method Example 9.

document.querySelector("#array_btn_9").addEventListener("click", arrayMethodEx9);

function arrayMethodEx9() {
  let randomString = 'Bobby,Sam,David,Mary,June';
  let stringToArray = randomString.split(',');
  alert(typeof randomString);
  alert(typeof stringToArray);
  alert(stringToArray[1]);

  for(let i=0; i < stringToArray.length; i++){
    alert(stringToArray[i].toUpperCase());
  }
};
// -----------------------------------------------------------------------------
