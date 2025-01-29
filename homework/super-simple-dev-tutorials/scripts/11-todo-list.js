
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


const todoList = ['make dinner', 'wash dishes']; //empty array

renderTodoList();

//ADD TODO Function

function addTodo() { 
 const inputElement = document.querySelector('#js-name-input'); 
 const name = inputElement.value; 

 todoList.push(name); 
 console.log(todoList); 

 inputElement.value = ""; 

 renderTodoList();
};


//Render List Function
function renderTodoList() {
  //Accumulator Pattern
  let todoListHTML = '';//(accumulator variable)

 
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`; 
    todoListHTML += html;
  }

  console.log(todoListHTML);

  document.querySelector('#js-todo-list').innerHTML = todoListHTML;
};


