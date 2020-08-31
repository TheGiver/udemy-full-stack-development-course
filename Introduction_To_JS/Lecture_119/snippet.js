/*
Taking in user input which specifies the dog's age. 
We are assuming that the user will input integers at all times.
*/
var dogAge = prompt("Please provide your dog's age:");

/* Perform the calculation */
var humanAge = ((dogAge - 2) * 4) + 21;

/* Return the result to the user */
alert("Result: " + humanAge);