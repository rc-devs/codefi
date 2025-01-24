const price1 = 200;
const discountRate = .15;
const taxRate = .08;

const discountPrice = price1 - (price1 * discountRate);
const taxPrice = discountPrice * taxRate
const discountPriceTax = discountPrice + (taxPrice);


console.log(discountPrice);
console.log(discountPriceTax);
console.log("Original Price: " + price1 +", " +"Discount: " + discountPrice + ", " + "Tax: " + taxPrice + ", " + "Final Price: " + discountPriceTax);