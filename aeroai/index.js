const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
const evaluaterouter=require('./src/routes/ans-evalrouter')

app.get('/',(req,res)=>{
res.send("Welcome to AirevoLabs")
})

app.use(express.json());
app.use("/api/v1",evaluaterouter)
app.use("/api/v1",evaluaterouter)
app.listen(process.env.PORT,()=>{
    console.log("server is started !!"+process.env.PORT)
})