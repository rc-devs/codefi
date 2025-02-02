//button for html with an arrow function!!!!!!!!
const btnClick = document.querySelector('.js-button');

const eventListener = ('click', () => { 
  console.log('button clicked');
}); // function saved as a variable

btnClick.addEventListener('click', eventListener); //add event listenr
btnClick.removeEventListener('click', eventListener) //remove event listener
btnClick.addEventListener('click', () => { //add event listener
  console.log('button clicked2');
});


////Function review!
//standard function
function greeting() {
  console.log('hello');
};
greeting();

// function as a variable
const num = 2; //variable = value
const function1 = function greeting() { //variable = value(a function in this case!)
  console.log('hello2');
};
function1(); // runs the function inside the variable
console.log(typeof function1); //logs the variable as a function

//anonymous function
const function1_1 = function() { //removing the name (greeting) makes the inner function an anonymous function
  console.log('hello2');
};

//saving values and functions in an object. fun in obj is a method!
const object1 = {
  num: 2, // property-value pair, also known as a key
  fun: function() { //property-value pair, value is an anon function. A function saved inside an object is a method!
    console.log('hello3');
  }
};
object1.fun();


//passing a value into a function
function display(param) {
  console.log(param);
};
display(2); //log 2, value is passed as a parameter (param) into the function


//pass a function into a function
function run(param){
  param();
}
run(function(){ //the function being passed as a parameter is a callback function
  console.log('hello4');
})


////

/* setTimeout(); */ //takes two parameters
setTimeout(function(){ //function is parameter 1
  console.log('timeout');
  console.log('timeout2');
}, 3000); //time in milliseconds is parameter 2

console.log('next line'); //logs before setTimeout bc it is synchronous code


/* setInterval() */ //takes the same paramters (function(){}, time). will run function at set interval until told to stop
setInterval(function() {
  console.log('interval');
}, 3000);

console.log('next line2')


///looping through an array
//.forEach() method; the preferred method for looping through an array
const objTodo = [
  'make dinner',
  'wash dishes',
  'watch youtube',
].forEach(function(value, index) {
  if(value === 'wash dishes'){
    return; //ends the function early and continues to the next function, not loggin 'wash dishes'
  };
  console.log(index);
  console.log(value);
});


//regular function (same as arrow fun below)
const regularFunction = function(param, param2){
  console.log('hello');
  return 5;
};

//arrow functions (same as reg fun above)
const arrowFunction = (param, param2) => {
  console.log('hello');
  return 5;
};
arrowFunction();


//arrow fun 1 param
const oneParam = param => { //no brackets needed with single param
  console.log(param +1)
}
oneParam(2);


//single line arrow
const oneLine = () => 2 + 3; //bracket and return not needed
console.log(oneLine());


//modified from code above
const objTodo2 = [
  'make dinner2',
  'wash dishes2',
  'watch youtube2',
].forEach((value, index) => { //now an arrow function!
  if(value === 'wash dishes2'){
    return; 
  };
  console.log(index);
  console.log(value);
});



//arrow functions inside an object
const object2 = {
  method: () => {

  },
  method() { //shorthand method syntax for functions in objects

  }
};


/////////////

//.filter()
// [1, -3, 5].filter((value, index) => {});
console.log([1, -3, 5].filter((value, index) => {
  /* if (value >= 0) {
    return true;
  } else{
  return; false
  } */
  return value >= 0;
}));



// .map
console.log([1, 1, 3].map((value, index) => {
  return value * 2;
}));


//arrow function shortcuts
console.log([1, 1, 3].map(value => value * 2)); //same as above, but compact and clean

//closure



