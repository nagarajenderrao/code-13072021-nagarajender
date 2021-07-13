import express from "express";
import bodyParser from "body-parser";
import br from "./routes/bmi.js";


const app = express();
const PORT = 5555;
app.use(bodyParser.json());
app.use('/BMI', br);
app.get('/',(req, res)=>{
   console.log("TestGet!!");
   res.send("Helloooo HomePage!");

})

app.listen(PORT, ()=>console.log('AppServer running http://localhost:{$PORT}'));