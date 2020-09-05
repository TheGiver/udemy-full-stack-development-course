function whosPaying(names) {
    
/******Don't change the code above*******/
    var output = " is going to buy lunch today!";
    
    /* 
    Case 1: names consists of 0 names 
    Case 2: names consists of 1 name 
    Case 3: names consists of more than one name 
    */
    if(names.length === 0) {
        output = "No one" + output;
    } else if(names.length === 1) {
        output = names[0] + output;
    } else {
        /* Generate a random number */
        var randomIndex = Math.floor(Math.random() * names.length);
        output = names[randomIndex] + output;
    }
    
    return output;

/******Don't change the code below*******/    
}