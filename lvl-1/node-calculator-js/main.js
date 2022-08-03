//we need 4 funtions to ride the parameters of add, sub, mul, and division.
//we need a variable to declare to ask which operator the user wants to use.

const readline = require("readline-sync")

let num1 = readline.questionInt("what is your first number?")                                                                                     

let num2 = readline.questionInt("what is your second number?")

let num3 = readline.questionInt("what is your third number?")

let num4 = readline.questionInt("what is your fouth number?")

function add(x , y){
    return x + y;
}
function sub(x , y){
    return x - y
}
function divi(x , y){
    return x / y
}
function multiply(x , y){
    return x * y
}
operators = ["add", "sub", "divi", "multiply"],
index = readlineSync.keyInSelect(operators, "which operators")
console.log("num," + operators [index] + "what is your number?")