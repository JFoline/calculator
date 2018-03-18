let input = document.getElementById("input");
let output = document.getElementById("output");

var add = (x,y) => {return(x + y)}
var divide = (x,y) => {return(x - y)}
var multiply = (x,y) => {return(x * y)}
var divide = (x,y) => {return(x / y)}
var operate = (operator, x, y) => { return operator(x ,y)}
let x ='5';
let y ='9';
output.innerHTML = y;
console.log(multiply(x,y));
