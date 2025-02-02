/* 
//TODO Function
Steps(algorithm) for first todo
1. Create array to store todos
2. When we click "Add",
3. Get the text from textbox
4. Add it to array
5. console.log() the array
6. reset input field

Algorithm for Display On Page
8. loop through the array
9. create some html code for each to do
10. put the html on the webpage
11. update the html when new item
 */


const todoList = [{
  name:'make dinner', 
  dueDate:'2025-02-10',
}, {name:'wash dishes',
dueDate:'2025-02-10'}]; //empty array

renderTodoList();

document.querySelector('#js-add-todo-button')
.addEventListener('click', () => {
  addTodo();
});

//ADD TODO Function
function addTodo() { 
 const inputElement = document.querySelector('#js-name-input');
 const dateInputElement = document.querySelector('#js-due-date-input');
 const name = inputElement.value; 
 const dueDate = dateInputElement.value;

 todoList.push({name: name, 
  dueDate: dueDate}); //could put dueDate once because the property and variable name are the same (shorthand property syntax)

 inputElement.value = ""; 

 renderTodoList();
};


//Render List Function
function renderTodoList() {
  //Accumulator Pattern
  let todoListHTML = '';//(accumulator variable)
  todoList.forEach((todoObject, index) => { //arrow functionfor each method vs for loop
    const { name, dueDate } = todoObject;
    const html = 
    `
    <div class="todo-render name">${name}</div>
    <div class="todo-render date">${dueDate}</div>
       
      <button class="delete-button"  id="js-delete-tod-button"
      >Delete</button>
    `; 
    todoListHTML += html;
  });

  
  document.querySelector('#js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('#js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        console.log(index); //logs closure 
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
  };


