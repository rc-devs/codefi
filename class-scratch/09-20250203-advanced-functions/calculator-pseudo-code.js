//psuedo coding
//goal: create a calculator that add multiply subtract divide

//user inputs X2 -- done
//buttons for math ops -- done
//connect to html elements to javascript 

const inputOne = document.querySelector('input-1');
const input2 = document.querySelector('input-2');
const add = document.querySelector('add');
const multiply = document.querySelector('multiply');
const subract = document.querySelector('subract');
const divide = document.querySelector('divide');
const submit = document.querySelector('submit');
const clear = document.querySelector('add');


//function doMath
const doMath = () => {
//store answer --done
  let answer = 0;

   //math logic

}
doMath();


const addHandler = () => {
  selectedOperator = 'add'
  console.log(selectedOperator)
};
const multiplyHandler = () => {

};
const subtractHandler = () => {

};
const divideHandler = () => {

};

//secondary goal: buttons need to decide which operator to use
//use addEventListener
add.addEventListener('click', addHandler);
multiply.addEventListener('click', multiply);
divide.addEventListener('click', divide);
subract.addEventListener('click', subract);







//display



/////