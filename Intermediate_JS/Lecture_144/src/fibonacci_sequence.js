/* 
Aim:
A function that will generate the fibonacci sequence

Parameters:
The number of elements to generate from the sequence 

Output:
The sequence
*/
function generateFibonacciSequence(n) {
    var sequenceArray = [0, 1];

    var openBracket = "[";
    var closeBracket = "]";
    var seperator = " | ";

    /* If n was 0 then print [] */
    if(n === 0) {
        console.log(openBracket + closeBracket);
    }

    /* If n was 1, then print [0] */
    else if(n === 1) {
        console.log(openBracket + 0 + closeBracket);
    }

    /* if n was 2, then print [0 | 1] */
    else if(n === 2) {
        console.log(openBracket + 0 + seperator + 1 + closeBracket);
    }

    /* Iterate through n and generate the sequence */
    else {
        var next = null;
        for(var i = 2; i < n; i++) {
            next = sequenceArray[i-2] + sequenceArray[i-1];
            sequenceArray.push(next);
        }

        console.log(sequenceArray);
    }
}

generateFibonacciSequence(10);