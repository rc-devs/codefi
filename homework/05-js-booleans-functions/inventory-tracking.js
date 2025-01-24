//example from reading
function updateInventory(initialStock, soldItems) {
  let remainingStock = initialStock - soldItems;
  return remainingStock >= 0 ? remainingStock : "Stock unavailable";
}

console.log(updateInventory(100, 20)); // Output: 80
console.log(updateInventory(100, 120)); // Output: "Stock unavailable"

//the same as above with different variables. 

function newInventory(outputStock, inputStock) {
  let inventory = inputStock - outputStock;
  return inventory >= 0 ? inventory : "No inventory remaining";
}


console.log(updateInventory(10, 20));
console.log(updateInventory(10000, 10))
console.log(updateInventory(.3, .50));
console.log(updateInventory(10, 10));
console.log(updateInventory(.60, .50));