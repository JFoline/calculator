let input = document.getElementById('input');
let output = document.getElementById('output');
let runMemory = '';
let digit = '0';
let displayValue = '';

var add = (x,y) => {return(x + y)}
var divide = (x,y) => {return(x - y)}
var multiply = (x,y) => {return(x * y)}
var divide = (x,y) => {return(x / y)}
var operate = (operator, x, y) => { return operator(x ,y)}
let x =5;
let y =-9;



var clearAll = () =>
  {
    input.innerHTML = '';
  }

var typeDig = (digit) =>
  {
    input.innerHTML += digit;
  }

var funcSelect = (symbol) =>
  {
    switch (symbol) {
      case '+':

        break;
      default:

    }
  }

var operateTest = () =>
  {

  }
