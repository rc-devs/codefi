//boolean
console.log(true);
console.log(15 < 10); //truthy values, result in false
console.log(5 < 10); //truthy values, result in true

//if statement
let age = 17;

if (age > 21) {
  console.log("You can be served alcohol.")
} else {
  console.log("You cannot be served alcohol.")
}

//comparison operators
//ex1 true || true comparison
let isWeekend = true;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("You can have the day off!")
} else {
  console.log("You cannot have the day off")
}
//ex2 false || true comparison
 isWeekend = false;
 isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("You can have the day off!")
} else {
  console.log("You cannot have the day off")
}
//ex3 false || false comparison
isWeekend = false;
isHoliday = false;

if (isWeekend || isHoliday) {
 console.log("You can have the day off!")
} else {
 console.log("You cannot have the day off")
}

// nested if-statement (??)
let username = "admin";
let password = "Password123";

if (username === "admin" && password === "Password123") {
  console.log("Access Granted");
} else {
  console.log("your username or password is incorrect");
}

 username = "adn";
 password = "Password123";

if (username === "admin" && password === "Password123") {
  console.log("Access Granted");
} else {
  console.log("your username or password is incorrect");
}


//functions

function checkAge (voterAge) {
  if (voterAge > 18){
    console.log("You are old enough to vote");
  } else {
    console.log("You are not old enough to vote");
  }
}

console.log(checkAge(21));

// Class exercises
//ex1
let variable0 = ""; // log falsy
let variable1 = 0; // log falsy
let variable2 = "Hello"; //log truthy
let variable3 = 42; //log truthy
let variable4 = null; //log falsy

if (variable0 == false) {
  console.log("falsy");
} else {
  console.log("truthy");
}

if (variable1 == false) {
  console.log("falsy");
} else {
  console.log("truthy");
}

if (variable2 == false) {
  console.log("falsy");
} else {
  console.log("truthy");
}

if (variable3 == false) {
  console.log("falsy");
} else {
  console.log("truthy");
}

if (variable4 == null) {
  console.log("falsy");
} else {
  console.log("truthy");
}

//exercise 2 age eligibility

let ageCheck = 18;

if (ageCheck >= 18) {
  console.log("You are eligible to vote!");
} else {
  console.log("You are not eligible to vote");
}

// ex 3 calculate final price

let initialPrice = 150;
let discountRate = .2;
let taxRate = .08;

const discountAmount = initialPrice * discountRate
const discountPrice = initialPrice - discountAmount;

const taxAmount = discountPrice * taxRate;
const finalPrice = discountPrice + taxAmount;

function calculateFinalPrice () {
  console.log(`Original Price: $${initialPrice}`);
  console.log(`Discount: $${discountPrice}`);
  console.log(`Tax: $${taxAmount}`);
  console.log(`Final Price: $${finalPrice}`);
}

calculateFinalPrice();

//ex 4 nested if-statments for login
let username0 = "admin";
let password0 = "password123";


if (username0 === "admin") {
  if (password0 === "password123") { 
    console.log("Access granted!");
   } else {
    console.log("Incorrect password.")
   }
} else {
  console.log("Unknown User.");
}

// ex 5 driving eligibility 

let driverAge = 18;
let license = true;

if (license === true) {
  console.log("You can drive");
} else {
  console.log("You need a license to drive"); 
} if (driverAge < 18) {
  console.log("You are not old enough to drive.");
}

// ex 6 logical operators practices

const isWeekend0 = true;
const isHoliday0 = true;

if (isWeekend0 || isHoliday0) {
  console.log("You can relax today!");
} else {
  console.log("It's a workday.");
}

// ex 7 greeting

let name0 = "John Doe";

console.log(`Hello, ${name0}! Welcome to JavaScript class.`);

//ex 8 square a number

function squareNumber(number) {
  const squareEquation = number * number;
  console.log(squareEquation);
}

squareNumber(5);
squareNumber(7);
squareNumber(10);

//ex 9

function calculateDiscount(price, discountRate = 0.1) {
  const discount0 = price * discountRate;
  const finalPrice0 = price - discount0;
  console.log(`Discount: $${discount0}`);
  console.log(`Final Price: $${finalPrice0}`);
}

calculateDiscount(100, discountRate);
calculateDiscount(200);
calculateDiscount(1300, discountRate);

//ex 10 discount calculator

function calculateFinalPrice(newPrice, newDiscountRate = 0.15, newTaxRate = 0.08) {
  //calc discount 
  const calcDiscount = newPrice * newDiscountRate;
  //calc tax
  const newTaxActual = calcDiscount * newTaxRate;
  //add tax
  const newFinalePrice = newPrice - calcDiscount + newTaxActual;
  //log
  console.log(`Original Price: $${newPrice}`);
  console.log(`Discount: $${calcDiscount}`);
  console.log(`Tax: $${newTaxActual}`);
  console.log(`Final Price: $${newFinalePrice}`);
}

calculateFinalPrice(100);
calculateFinalPrice(250, .2, .1);
calculateFinalPrice(100, .2, .1);
calculateFinalPrice(101, .2, .1);

