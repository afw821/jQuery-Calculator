$(document).ready(function(){
//Set GLOBAL variables to an empty string, the value will be based on the user input
let firstNumber;
let secondNumber;
let operator;
let result;
let isOperatorChosen; //global variable to see if the operator has been chosen or not
//Function to set the state of out app by emptying the results 
const initializeCalculator = function (){
 firstNumber = "";
 secondNumber = "";
 operator = "";
 isOperatorChosen = false;
 isCalculated = false;
$("#first-number, #second-number, #operator, #result").empty();
}
//This onclick function handles when the first number and second number are clicked

//It adds it to the result section on the ID first and second number
$(".number").on('click', function () {

  //keyword this refers to the html element button (jQuery object) with the class number
  //conditional: if operator is chosen...
  if (isOperatorChosen) {
    //...second number = second number + value of ".number" class of button clicked
    secondNumber += this.value;
    //Append secondNumber to div with ID second-number 
    $("#second-number").html(secondNumber);
    //if above isn't true then do this...
  } else {
    //...firstnum = firstnum + value of number class button clikced
    firstNumber += this.value;
    //add firstnumber to div w/ ID first-number
    $("#first-number").html(firstNumber);
  }
});
//Onclick function that selects the operator, appends it and allows the second number to be appended to the page

$(".operator").on('click', function(){
    //sets isoperatorchosn to true so we can add it to results div
    isOperatorChosen= true;
    //sets the value of the operator
    operator = this.value;
    //appends the operator
    $('#operator').html($(this).text());

  });
  //This onclick function is what performs the mathematical operations and appends them when the = button is clicked
  $('.equal').on('click', function(){
    //the parseint method is what converts string representations of of numbers into actual integers
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    if(operator === "plus"){
      result = firstNumber + secondNumber;
    }
    if(operator === "minus"){
      result = firstNumber - secondNumber;
    }
    if(operator === "times"){
      result = firstNumber * secondNumber;
    }
    if(operator === "divide"){
      result = firstNumber / secondNumber;
    }
    if(operator === "power"){
      result = Math.power(firstNumber, secondNumber);
    }

    $('#result').html(result);
  });

  $('.clear').on('click', function(){
    //onclick function so when the clear button is cliked we reset the state of out application
    initializeCalculator();
  });
//call the function on page load to set the state of out app
  initializeCalculator();





});