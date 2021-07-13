import fs from 'fs'
import express from "express";
import { BMICalc } from "../bmi/bmiclac.js";
import { BMICategory } from "../bmi/bmicategory.js";

//import bmiData from ('./somefile.json')

//import bmiData from "..bmi.json"

//var bmiData = null;
// Read users.json file
// 18.4 and below
// Health risk
//                      <18.5;          18.5 - 24.9 ;   25 - 29.9 ;   30 - 34.9;      35 - 39.9;     40 and above
const bmiCatNames = ['Underweight', 'Normal weight', 'Overweight', 'Moderately obese', 'Severely obese', 'Veryseverely obese']
const hrCategory =  ['Malnutrition risk', 'Low risk', 'Enhanced risk', 'Medium risk', 'High risk',        'Very high risk'];
const bmiCatRange = [18.5,                  [18.5, 25],[25, 30],        [30, 35],       [35, 40],           40];
const data = JSON.parse(fs.readFileSync('./tests/bmi.json', 'utf-8'))
console.log(data)
var bmiCat = new BMICategory(bmiCatRange,bmiCatNames,hrCategory);
console.log(bmiCat.getBMICatergory(23))
var bmiCalc = new BMICalc(data, bmiCat);
//bmiCalc.generateBMIData()
var bmiData =  bmiCalc.generateBMIData();
console.log(bmiData)
//newBmi
    
const br = express.Router();
br.get('/',(req,res)=>{
    res.send(bmiData);
})
export default br;