const express=require('express');
const evalute=express.Router();
const {rank, evaluateanswer}=require('../controllers/evaluatecontroller');


evalute.post('/evaluate-answer',evaluateanswer)
evalute.get('/rank-candidates',rank)

module.exports=evalute;