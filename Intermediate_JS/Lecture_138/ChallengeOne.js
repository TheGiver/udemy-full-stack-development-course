var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

/*
Prompt the user to enter their name 

Assumption:
The user will only provide their first name 

*/
var userName = prompt("What is your name?");

/* Check if name is in the array, if not then print an appropriate message */
if(guestList.includes(userName)) {
    alert("Welcome!");
} else {
    alert("Sorry, your name is not on the list");
}