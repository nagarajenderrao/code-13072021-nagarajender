export class BMICalc{
    constructor(data, bmiCat){
         this.data = data
         this.bmiCat = bmiCat
         this.bmiData = {}
    }

    /*It will generate the additinal column like BMI, BMICategory, HealthRisk and them to this.data
     */
    generateBMIData(){
        //cache the square value and same hight can be repeated multiple time and 
        //pick the square value from map if already available
        var heightSquareMap = {}
        //cache the BMICatergory and Health Risk infoand same BMI value can be repeated and
        //  pick the BMICategory and Health Risk from the map if already available
        var bmiMap = {}
        this.data.forEach(element => {
            var h = element['HeightCm']/100
            var w = element['WeightKg']
            bmiDetails = bmiMap[[w,h]]
            if(!bmiDetails){
                var hs = heightSquareMap[h]
                if(!hs){
                   hs = h * h
                    heightSquareMap[h] = hs
                }
                var bmiDetails = this.bmiCat.getBMICatergory((w/hs).toFixed(2))
                bmiMap[[w,h]] = bmiDetails
            }
            element['BMI'] = bmiDetails[0]
            element['BMICategory'] = bmiDetails[1]
            element['Health'] = bmiDetails[2]
        });
        //console.log(this.data)
        return this.data
    }
}
