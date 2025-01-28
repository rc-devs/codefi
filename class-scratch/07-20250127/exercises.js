//ex 1 alert
alert("Welcome to My Website! I am the result of exercise 1");


//ex 2 change text content
const changeTextBtn = document.querySelector('#text-change');
const placeHolderText = document.querySelector('#placeholder-text');

changeTextBtn.addEventListener('click', changePlaceholderText);

function changePlaceholderText() {
  const newText = "You are a potato.";
  placeHolderText.textContent = newText;
}


//ex 3 image switcher
const imgBtn1 = document.querySelector('#img-btn-1');
const imgBtn2 = document.querySelector('#img-btn-2');
let imageDisplay = document.querySelector('#image-display');

imgBtn1.addEventListener('click', displayImage1);
imgBtn2.addEventListener('click', displayImage2);

//i know these can be combined with the event listeners, but it helps me think through and trace the code
function displayImage1() {
  imageDisplay.src  = "imgs/paper-emoji.png"; 
}

function displayImage2(){
  imageDisplay.src = "imgs/rock-emoji.png"; 
}


//ex 4 input logger
const btnDisplayNewText = document.querySelector("#display-new-text")
const inputField = document.querySelector("#input-new-text");
const fieldNewText = document.querySelector("#new-text");

btnDisplayNewText.addEventListener("click", displayNewText);

function displayNewText() { 
  const newText = inputField.value;
  fieldNewText.textContent = newText
};


//ex5 timer
//grab doc id
const btnStart = document.querySelector('#start-button');
const btnStop = document.querySelector('#stop-button');
const btnReset = document.querySelector('#reset-button');

//event listeners
btnStart.addEventListener('click', handleStart);
btnStop.addEventListener('click', handleStop);
btnReset.addEventListener('click', handleReset);


//functions
function handleStart() {
  const countdown = document.querySelector('#countdown');
  
  let milliSeconds = setInterval(handleStart, 1000);
  console.log("log interval every 1 second");
  countdown.textContent = milliSeconds;
}

function handleStop() {
   clearInterval(handleStart);
   console.log("interval stopped");
}

function handleReset() {
  clearInterval(handleStart);
  countdown.textContent = 0;
  console.log("interval terminated");
}


//ex 6 calculator

