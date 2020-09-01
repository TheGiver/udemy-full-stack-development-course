/*
A function that will calculate the number of cartons of milk that could be bought 
with the money given by the master. 
*/
function buyMilk(money) {
    /* Check for negative */
    if(money < 0) {
        alert("Negative money does not exist!");
    }

    /* Calculate the amount of cartons that can be bought */
    var totalCartons = Math.floor(money / 1.5);
    
    /* Calculate the amount of money remaining */
    var remainder = money - (1.5 * totalCartons);

    /* print the result to the user */
    console.log("I have bought " + totalCartons + " carton(s) of milk");
    console.log("The remainder is: $" + remainder);

}

buyMilk(5);