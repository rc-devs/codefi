let productName: string = 'string';
let productPrice: number = 1600;
let isInStock: boolean = true;

function calculateDiscount(price: number, discountRate: number): number{
  return price - (price *(discountRate/ 100));
};

let discountedPrice = calculateDiscount(1200, 10) //already TypeScript assigned in the function above

console.log(discountedPrice);



//setting a model/interface
interface Product {
  name: string,
  price: number,
  isInStock: boolean;
}; //can use interface to make sure you and others stick to this structure


let newProduct: Product = { //tell them it needs to match the model/interface
  name: 'laptop',
  price: 1800,
  isInStock: true,
}