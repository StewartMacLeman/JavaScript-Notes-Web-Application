"use strict";

// Events Example 1: Adding Text to an Element

document.querySelector("#event_btn_1").addEventListener("click", eventMethodEx1);

function eventMethodEx1() {
  let para = document.querySelector("#event_result_1");

  if (para.innerHTML == ""){
    para.innerHTML = "You have added text! Click the button again to remove.";
  } else {
    para.innerHTML = "";
  }
};
// -----------------------------------------------------------------------------

// Events Example 2: Changing Content Styles

document.querySelector("#event_btn_2").addEventListener("click", eventMethodEx2);

function eventMethodEx2() {
  let para = document.querySelector("#event_result_2");

  if (para.style.color == "red"){
    para.style.color = "black";
  } else {
    para.style.color = "red";
  }
};
// -----------------------------------------------------------------------------

// Events Example 3: Adding and Removing Elements

document.querySelector("#event_btn_3").addEventListener("click", eventMethodEx3);

function eventMethodEx3() {
  let newPara = document.createElement("p");
  let newParaText = document.createTextNode("This is another one!")
  newPara.appendChild(newParaText);
  newPara.setAttribute("class", "eventAnswer");
  document.querySelector("#event_result_3").appendChild(newPara);
};

document.querySelector("#event_btn_4").addEventListener("click", eventMethodEx4);

function eventMethodEx4() {
  let container = document.querySelector("#event_result_3");
  let listOfPara = container.querySelectorAll("p");

  if (listOfPara.length > 1){
    listOfPara[listOfPara.length-1].remove();
  }
};
// -----------------------------------------------------------------------------

// Events Example 4: Updating Multiple Elements

document.querySelector("#event_btn_5").addEventListener("click", eventMethodEx5);

function eventMethodEx5() {
  let container = document.querySelector("#event_result_4");
  let listOfElements = container.querySelectorAll("p");

  if ((listOfElements[0].style.color == "tomato") &&
  (listOfElements[0].style.fontWeight == "bold")){

    for (let element = 0; element < listOfElements.length; element++){
      listOfElements[element].style.color = "black";
      listOfElements[element].style.fontWeight = "normal";
    }
  } else {
    for (let element = 0; element < listOfElements.length; element++){
      listOfElements[element].style.color = "tomato";
      listOfElements[element].style.fontWeight = "bold";
    }
  }
};
// -----------------------------------------------------------------------------

// Events Example 5: Moving Elements

document.querySelector("#event_btn_6").addEventListener("click", eventMethodEx6);

function eventMethodEx6() {

  let inner = document.querySelector("#innerBox");
  let topPosition = 0;
  let leftPosition = 0;
  let moveStep = setInterval(move, 5);

  function move(){
    if ((topPosition == 350) && (leftPosition == 700) ){
      clearInterval(moveStep);
    } else {
      topPosition++;
      leftPosition = leftPosition + 2;
      inner.style.top = topPosition + "px";
      inner.style.left = leftPosition + "px";
    }
  }
};
// -----------------------------------------------------------------------------

// Events Example 5: Moving Elements

// document.querySelector("#event_btn_6").addEventListener("click", eventMethodEx6);
//
// function eventMethodEx6() {
  //
  //   let inner = document.querySelector("#innerBox");
  //   let position = 0;
  //   let moveStep = setInterval(move, 5);
  //
  //   function move(){
    //     if (position == 350){
      //       clearInterval(moveStep);
      //     } else {
        //       position++;
        //       inner.style.top = position + "px";
        //       inner.style.left = position + "px";
        //     }
        //   }
        // };

        // -----------------------------------------------------------------------------
