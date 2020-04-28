"use strict";

// Object Example 1: Accessing Property Values

document.querySelector("#object_btn_1").addEventListener("click", objectMethodEx1);

function objectMethodEx1() {
  let person = {
    age : 50,
    gender : "male",
  };

  alert(person.age);
  alert(person["gender"]);
};
// -----------------------------------------------------------------------------

// Object Example 2: Accessing Property Values

document.querySelector("#object_btn_2").addEventListener("click", objectMethodEx2);

function objectMethodEx2() {
  let person = {
    age : 50,
    gender : "male",
    address: {
      house_number: 22,
      street_name: "Main Street",
      town: "Madeupville",
      "post code": "ABC 123"
    }
  };

  alert(person.address.house_number);
  alert(person.address.street_name);
  alert(person.address["post code"]);
};
// -----------------------------------------------------------------------------

// Object Example 3: Accessing Property Values

document.querySelector("#object_btn_3").addEventListener("click", objectMethodEx3);

function objectMethodEx3() {
  let job = {
    title: "Gardener",
    clothes: ["Boots", "Gloves", "Hat", "Overalls" ],
    tools: ["Spade", "Fork", "Rake", "Hoe"]
  }

  alert(job.clothes[0]);
  alert(job.tools);
  alert(job.tools[3]);
};
// -----------------------------------------------------------------------------

// Object Example 4: Adding Properties

document.querySelector("#object_btn_4").addEventListener("click", objectMethodEx4);

function objectMethodEx4() {
  let person = {
    age : 50,
    gender : "male",
  };

  person.nationality = "Scottish";
  alert(person.nationality);
};
// -----------------------------------------------------------------------------

// Object Example 5: Deleting Properties

document.querySelector("#object_btn_5").addEventListener("click", objectMethodEx5);

function objectMethodEx5() {
  let person = {
    age : 50,
    gender : "male",
    nationality: "Scottish"
  };
  alert(person.nationality);

  delete person.nationality;
  alert(person.nationality);
};
// -----------------------------------------------------------------------------

// Object Example 6: The for in loop

document.querySelector("#object_btn_6").addEventListener("click", objectMethodEx6);

function objectMethodEx6() {
    let budget = {
      groceries : 50,
      utilities : 40,
      fun : 60,
      clothes : 70
    };

    for (let key in budget) {
      alert("The budget for " + key + " is," +" £"+ budget[key] + ".");
    }
};
// -----------------------------------------------------------------------------

// Object Example 7: Methods

document.querySelector("#object_btn_7").addEventListener("click", objectMethodEx7);

function objectMethodEx7() {
  let employee = {
    name : "Bobby",
    age : 50,
    job : "Gardener"
  };

  employee.speak = function(){
    return alert(`My name is ${this.name} and I am a ${this.job}.`);
  };

  employee.speak();
};

document.querySelector("#object_btn_8").addEventListener("click", objectMethodEx8);

function objectMethodEx8() {
  let employee = {
    name : "Bobby",
    age : 50,
    job : "Gardener",
    speak: function() {
      return alert(`My name is ${this.name} and I am a ${this.job}.`);
    }
  };

  employee.speak();
};

document.querySelector("#object_btn_9").addEventListener("click", objectMethodEx9);

function objectMethodEx9() {
  let job = {
    title: "Gardener",
    clothes: ["Boots", "Gloves", "Hat", "Overalls" ],
    tools: ["Spade", "Fork", "Rake", "Hoe"],
    showClothes: function(){
      for (let item = 0; item < this.clothes.length; item++){
        alert("Item " + (item + 1) + ": "  + this.clothes[item] + ".")
      }
    },
    showTools: function(){
      for (let item = 0; item < this.tools.length; item++){
        alert("Item " + (item + 1) + ": "  + this.tools[item] + ".");
      }
    }
  }
  job.showClothes();
  job.showTools();
};
// -----------------------------------------------------------------------------

// Object Example 8: Getters and Setters

document.querySelector("#object_btn_10").addEventListener("click", objectMethodEx10);

function objectMethodEx10() {
  let employee = {
    name : "Bobby",
    age : 50,
    job : "Gardener",
    get speak(){
      return alert(`My name is ${this.name}, and I'm a ${this.job}.`)
    }
  };

  employee.speak;
};

document.querySelector("#object_btn_11").addEventListener("click", objectMethodEx11);

function objectMethodEx11() {
  let employee = {
    name : "Bobby",
    age : 50,
    job : "Gardener",
    set jobTitle(title){
      this.job = title;
    }
  };

  alert(employee.job);

  employee.jobTitle = "Plumber";
  alert(employee.job);
};
// -----------------------------------------------------------------------------

// Object Example 9: Constructors

document.querySelector("#object_btn_12").addEventListener("click", objectMethodEx12);

function objectMethodEx12() {
  function Employee(firstName, secondName, age, title){
    this.firstN = firstName;
    this.secondN = secondName;
    this.age = age;
    this.title = title;
    this.fullName = function(){
      return `${this.firstN} ${this.secondN}`
    };
  }

  let newEmployee_1 = new Employee("Bobby", "Jones", 35, "Assistant Manager");

  alert("Alert 1: " + newEmployee_1.fullName());
  alert("Alert 2: " + newEmployee_1.age);

  let newEmployee_2 = new Employee("Billy", "Jean", 33, "Manager");

  alert("Alert 3: " + newEmployee_2.fullName());
  alert("Alert 4: " + newEmployee_1.title);
};
// -----------------------------------------------------------------------------
