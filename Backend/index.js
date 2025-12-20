 const express =require('express');
 const cors=require('cors')
 const app=express();
 const axios =require('axios')
 const data=[];
 app.use(cors());
 app.use(express.json());

 console.log("App configured")
 
 app.post('/enquiry',(req,res)=>{
     const {name,email,description,servicetype,budget }=req.body;
     if(!name|| !email  || !servicetype ||  ! description){
         return res.status(400).json({error:"All fields are required"});
     }
     data.push(req.body);
     res.status(201).json({message:"Enquiry submitted successfully"});
     console.log(req.body);
 })
 
 app.get('/enquiry/all',(req,res)=>{
     const response=data;
     res.status(200).json(response);
 })

 app.get('/',(req,res)=>{
    console.log("PING received");
    res.status(200).send("PONG");
 })


 

 console.log("Routes configured")
 
 const server = app.listen(8000,()=>{
     console.log("server connected on port 8000")
     setInterval(async ()=>{
         try{
             const res = await axios.get('http://localhost:8000/');
             console.log("PING - Response:", res.data);
         }catch(e){
             console.log("PING - Error:", e.message);
         }
     }, 20000);
 });

 console.log("Server started, waiting for connections...")

 server.on('error', (err) => {
     console.error('Server error:', err);
 });

 process.on('uncaughtException', (err) => {
     console.error('Uncaught Exception:', err);
 });