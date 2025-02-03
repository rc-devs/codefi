//quick exercise
function transformArray(nums) {
  nums.unshift(5);
  nums.pop();
  console.log(`Quick exercise step 1 & 2, new array: ${nums}`);

  const targetArray = [];
  for (i = 0; i < nums.length; i++){
   targetArray.push(nums[i] + 1); 
  }
  return targetArray;
}
console.log(transformArray([10, 20, 30]));



//callback exercise 1; basic callback function
function prepareFood() {
  console.log("Preparing food...");
  console.log("2 second wait")
  setTimeout(() => {
    greetCustomer();
    requestData(displayData); 
  }, 2000)
};

function greetCustomer() {
  console.log("Your food is ready!");
};

prepareFood(greetCustomer);



//callback exercise 2; delayed callback (setTimeout)
function requestData() {
  console.log("Requesting data...");
  console.log("2 second wait");
  setTimeout(() => { 
    displayData();
  }, 2000); 
};

function displayData() {
  console.log("Displaying data...");
};
//requestData() function invoked as a callback in the first exercise (i had set a timeout in the first one and didnt want to run the code twice)



//arrow exercise 1; arrow function
const arrowSquare = x => x * x;
console.log(arrowSquare(5));



//arrow exercise 2; convert a function to an arrow function
 function multiply(a, b) {
  return a * b;
}

  const multiply2 = (a, b) => a * b;

 console.log(multiply(3, 4));
 console.log(multiply2(3, 4));



 //higher order exercise 1; transform with map
 const numbers = [1, 2, 3, 4, 5];

 const numSquared = numbers.map((x) => x * x);

 console.log(numSquared);



 //higher order exercise 2; filtering and mapping
 const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 const filterAndDouble = numbers2.filter(x => x % 2 === 0).map(x => x * 2);

 console.log(filterAndDouble);



 //Timing exercise 1; delay an action
/*  function actionMessage() {
 setTimeout(() => {console.log("Action executed!")}, 3000);
 };
 */
 setTimeout(() => {console.log("Action executed!")}, 3000);
 


 //Timing exercise 2; repeat an action
setInterval(() => {console.log("Repeating action!")}, 4000);


///personal test arrow functions

const math1 = (a, b) => a * b;
console.log('personal arrow function');
console.log(math1(10, 40));

const math2 = a => a + 23;
console.log('personal arrow function');
console.log(math2(40));

//personal test .map()
const myArray1 = [1, 2, 3, 4, 5];

const myNewArray1 = myArray1.map((x) => x * 3);
console.log('personal .map() test');
console.log(myNewArray1);
