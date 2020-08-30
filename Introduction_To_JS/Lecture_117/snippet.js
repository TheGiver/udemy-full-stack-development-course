/* prompt the user to enter their name and we will only use their first name */
var input = prompt("Please enter your name in the space below:");

/* split the input to retrieve the first name only */
var splitName = input.split(" ");

/* Retrieve the first name */
var firstName = splitName[0];

/* Set the first name to lower case, and only capitalise the first letter */
firstName = firstName.toLowerCase();
var firstLetter = firstName.slice(0,1);
firstLetter = firstLetter.toUpperCase();

/* retrieve the first name without the first letter */
firstName = firstName.slice(1,firstName.length);
firstName = firstLetter + firstName;

/* print the result */
alert("Hello " + firstName);
