// src/person.js

function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
  this.weight_lb = attr.weight_lb;
  this.height_inch = attr.height_inch;
  this.height_feet = attr.height_feet;
};

Person.prototype.calculate_bmi = function() {
  calculator = new BMICalculator();
  calculator.metric_bmi(this);
  };

  Person.prototype.calculate_bmi_imp = function() {
    calculator_imp = new BMICalculator();
    calculator_imp.imperial_bmi(this);
    };
