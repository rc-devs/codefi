//homework exercises, profile and car object 
 
// personal profile decision making
//profile variables
const age = 16;
const height = 130;
const temp = 64;
const hasTicket = true;

//(additional checks)
/* const age = 20;   
const height = 111;
const temp = 71;
const hasTicket = false;
 */

//can ride?
if (age >= 10 && height >= 120) {
  console.log("You can ride the rollercoaster!");
} else {
  console.log("You cannot ride the rollecoaster.");
}

//can enter vip
if (age >= 18 || hasTicket === true) {
  console.log("You can enter the VIP lounge.");
} else {
  console.log("You cannot enter the VIP lounge.");
}

//what clothes (my code)
if (temp >= 70) {
  console.log("Wear something light!");
} else if (temp <= 69) {
  console.log("Wear a jacket!");
}

// what clothes (lecture code)
let attire = temp < 70 ? "Wear a jacket!" : "Wear something light!";
console.log(attire);


//free snack
if (age >= 18 && hasTicket === true) {
  console.log("You get a free snack!");
} else {
  console.log("No snack for you.");
}

//dom quick exercise car object

//car object I. 
/* const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  mileage: 12000, 
} */

//car object II, .drive method 
/* const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  mileage: 12000,

  drive: function(number) {
    newMileage = this.mileage + number;
    console.log(`You drove ${number} miles. New mileage: ${newMileage}.`);
  }
}

car.drive(); */   //test log, input number

//car object III, .carAge method

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  mileage: 12000,

  drive: function(number) { //I see how this can be trimmed up by using ternary operators
    newMileage = this.mileage + number; //(this.mileage += number;)
    console.log(`You drove ${number} miles. New mileage: ${newMileage}.`);
  },

  carAge: function() {
    const currentYear = new Date().getFullYear(); 
    return currentYear - this.year;
  }
};


//testlogs
car.drive(200);
console.log(`Car age: ${car.carAge()} years`);