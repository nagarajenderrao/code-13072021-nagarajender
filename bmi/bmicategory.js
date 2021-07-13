/*
BMICatergory will be used to determine Health Risk Category based on BMI index
It take two array arguments and both should have same lenght
    bmiCategoryRange : range of each category example:- [25,[25, 30], [30, 35], [35, 40], 40]
                        First and last entries will have only one value and middle values will be in range.
    bmiCategoryNames : names of each category 
*/
export class BMICategory{
    constructor(bmiCategoryRange, bmiCategoryNames, bmiHealthRiskCategoryNames){
        //TODO need to validate each range in bmiCategoryRange as well
        if (!bmiCategoryRange || !bmiCategoryNames || !bmiHealthRiskCategoryNames || 
            bmiCategoryNames.lenght != bmiCategoryRange.lenght || bmiCategoryNames.lenght != bmiHealthRiskCategoryNames.lenght){
            //TODO need to report actual issue
            throw new Error('Invalid BMI Catergory/ Health Risk names Data!');
        }
        this.CategoryLength = bmiCategoryNames.length-1
        this.bmiCategoryRange = bmiCategoryRange;
        this.bmiCategoryNames = bmiCategoryNames;
        this.bmiHealthRiskCategoryNames = bmiHealthRiskCategoryNames
    }
/*
getBMICategory method will be used to get the Health Risk catergory name. It takes one argument which is bmi 
return Health Risk CategoryName
*/
    getBMICatergory(bmi){
        if( bmi < this.bmiCategoryRange[0])
        {   return [bmi, this.bmiCategoryNames[0], this.bmiHealthRiskCategoryNames[0]];
        }
        for(var i = 1; i < this.CategoryLength; i++){
            var range = this.bmiCategoryRange[i]
            if (bmi >= range[0] && bmi<range[1]){
                return [bmi, this.bmiCategoryNames[i], this.bmiHealthRiskCategoryNames[i]];
            }
        }
        
        return [bmi, this.bmiCategoryNames[this.CategoryLength], this.bmiHealthRiskCategoryNames[this.CategoryLength]];
    }
}