/* Set the max number of characters allowed in the prompt */
var maxAllowedCharacters = 200;

/* Prompt the user and register their input */
var input = prompt("Express your thoughts in 200 characters or less! Can you do that?");

/* Store the user's input length */
var inputLength = input.length;

/* Slice the input and return the result */
var slicedInput = input.slice(0, 200);

/* Alert the user if they exceeded the max characters allowed */
if(inputLength > maxAllowedCharacters) {
    alert("Your thoughts are " + inputLength + "/" + maxAllowedCharacters + ". Your input has been reduced and is now: " + "\n" + 
    slicedInput);
} else {
    alert("Total Charaters: " + inputLength + "/" + maxAllowedCharacters);
}