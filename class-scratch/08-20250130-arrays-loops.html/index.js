//for loop
const colors = ["red", "blue", "green", "pink"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
} //becomes false when i = 4

console.log(colors[2]);


//mixed array
const mixedArray = [1, 'string', 'potato', false, {name: "potato"}, [10, 20]];

console.log(mixedArray);
console.log(mixedArray[5][1]); //digs deep into arrays within arrays


// modify arrays
const colors2 = ["red", "blue", "green", "pink"];
colors2.push('orange');

console.log(colors2);

colors2.pop(); //remove orange
console.log(colors2);

colors2.splice(2, 0, 'orange');
console.log(colors2)


// loop
let count = 3;

while (count > 0) {
  console.log(count);
  count--;
}
console.log(count);

//for...of loop produces the item
let fruits = ['apple', 'orange', 'cantelope']
  for (const fruit of fruits) {
    console.log(fruit);
  }

//for...in loop
const user = {
  name: 'Travis',
  age: 30,
  profession: "Software developer/Code coach"
};

for (const key in user) {
 if (Object.hasOwnProperty.call(user, key)){
    console.log(`${key}: ${user[key]}`);
  };
}

//
function sum() {
  let sum = 0; //stores answer
  let numbers = [1, 20, 30, 80] //array variable

  for (let i = 0; i < numbers.length; i++) {
    let currentIndex = numbers[i]
    console.log(currentIndex);
    sum += currentIndex;
  }
  console.log(`Your total: ${sum}`);
};

sum()


//
function fillEmptyArray() {
  let emptyArray = [];

  for (let i =1; i <= 10; i++) {
    let newNumbers = i;
    numbers.push(newNumbers);
  }
  }

//log an array of the old array double, double each number
function doubledNumbers() {
  const numbers =[2,5,9,1]
  const doubled =[];

  for (let i = 0; i <numbers.length; i++) {
   doubled.push(numbers[i] * 2)
}
console.log(doubled);
}

doubledNumbers();


/* //log only even numbers
function evenNumbers() {
  const numbers = [2,5,9,1,4,6,8]
  let evens = []

  for (let i = 0; i <numbers.length; i++) {
    if (number[i] % 2 === 0)
      even.push(numbers[i])
  }
  console.log(evens)
}
evenNumbers()//invoke function to run */