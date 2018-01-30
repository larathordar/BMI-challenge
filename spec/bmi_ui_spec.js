//spec/bmi_ui_spec.js

describe('BMI_UI - index.html', function() {
   beforeEach(function() {
       jasmine.getFixtures().fixturesPath = '.';
       loadFixtures('index.html');
       $.holdReady(false);
   });

});
