"use strict";

// Array Method Example 1: Return an Index Value.

document.querySelector("#array_btn_1").addEventListener("click", arrayMethodEx1);

function arrayMethodEx1() {
  let shoppingList = ['beer', 'cider', 'bread', 'jam', 'biscuits'];
  alert(shoppingList[0]);
  alert(shoppingList[2]);
  alert(shoppingList[shoppingList.length-1]);
};
// -----------------------------------------------------------------------------

// Array Method Example 2: Update an Index Value

document.querySelector("#array_btn_2").addEventListener("click", arrayMethodEx2);

function arrayMethodEx2() {
  let shoppingList = ['beer', 'cider', 'bread', 'jam', 'biscuits'];
  alert(shoppingList[1]);
  shoppingList[1] = 'wine';
  alert(shoppingList[1]);
};
// -----------------------------------------------------------------------------

// Array Method Example 3: A Multidimensional Array

document.querySelector("#array_btn_3").addEventListener("click", arrayMethodEx3);

function arrayMethodEx3() {
  let anotherList = ['cereal', 'peas', 'beans', ['butter', 'milk', 'yogurt']]
  alert(anotherList[2]);
  alert(anotherList[3][0]);
  alert(anotherList[3][2]);
};
// -----------------------------------------------------------------------------

// Array Method Example 4: push()

document.querySelector("#array_btn_4").addEventListener("click", arrayMethodEx4);

function arrayMethodEx4() {
  let shoppingList = ['beer', 'cider', 'bread', 'jam', 'biscuits'];
  alert(shoppingList);
  shoppingList.push('apples');
  alert(shoppingList);
};
// -----------------------------------------------------------------------------

// Array Method Example 5: pop()

document.querySelector("#array_btn_5").addEventListener("click", arrayMethodEx5);

function arrayMethodEx5() {
  let shoppingList = ['beer', 'cider', 'bread', 'jam', 'biscuits'];
  alert(shoppingList);
  shoppingList.pop();
  alert(shoppingList);
};
// -----------------------------------------------------------------------------

// Array Method Example 6: unshift()

document.querySelector("#array_btn_6").addEventListener("click", arrayMethodEx6);

function arrayMethodEx6() {
  let shoppingList = ['beer', 'cider', 'bread', 'jam', 'biscuits'];
  alert(shoppingList);
  shoppingList.unshift('apples');
  alert(shoppingList);
};
// -----------------------------------------------------------------------------

// Array Method Example 7: shift()

document.querySelector("#array_btn_7").addEventListener("click", arrayMethodEx7);

function arrayMethodEx7() {
  let shoppingList = ['beer', 'cider', 'bread', 'jam', 'biscuits'];
  alert(shoppingList);
  shoppingList.shift();
  alert(shoppingList);
};
// -----------------------------------------------------------------------------

// Array Method Example 8: toString() and join()

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

// Array Method Example 9: split()

document.querySelector("#array_btn_9").addEventListener("click", arrayMethodEx9);

function arrayMethodEx9() {
  let randomString = 'Bobby,Sam,David,Mary,June';
  let stringToArray = randomString.split(',');
  alert("Alert No. 1: " + typeof randomString);
  alert("Alert No. 2: " + typeof stringToArray);
  alert("Alert No. 3: " + Array.isArray(stringToArray));
  alert("Alert No. 4: " + stringToArray[1]);

  for(let i=0; i < stringToArray.length; i++){
    alert(stringToArray[i].toUpperCase());
  }
};
// -----------------------------------------------------------------------------

// Array Method Example 10: reverse()

document.querySelector("#array_btn_10").addEventListener("click", arrayMethodEx10);

function arrayMethodEx10() {
  let numbers = [1, 2, 3, 4, 5];
  let backwards = numbers.reverse();

  alert(backwards);
};
// -----------------------------------------------------------------------------

// Array Method Example 11: slice()

document.querySelector("#array_btn_11").addEventListener("click", arrayMethodEx11);

function arrayMethodEx11() {
    let fruitbowl = ["apples", "bananas", "mangoes", "grapes"];
    let fruits = fruitbowl.slice(1, 3);

    alert(fruits);
};
// -----------------------------------------------------------------------------

// Array Method Example 12: splice()

document.querySelector("#array_btn_12").addEventListener("click", arrayMethodEx12);

function arrayMethodEx12() {
    let fruitbowl = ["apples", "bananas", "mangoes", "grapes"];
    fruitbowl.splice(2, 0, "oranges", "peaches");

    alert(fruitbowl);
};

document.querySelector("#array_btn_13").addEventListener("click", arrayMethodEx13);

function arrayMethodEx13() {
    let fruitbowl = ["apples", "bananas", "mangoes", "grapes"];
    fruitbowl.splice(2, 2, "oranges", "peaches");

    alert(fruitbowl);
};

document.querySelector("#array_btn_14").addEventListener("click", arrayMethodEx14);

function arrayMethodEx14() {
    let fruitbowl = ["apples", "bananas", "mangoes", "grapes"];
    fruitbowl.splice(2, 2);

    alert(fruitbowl);
};
// -----------------------------------------------------------------------------

// Array Method Example 13: sort()

document.querySelector("#array_btn_15").addEventListener("click", arrayMethodEx15);

function arrayMethodEx15() {
    let fruitbowl = ["pineapples", "bananas", "mangoes", "grapes", "apples"];
    fruitbowl.sort();

    alert(fruitbowl);
};

