/* 
Aim:
The function will calculate how much time you have in months, weeks and days until 
you become 90 given it has been provided with your current age. 

Parameters:
Age: an integer that specifies your current age.

Assumption:
Age provided is always in years.
*/
function lifeInWeeks(age) {
    /* Case: Age is zero or less */
    if(age < 0) {
        console.log("Age cannot be negative bruh!");
    } else if(age === 0) {
        console.log("You got plenty of time left!!! You still a baby!!!");
    } else {
        /* Calculate number of years left until the person becomes 90 */
        var yearsLeft = 90 - age;

        /* Calculate the total amount of months left */
        var monthsLeft = yearsLeft * 12;

        /* Calculate the total amount of weeks left */
        var weeksLeft = yearsLeft * 52;

        /* Calculate the total amount of days left */
        var daysLeft = yearsLeft * 365;

        console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.");
    }
}

lifeInWeeks(56);