console.log('connected');

//test 1 simple addition
function add(a, b) {
  return a + b;
};


describe('simple addition', ()=> {
  it('should add', () => {
    expect(add(2, 3)).toBe(5);
  })
});


//test 2 string concatenation
function concatStrings(string1, string2) {
  let newString = string1.concat(' ', string2)
  console.log(newString);
  return newString;
};
concatStrings('holy', 'shit'); //test function

describe('concat string function', () => {
  it('should concat 2 string parameters from concatStrings', () => {
   expect(concatStrings/* ('holy', 'shit') */).toBe("holy shit");
  });
});


//test 3 array length test

/* const testArray1 = [1, 2, 3, 4];

describe('test testArray1 length') */