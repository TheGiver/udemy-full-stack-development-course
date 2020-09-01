/*
Aim: 
Create a function that takes in 2 names as input and calculates the 
percentage of how much the 2 names match. 

Of course, the matches are done randomly using Math.random()
*/
function loveCalculator() {
    var partnerOne = prompt("Name One: ");
    var partnerTwo = prompt("Name Two: ");

    var randomNumber = Math.random();
    randomNumber = randomNumber * 100;
    randomNumber = randomNumber.toFixed(1);

    alert(partnerOne + " & " + partnerTwo + "\n" + "You have a matching percentage of: " + randomNumber + "%");

}

loveCalculator();