//7a - greet function
function greet(){
  console.log("Hello!");
};

greet();

//7b
function greet(name){
  console.log(`Hello ${name}`);
};

greet('John Doe');

//7c
function greet(name){
  if (name) {
  console.log(`Hello ${name}`);
} else {
  console.log(`Hi there!`);
}
};

greet('John Doe');
greet();

//7d
function convertToFahrenheit(celsius) {
  fahrenheit = (celsius * 9 / 5) +32;

  return fahrenheit;
};

convertToFahrenheit(25);

//7e
function convertToCelsius(fahrenheit) {
  celsius = (fahrenheit -32) * 5/9;

  return celsius;
};

convertToCelsius(86);

//7f
/* function convertTemperature(degrees, unit) {

function convertUnit(){
  if (unit === 'C') {
    function convertToFahrenheit(celsius) {
      fahrenheit = (celsius * 9 / 5) +32;
    
      return fahrenheit;
    };
    
  } else if (unit = 'F') {
    function convertToCelsius(fahrenheit) {
      celsius = (fahrenheit - 32) * 5/9;
    
      return celsius;
    };
  }
  }
}

convertTemperature(100, 'C'); */