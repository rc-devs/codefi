console.log("I am connected");

//object
const person = {
  name: "John Doe",
  age: 30,
  greet: function() {
    console.log(`Hello!`);
  }
};

/* console.log(person); //logs whole object
console.log(person.name); //logs object property with .notation

// change value of the key instead of recoding
person.name = "Jane";

console.log(person.name); */

person.greet = function(name) {
  console.log(`Hello ${name}`);
}

person.greet("potato");


//Document Object Model (DOM)
// find the document 
console.log(document);

//querySelector for specific id attribute from HTML
/* console.log(elementFromHTML); // test query.selector below*/
const elementFromHTML= document.querySelector("#my-div"); 
const btn = document.querySelector("#button");

btn.addEventListener('click', function() {
  console.log("clicked!!");
});

btn.addEventListener('click', btnHandler);

function btnHandler() {
  elementFromHTML.innerHTML = "Hello universe!";
  elementFromHTML.textContent = "Hello universe!"; //changes text-content
  elementFromHTML.style.color = 'red';
}
///// add list items with button!!
const element2FromHTML = document.querySelector("#my-unordered-list"); 
const btn2 = document.querySelector("#button2");

btn2.addEventListener('click', btnHandler2);

function btnHandler2() {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
  <li> List Item 1 </li>
  <li> List Item 1 </li>
  <li> List Item 1 </li>`;

  element2FromHTML.appendChild(listItem);
}


//// class exercises
//1
const car = {
  make: "Saturn",
  model: "SL2",
  year: "2002",
  getInfo: function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${2002}`);
  }
}
car.getInfo();

//2
/* const student = {
  name: "John Doe",
  age: 22, 
  grades: [90, 70, 80, 100],
  calcAvg: function(grades) {
    const avg = grades.reduce(function(sum, num){return sum + num} , 0) / this.grades.length;
    console.log(`${this.name}'s average grade is ${avg}`);
  }
}

student.calcAvg(student.grades);
 */
// instructor help for ex 2
/* const student = {
  name:"Travis",
  grades: [50, 60, 30],
  averageGrade: function() {

  }
}
 */


let grades = [50, 60, 30];

function averageGrade(grades) {
  let total = 0;
  let amountOfGrades = grades.length;
  console.log(total);
  console.log(amountOfGrades);

  for(let index = 0; index < grades.length; index++) {
    let currentIndex = grades[index]
    console.log(currentIndex);
    total += currentIndex;
  }

  console.log(Math.round(total / amountOfGrades));
}
averageGrade([50, 60, 30]);

//3 & 4
const button3 = document.querySelector('#button3');
button3.addEventListener('click', btnHandler3);
function btnHandler3() {
  button3.style.backgroundColor = "red";
  button3.textContent = "I am a red button";
};


//5 
const unorderedList2 = document.querySelector("#unordered-list-2");
const button4 = document.querySelector('#button4');

button4.addEventListener('click', btnHandler4);

function btnHandler4() {
  const newListItem =document.createElement('li');
  newListItem.innerHTML = 
  `<li>New List Item </li>`;

  unorderedList2.appendChild(newListItem);
}

/////
/* const element2FromHTML = document.querySelector("#my-unordered-list"); 
const btn2 = document.querySelector("#button2");

btn2.addEventListener('click', btnHandler2);

function btnHandler2() {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
  <li> List Item 1 </li>
  <li> List Item 1 </li>
  <li> List Item 1 </li>`;

  element2FromHTML.appendChild(listItem);
}

 */