/* Array to store elements */
var values = [];

/*
Aim:
A function that pushes integers to an array everytime it gets called. 

Return:
no return
*/
function fizzBuzz() {
    /* store the length of array */
    var valuesLength = values.length;

    /* Push a new element to the array */
    var data = valuesLength + 1;

    if(data % 3 === 0 && data % 5 === 0) {
        values.push("FizzBuzz");
    } else if (data % 3 === 0) {
        values.push("Fizz");
    } else if(data % 5 === 0) {
        values.push("Buzz");
    } else {
        values.push(data);
    }

    /* Print the content of the array */
    console.log(values);
}