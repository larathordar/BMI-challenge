 //spec/person_spec.js

describe("Person", function() {
  var person;

  beforeEach(function() {
      person = new Person( {weight: 90, height: 186, weight_lb: 110, height_feet: 5, height_inch: 5});
  });

//IMPERIAL METHOD SPECS
  it ("should have weight_lb of 110", function() {
      expect(person.weight_lb).toEqual(110);

  });

  it ("should have height_feet of 5", function() {
      expect(person.height_feet).toEqual(5);
  });

  it ("should have height_inch of 5", function() {
      expect(person.height_inch).toEqual(5);
  });

  it("should calculate BMI value", function() {
    person.calculate_bmi_imp();
    expect(person.bmiValue).toEqual(18.30)
  });

  it("should have a BMI Message", function() {
    person.calculate_bmi_imp();
    expect(person.bmiMessage).toEqual("Underweight")
  });

//METRIC METHOD SPECS
  it ("should have weight of 90", function() {
      expect(person.weight).toEqual(90);

  });

  it ("should have height of 186", function() {
      expect(person.height).toEqual(186);
  });

  it("should calculate BMI value", function() {
    person.calculate_bmi();
    expect(person.bmiValue).toEqual(26.01)
  });

  it("should have a BMI Message", function() {
    person.calculate_bmi();
    expect(person.bmiMessage).toEqual("Overweight")

});
