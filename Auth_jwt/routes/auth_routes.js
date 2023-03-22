const express=require('express');
const authRoutes=express.Router();






authRoutes.get('/',(req,res)=>{
    res.send("working")
})

authRoutes.get('/user',(req,res)=>{
    res.send("user")
})



module.exports = authRoutes;

