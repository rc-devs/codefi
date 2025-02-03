//ex1
const applyDiscount = (prices, discount, callback) => {
  const finalPrice = prices.map((price) => price -(price*discount) / 100);
  console.log("ex1");
  callback(finalPrice);
}

const logData = (finalPrice) => { 
  console.log(`This is the discounted price ${finalPrice}`)
}

applyDiscount([10, 40, 3, 22, 5, 294, 17], 25, logData);


///ex2
/* console.log('ex2');
const squareAndPrint = (num) => {
  const squared = num.map(num * num)
console.log(squared);
};

squareAndPrint()
array = [10, 2, 7, 3, 120] */


//ex3 
const stringArray = ['hello', 'hi', 'bye'];
console.log(stringArray.reverse());

//ex4
let array = [1, 2, 3, 4, 5]

const filterArray = array.filter((num) => num % 2 != 0);
console.log(filterArray) 


//ex 5

setTimeout(() => {
console.log("task completed!") 
}, 5000);

setInterval(()=> {
  console.log('interval every 3')
}, 3000);





