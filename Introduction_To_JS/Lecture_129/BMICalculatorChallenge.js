/*
Aim: 
A function that calculates and returns the BMI of a person. 

Parameters:
(a) weight (kg)
(b) height (m)

Return:
(a) BMI value
*/
function calculateBMI(weight, height) {
    var BMI = Math.round((weight / (height * height)));
    return BMI;
}

/* Testing purposes */
var result = calculateBMI(70, 1.75);
console.log(result);