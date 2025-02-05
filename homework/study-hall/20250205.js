function sortArray(arr) {
  let currentNumber = 0;
  let sortedArray = [];

  for (let i = 0; i < arr.length; i++) {
    currentNumber = arr[i];

    if (arr[i] < arr[i+1]){
      sortedArray.push(arr[i]);
    }else {
      sortedArray.push(arr[i+1]);
      console.log(sortedArray);
  }
  }
};


sortArray([2, 4, 7,0, 1, 2, 5, 3, 7, 23])
