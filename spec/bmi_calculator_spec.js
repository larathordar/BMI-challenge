// spec/bmi_calculator_spec.js

describe("BMICalculator", function() {
  var calculator;
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186, weight_lb: 110, height_feet: 5, height_inch: 5});
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using metric method", function() {
    calculator.metric_bmi(person);
    expect(person.bmiValue).toEqual(26.01);
  });

  it("calculates BMI for a person using imperial method", function() {
    calculator.imperial_bmi(person);
    expect(person.bmiValue).toEqual(18.30);
  });
});
