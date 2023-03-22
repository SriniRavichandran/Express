const express=require("express");

const authRoutes = express.Router();


authRoutes.get('/',(req,res)=>{
res.send("Hello working srini");
})

module.exports=authRoutes;