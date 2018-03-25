let input = document.getElementById('input');
let output = document.getElementById('output');
let runMemory = '';
let digit = '0';
let displayValue = '';
let x;
let symbol;
let operator;
let func;

var add = (x,y) => {return(x + y)}
var subtract = (x,y) => {return(x - y)}
var multiply = (x,y) => {return(x * y)}
var divide = (x,y) => {return(x / y)}
var operate = (operator, x, y) => { return operator(x ,y)}

//type numbers
var typeDig = (digit) =>
  {
    input.innerHTML += digit;
  }
//type decimal
var typeDec = () =>
    {
    if (input.innerHTML.length == 0){
      input.innerHTML = '0.';
    }else{
      if (input.innerHTML.indexOf('.') == -1){
        input.innerHTML += '.';
        }
      }
    }
//clear entry
var clearEntry = () =>
    {
      input.innerHTML = '';
    }
//clear all, destroy arrays. Backspace will be replacement until later
var clearAll = () =>
    {
      input.innerHTML = input.innerHTML.slice(0,-1);
    }

var funcSelect = (symbol) =>
  {
    func = symbol;
    x = Number(input.innerHTML);
    input.innerHTML = '';
    console.log(func, x);
  }

var operateTest = () =>
  {
    y = Number(input.innerHTML);
    
    console.log(operator , x, y);
  }

var topOfTheGarbage = () =>
{
  switch (func) {
    case '+':
      operator = add;
      break;
    case '-':
      operator = subtract;
      break;
    case '×':
      operator = multiply;
      break;
    case '÷':
      operator = divide;
      break;
  }
}
