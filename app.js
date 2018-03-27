let input = document.getElementById('input');
let output = document.getElementById('output');
let runMemory = '';
let digit = '0';
let displayValue = '';
const maxLength = 16;
let x;
let symbol;
let operator;
let func;

var add = (x,y) =>
{return(x + y)}
var subtract = (x,y) =>
{return(x - y)}
var multiply = (x,y) =>
{return(x * y)}
var divide = (x,y) =>
{if(y==0){return"opps";}else{return(x / y)}}
var exponent = (x,y) =>
{return Math.pow(x,y)}


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
//switch positivity and negativity
var changePolar = () =>
  {
    if(input.innerHTML.charAt(0) !=  '-'){
    input.innerHTML = '-' + input.innerHTML;
    }else{
    input.innerHTML = input.innerHTML.slice(1);
    }
  }
//clear entry
var clearAll = () =>
    {
      input.innerHTML = '';
    }
//clear all, destroy arrays. Backspace will be replacement until later
var backSpace = () =>
    {
      input.innerHTML = input.innerHTML.slice(0,-1);
    }

var funcSelect = (symbol) =>
  {
    if(input.innerHTML != ''){
      switch (symbol) {
        case '+':
          operate = add;
          break;
        case '-':
          operate = subtract;
          break;
        case '×':
          operate = multiply;
          break;
        case '÷':
          operate = divide;
          break;
        case '^':
          operate = exponent;
          break;
        }
      x = Number(input.innerHTML);
      input.innerHTML = '';
    }
  }

var runOperate = () =>
  {
    if(input.innerHTML != ''){
      y = Number(input.innerHTML);
      input.innerHTML = operate(x,y);
    }
  }
