function bmiCalculator (weight, height) {
    /* Calculate the BMI assuming that all inputs will be valid */
    var bmi = (weight / (height * height));
    
    /* Rounding the value to one decimal place */
    if(bmi % 1 == 0) {
        bmi = bmi.toFixed(0);
    } else {
        bmi = bmi.toFixed(1);     
    }
   
    var interpretation = "";
    
    if(bmi < 18.5 ) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    } else if(bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    return interpretation;
}

alert(bmiCalculator(60, 2));