document.querySelector("#array_btn_16").addEventListener("click", arrayMethodEx16);

function arrayMethodEx16() {
    let fruitbowl = ["pineapples", "bananas", "mangoes", "grapes", "apples"];
    fruitbowl.sort().reverse();

    alert(fruitbowl);
};

document.querySelector("#array_btn_17").addEventListener("click", arrayMethodEx17);

function arrayMethodEx17() {
    let numbers = [9, 7, 3, 5, 1, 6, 4, 2, 8];
    numbers.sort()

    alert(numbers);
};

document.querySelector("#array_btn_18").addEventListener("click", arrayMethodEx18);

function arrayMethodEx18() {
    let numbers = [100, 7, 30, 25, 1000, 16, 4, 32, 88];
    numbers.sort()

    alert(numbers);
};

document.querySelector("#array_btn_19").addEventListener("click", arrayMethodEx19);

function arrayMethodEx19() {
    let numbers = [100, 7, 30, 25, 1000, 16, 4, 32, 88];
    numbers.sort( function(a, b) {return a-b } );

    alert(numbers);
};

document.querySelector("#array_btn_20").addEventListener("click", arrayMethodEx20);

function arrayMethodEx20() {
    let numbers = [100, 7, 30, 25, 1000, 16, 4, 32, 88];
    numbers.sort( function(a, b) {return b-a } );

    alert(numbers);
};
// -----------------------------------------------------------------------------

// Array Method Example 14: Iterations

document.querySelector("#array_btn_21").addEventListener("click", arrayMethodEx21);

function arrayMethodEx21() {
  let fruitbowl = ["apples", "bananas", "mangoes", "grapes"];

  for (let i = 0; i < fruitbowl.length; i++) {
    alert( fruitbowl[i] );
  }
};

document.querySelector("#array_btn_22").addEventListener("click", arrayMethodEx22);

function arrayMethodEx22() {
  let fruitbowl = ["apples", "bananas", "mangoes", "grapes"];

  for (let fruit of fruitbowl) {
    alert( fruit );
  }
};
// -----------------------------------------------------------------------------

// Array Method Example 15: forEach()

document.querySelector("#array_btn_23").addEventListener("click", arrayMethodEx23);

function arrayMethodEx23() {
  let fruitbowl = ["apples", "bananas", "mangoes", "grapes"];

  fruitbowl.forEach(function(fruit) {return alert(fruit.toUpperCase());})
};

document.querySelector("#array_btn_24").addEventListener("click", arrayMethodEx24);

function arrayMethodEx24() {
  let fruitbowl = ["apples", "bananas", "mangoes", "grapes"];

  fruitbowl.forEach(fruitFunc);

  function fruitFunc(fruit, indexNo){
    return alert("Index Number " + indexNo + ": " + fruit.toUpperCase());
  }
};
// -----------------------------------------------------------------------------

// Array Method Example 16: map()

document.querySelector("#array_btn_25").addEventListener("click", arrayMethodEx25);

function arrayMethodEx25() {
  let fruitbowl = ["apples", "bananas", "mangoes", "grapes"];

  let newFruitBowl = fruitbowl.map(fruit => fruit.length);
  alert(newFruitBowl);
};

document.querySelector("#array_btn_26").addEventListener("click", arrayMethodEx26);

function arrayMethodEx26() {
  let fruitbowl = ["apples", "bananas", "mangoes", "grapes", "lemons", "pears"];

  let newFruitBowl = fruitbowl.map(altUpperCase);

  function altUpperCase(fruitItem, indexNo) {
    if (indexNo%2 == 0){
       return fruitItem.toUpperCase();
    } else {
      return fruitItem;
    }
  }
  alert(newFruitBowl);
};
// -----------------------------------------------------------------------------

// Array Method Example 17: filter()

document.querySelector("#array_btn_27").addEventListener("click", arrayMethodEx27);

function arrayMethodEx27() {
  let fruitbowl = ["apples", "bananas", "mangoes", "grapes"];

  let anotherFruitBowl = fruitbowl.filter(fruit => fruit.length < 7);
  alert(anotherFruitBowl);
};

document.querySelector("#array_btn_28").addEventListener("click", arrayMethodEx28);

function arrayMethodEx28() {
  let fruitbowl = ["apples", "bananas", "mangoes", "grapes", "lemons", "pears"];

  let anotherFruitBowl = fruitbowl.filter(selectedFruit);

  function selectedFruit(fruitItem, indexNo) {
    if ((indexNo + 1)%2 == 0 ){
      return fruitItem;
    }
  }
  alert(anotherFruitBowl);
};
// -----------------------------------------------------------------------------

// Array Method Example 17: reduce()

document.querySelector("#array_btn_29").addEventListener("click", arrayMethodEx29);

function arrayMethodEx29() {
  let scores = [25, 50, 75, 100, 125];

  let combinedScores = scores.reduce(totalScores, 0);

  function totalScores(total, score){
    return total += score;
  }

  alert(combinedScores);
};

document.querySelector("#array_btn_30").addEventListener("click", arrayMethodEx30);

function arrayMethodEx30() {
  let turnovers = [1999, 1999, 2000, 2000, 2000];

  let tax = turnovers.reduce(taxedSales, 0);

  function taxedSales(totalTax, turnover){
    if (turnover < 2000){
      turnover = 0;
    } else {
      turnover * 0.1;
    }
    return totalTax += (turnover * 0.1);
  }

  alert(tax);
};

// -----------------------------------------------------------------------------
