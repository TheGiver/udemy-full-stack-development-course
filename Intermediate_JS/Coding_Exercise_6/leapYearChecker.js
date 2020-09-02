function isLeap(year) {
    
/**************Don't change the code above****************/    

    /* Check if it is divisible by 4, 100 & 400 */
    if(isDivisibleByX(year, 4)) {
        if(isDivisibleByX(year, 100)) {
            if(isDivisibleByX(year, 400)) {
                return "Leap year.";
            } else {
                return "Not leap year.";
            }
        } else {
            return "Leap year.";
        }
    } else {
        return "Not leap year.";
    }

/**************Don't change the code below****************/    

}

/* Function that checks whether the number is divisible by X */
function isDivisibleByX(year, X) {
    if((year % X) === 0) {
        return true;
    }
    
    return false;
}

var output = isLeap(2100);
console.log(output);