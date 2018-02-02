// src/bmi_calculator.js

function BMICalculator() {}

BMICalculator.prototype.metric_bmi = function(obj) {
  var weight = obj.weight;
  var height = obj.height;
  if (weight > 0 && height > 0) {
    var finalBmi = weight / (height / 100 * height / 100);
    obj.bmiValue = parseFloat(finalBmi.toFixed(2));
    setBMIMessage(obj);
  }
}

BMICalculator.prototype.imperial_bmi = function(obj) {
  var weight_lb = obj.weight_lb;
  var height_feet = obj.height_feet;
  var height_inch = obj.height_inch;
  if (weight_lb > 0 && height_feet > 0 && height_inch > 0) {
    var finalBMI = (weight_lb * 703) / ((height_feet * 12) + height_inch) ** 2
    obj.bmiValue = parseFloat(finalBMI.toFixed(2));
    setBMIMessage(obj);
  }
};

function setBMIMessage(obj) {
  if (obj.bmiValue < 18.5) {
    obj.bmiMessage = "Underweight"
  }
  if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
    obj.bmiMessage = "Normal"
  }
  if (obj.bmiValue > 25 && obj.bmiValue < 30) {
    obj.bmiMessage = "Overweight"
  }
  if (obj.bmiValue > 30) {
    obj.bmiMessage = "Obese"
  }
}