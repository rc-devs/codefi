// i definitely had to look at the example in the reading. I had all the calculations but i did not quite understand where the 'variables' would go. i understand they are the parameters now
function calculateFinalPrice(price, discountRate = 0.1, taxRate = .08) {
    const discount = price * discountRate;
    const discountPrice = price - discount;
    const taxPrice = discountPrice * taxRate
    const finalPrice = discountPrice + taxPrice;


    console.log(`Original Price: $${price.toFixed(2)}`);
    console.log(`Discount: $${discount.toFixed(2)}`);
    console.log(`Tax: $${taxPrice.toFixed(2)}`);
    console.log(`Final Price: $${finalPrice.toFixed(2)}`);

    return finalPrice;
}

 calculateFinalPrice(200);
 calculateFinalPrice(300);
 calculateFinalPrice(24.23);
 calculateFinalPrice(23324343.23);
 calculateFinalPrice(2435464564);