const add = function(...inputs) {
	let sum = 0;
  for (let input of inputs) sum += input;
  return sum;
};

const subtract = function(...inputs) {
  return inputs[0] - inputs[1];
};

const sum = function(input) {
	let sum = 0;
  input.forEach(element => {
    sum += element;    
  });
  return sum;
};

const multiply = function(input) {
	let sum = 1;
  input.forEach(element => {
    sum *= element;    
  });
  return sum;
};

const power = function(...input) {
  return input[0] ** input[1];
};

const factorial = function(input) {
	let sum = 1;
  for (let i = input; i > 0; i--) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
