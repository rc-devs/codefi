
// counter button (not working need to go through, null error)
const iBtn = document.querySelector('#iBtn');
const dBtn = document.querySelector('#dBtn');
const countInsert = document.querySelector('#insert-count');

iBtn.addEventListener('click', clickIncrementCountHandler);
dBtn.addEventListener('click', clickDecrementCountHandler);

let count = 0;

function clickIncrementCountHandler() {
  count++
  console.log(count);
  countInsert.textContent = count
}

function clickDecrementCountHandler() {
  count--
  console.log(count);
  countInsert.textContent = count;
}

// quote generator
let quotes = ['potato', 'tomato', 'learning to code'];

const btn = document.querySelector('#quoteButton')
const quotePlace = document.querySelector('#quoteGoesHere');

btn.addEventListener('click', clickHandler);

function clickHandler() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
 quotePlace.textContent = (quotes[randomNumber]);
}