//callback function
function processData(number, callback) {
  let result = number + 5;
  callback(result)
};

function logResult(result) {
  console.log(`Processed result: ${result}`);
};

processData(10, logResult); //log result is passed as a parameter to processdata (it is change to 'callback' internally). basically same as 'let callback = logResult;'



//arrow functions
function double(number) {
  console.log(number*2);
};
double(2);

const doubleArrow = (number) => console.log( number *2); //console.log not necessary, arrow auto returns result
doubleArrow(2);



//higher-order function using arrow functions
const doubleArrow2 = (numbers) => {
  const numbersDoubled = numbers.map((num) => num *2); 
  console.log(numbersDoubled);
}
doubleArrow2([1, 30, 20, 4, 10, 30, 26]);


//filter
const logEvens = (nums) => {
  const evens = nums.filter((num) => num % 2 === 0);
  console.log(evens);
};

logEvens([1, 30, 20, 4, 10, 30, 26, 11, 5, 30, 31, 32]);


//forEach
const readNumbers = (nums) => nums.forEach((num) => console.log(num));

readNumbers([1, 30, 20, 4, 10, 30, 26, 11, 5, 30, 31, 32]);


//setTimeout-setInterval
setTimeout(() => {
  console.log(`logged after 5 seconds`);
}, 5000);


const countDown = (initialCount, seconds) => { //forever loop tho
  setInterval(() => {
    initialCount--
    console.log(initialCount);
  }, seconds);
  
};

countDown(20, 5000);
