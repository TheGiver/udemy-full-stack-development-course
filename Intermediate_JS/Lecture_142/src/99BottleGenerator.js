/* Variable that starts count from 99 and decrements to 0 */
var totalBottles = 99;

/* A function that generate the lyrics */
function generateLyrics() {
    while(totalBottles >= 0) {
        var bottleWord = "bottles";

        if(totalBottles > 0) {
            if(totalBottles === 1) {
                bottleWord = "bottle";
            }

            /* Print the lyrics */
            console.log("\n" + totalBottles + " " + bottleWord + " of beer on the wall");
            console.log(totalBottles + " " + bottleWord + " of beer,");
            console.log("Take one down, pass it around, ");
            totalBottles--;
            console.log(totalBottles + " " + bottleWord + " of beer on the wall.");
        } else {
            bottleWord = "No more";
            console.log("\n" + bottleWord + " bottle of beer on the wall");
            console.log("*Burp* This was too much beer!");
            break;
        }
    }
}

generateLyrics();