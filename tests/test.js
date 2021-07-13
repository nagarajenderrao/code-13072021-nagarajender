import assert from "assert";
import { BMICalc } from "../bmi/bmiclac.js";
import { BMICategory } from "../bmi/bmicategory.js";
import path from 'path';
import fs from 'fs';
import { assertTaggedTemplateExpression } from "@babel/types";
//var assert = require('assert');
  const bmiCatNames = ['Underweight', 'Normal weight', 'Overweight', 'Moderately obese', 'Severely obese', 'Very severely obese']
  const hrCategory =  ['Malnutrition risk', 'Low risk', 'Enhanced risk', 'Medium risk', 'High risk',        'Very high risk'];
  const bmiCatRange = [18.5,                  [18.5, 25],[25, 30],        [30, 35],       [35, 40],           40];
  var bmiCat = new BMICategory(bmiCatRange,bmiCatNames,hrCategory);

describe('BMICategoryTests', function() {
  var testList =[[ 24, 'Normal weight', 'Low risk' ],
                 [ 17, 'Underweight', 'Malnutrition risk' ],
                 [ 25, 'Overweight', 'Enhanced risk' ],
                 [ 34, 'Moderately obese', 'Medium risk' ],
                 [ 38, 'Severely obese', 'High risk' ],
                 [ 48, 'Very severely obese',  'Very high risk' ],
                ]
  testList.forEach(expectVals => {
    it('Test with BMI ' + expectVals[0], function() {
      console.log('########## Begin: Test with BMI :' + expectVals[0] + ' ##########')
      bmiCat.getBMICatergory()
      console.log("getting BMI Caterogy and Health Risk value for BMI: " + expectVals[0])
      var bmiDetails  = bmiCat.getBMICatergory(expectVals[0])
      console.log(bmiDetails)
      assert.equal(bmiDetails[0], expectVals[0]);
      assert.equal(bmiDetails[1], expectVals[1]);
      assert.equal(bmiDetails[2], expectVals[2]);
      console.log('########## End: Test with BMI :' + expectVals[0] + ' ##########')
    });
  })


  describe('BMICalcTests', function() {
    const data = JSON.parse(fs.readFileSync('./tests/bmi.json', 'utf-8'))
    var bmiCalc = new BMICalc(data, bmiCat);
    it('Test BMI Calc ' , function() {
      console.log('########## Begin: Test with BMICalcTests ##########')
        var bmiData = bmiCalc.generateBMIData()  
        console.log(bmiData)
        var row = bmiData[0]
        assert.equal(row['BMI'], '32.83');
        console.log('########## end: Test with BMICalcTests ##########')
    });
  });

});
