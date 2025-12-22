const express =require('express');

const app=express();

const data=[];

app.use(express.json());

app.post('/enquiry',(req,res)=>{
    const {name,email,description,servicetype}=req.body;
    if(!name|| !email  || !servicetype ||  ! description){
        return res.status(400).json({error:"All fields are required"});
    }
    data.push(req.body);
    res.status(201).json({message:"Enquiry submitted successfully"});
})

app.get('/enquiry/all',(req,res)=>{
    const response=data;
    res.status(200).json(response);
})

app.listen(8000,()=>{
    console.log("server connected ")
})