/* class notes 

console.log(900); //number
console.log("this is string data"); //string
console.log(true, false);

// math operators
console.log(5 - 5);
console.log(5 + 5);
console.log(5 / 5);
console.log(5 * 5);

//variables; let, const, var, 
var globalVariable = null; //var outdated, null is datatype
let localVariable = 100; // let change
const constantVariable = 100; // constant

console.log(globalVariable); */


// class exercises


//exercise 1
const var1 = 10;
const var2 = 5;

console.log(var1 + var2);
console.log((var1 - var2) / 2);

const calcTotal = var1 + var2;
const calcDifference = (var1 - var2) / 2;

console.log(calcTotal);
console.log(calcDifference);

//exercise 2
//pretend form input
const userName = 'John Doe';
const favColor = 'red';

const message1 = 'Hi! My name is ' + userName + "." + " My favorite color is " + favColor + "." + " Welcome!";
console.log(message1);

//exercise 3
const itemPrice = 10;
const tax = .07;

const totalPrice = itemPrice + (itemPrice * tax);
console.log(totalPrice);

//exercise 4
const firstName = 'John';
const lastName = 'Doe';

const fullName = firstName + " " + lastName;

console.log(fullName);

//exercise 5
let inventory = 100;
let subtract = 15;
let add = 20; 
const updatedInventory = inventory - subtract + add;

console.log("Inventory Updated: " + updatedInventory);

//exercise 6
const item2Price = 120;
const tax2 = 0.1;
const discount = .15;


const totalPrice2 = item2Price + (item2Price * tax2);
const discountPrice = totalPrice2 - (totalPrice2 * discount)

console.log(totalPrice2);
console.log(discountPrice);


















