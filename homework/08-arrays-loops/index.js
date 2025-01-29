
//quick exercise; Create a dark-mode button
const darkModeButton = document.querySelector('#dark-mode-button'); //communicate w button element
const bodyElement = document.body; //communicate with body element

darkModeButton.addEventListener('click', toggleDarkModeButton) //listen for button event

function toggleDarkModeButton() { //function on event; toggle on off
  console.log('dark-mode button communicating');//test log, not necessary to function

  if (darkModeButton.textContent === "Enable Dark Mode") { //condition for .textContent
    bodyElement.classList.add('dark-mode'); //apply classList from css to element
    darkModeButton.textContent = 'Disable Dark Mode'; //change element textContent
    } else { 
    bodyElement.classList.remove('dark-mode'); //remove css from element
    darkModeButton.textContent = 'Enable Dark Mode'; //change element textContent
    }
}


//loop examples from reading


//example 1 summing array elements
const numbers = [10, 20, 30]; //array declared as a variable
let sum = 0; // sum variable

for (let i =  0; i < numbers.length; i++) { //initialized (index 0), condition set to meet array length, increment til numbers.length, or whole array)
  sum += numbers[i]; //call variable sum,  variable sum + variable sum + array(index)???
};
console.log('reading example1');
console.log(`Sum: ${sum}`); // output Sum: 60




//example 2 doubling array element
const numbers2 = [1, 2, 3];
const doubled = [];

for (let i = 0; i < numbers2.length; i++) {
    doubled.push(numbers2[i] * 2);
}
console.log('reading example2');
console.log(doubled); // Output: [2, 4, 6]


//example 3
const numbers3 = [1, 2, 3, 4, 5];
const evens = [];

for (let number of numbers3) {
    if (number % 2 === 0) {
        evens.push(number);
    }
}
console.log('reading example3');
console.log(evens); // Output: [2, 4]

/* 
//exercise : To Do List Processor

const toDoList = ['Sweep', 'Dishwasher', 'Empty Trash'];
console.log(toDoList); //initial array

  toDoList.push('Make the Bed'); //initially tried to complete with a function
console.log(toDoList); //updated array; add

  toDoList.shift();
console.log(toDoList); //updated array; subtract */




//user input for to do list (trying things out)
const inputFieldToDo = document.querySelector('#input-to-do'); 
const btnSubmitInput = document.querySelector('#submit-input-to-do');

const displayToDo = document.querySelector('#display-to-do');

let toDoList = [''];
displayToDoFun();

btnSubmitInput.addEventListener('click', handleInputSubmit);

function handleInputSubmit() {
  
  toDoList.push(inputFieldToDo.value);
  displayToDo.innerHTML= toDoList;
};

function displayToDoFun() {
  let todoDisplay = '';

  for (let i = 0; i < toDoList; i++) {
    const todo = toDoList[i];
    const display = `<p>${todo}</p>`;
    todoDisplay += display;
  }

  console.log(todoDisplay);
  document.querySelector('#display-to-do').innerHTML = todoDisplay;
};






