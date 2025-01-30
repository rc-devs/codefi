//exercise1 todo list
function todoList(){
  const todoList =['make dinner', 'wash dishes', 'sweep and mop']
  console.log(todoList); //test log

  todoList.push('walk dogs');
  todoList.shift();
  console.log(todoList); //confirm push and shift
}
todoList()

//exercise2 count even numbers
function countEvenNumbers () {
const arrayOfNumbers = [1,20,40,45,10,10,170,31]
let evenAmount = 0;

for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] % 2 === 0) {
    evenAmount++;
  }
}
console.log(evenAmount);
}
countEvenNumbers();


//exercise3 create a reverse array (easy method)
function reverseArray () {
  const array = [1,2,3,4,5,6]

  array.reverse();
  console.log(`.reverse array: ${array}`);
}
reverseArray()

//exercise3 create a reverse away (skills method)
function reverseArray2 () {
  const array = [1,2,3,4,5,6]
  const reverseArray = []
  console.log('Reverse array for loop method')//note for console

  for (let i = array.length -1; i > 0; i--) {
    console.log(array[i]);
    reverseArray.push(array[i]);
  }
  console.log(reverseArray);
}
reverseArray2()




//exercise4
function findLargestNumber () {
  const array = [1,4,2,6,3,5,];
  let maxNumber = 0;

  for (let i = 0; i < array.length; i++) {
      if (array[i] > maxNumber)
        maxNumber = array[i];
      }
}
findLargestNumber();



//exercise5 dynamic greeting
function greetUsers() {
const greetUsers = ["John", "Jane", "Doe"]

  for (let i = 0; i < greetUsers.length; i++) {
    console.log(`Welcome ${greetUsers[i]}`)
  }
}
greetUsers();

