//11a array of numbers. change last value to 99
console.log('11a exercise')
const array11a = [10, 20, 30];
array11a.splice(2, 1, 99);
console.log(array11a);


//11b return last value
console.log('11b exercise');
function getLastValue(array) {
  const lastIndex = array.length -1;
  return (array[lastIndex]);
}
console.log(getLastValue([1, 20, 22, 24, 5]))
console.log(getLastValue(['hi', 'hello', 'good']));


//11c swap values
console.log('11c exercise');
function arraySwap(array) {
  const lastIndex = array[array.length -1] //grab last index
  const firstIndex = array[0]; //array first index (0)(hi)

  array.shift(); //remove first
  array.pop(); //remove last
  array.push(firstIndex); //place last
  array.unshift(lastIndex); //place first
  return array;
}
console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi', 'hello', 'good']))


//11d loop count by 2s
console.log('11d exercise');
for (i = 0; i <= 10; i++) {
  if(i % 2 !== 0) {
    i++
    console.log(i);
  }
  continue;
};


//11e loop countdown
console.log('11e exercise');
for (i = 5; i <= 5; i--) {
  console.log(i);
  if (i === 0) {
    break;
  }
}


//11f while loop countdowns
//ex 1 countdown by 2s
/* console.log('11f exercise 1');
let index = 5;
while (index >= 0) {
 if(index % 2 === 0) {
  console.log(index--);
 }
} */




