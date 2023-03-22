const express=require('express');

const route=express.Router();

const usermodel=require('./model/usermodel')

route.post('/',async(req,res)=>{
    const newuser=new usermodel(req.body);
    try{
    await newuser.save();
    res.status(200).json({
        "message":"user was insert successfully"
    })
    }catch{
        res.status(200).json({
            "err":"user was not insert "
        })
    }
})
module.exports=route;