const express =require('express');

const app=express();
const jsonwebtoken=require('jsonwebtoken');

app.get('/',async(req,res)=>{
   let token = await jsonwebtoken.sign({
   name:"srinivasan",
    date:new Date
   },"sakkara",{
    expiresIn:"10"
})
   console.log(token);
    res.json({
        message:"success",
        token:token

    })
});


app.get("/check/:token",async(req,res)=>{

    console.log(req.params.token);
    let token=req.params.token;
    try{
     
    let result=await jsonwebtoken.verify(token,"sakkara");
    console.log(result);
    if(result){
        res.json({
            message:"new success",
            name:req.params.token,
            date:result.date
        });
    }
    else{
        res.status(500).json({
            message:"Data is null",
            
        });
    }
    

    }catch(err){
       console.log(err);
       res.status(401).json({
        message:"Error"
       })
    }
    
})

app.listen(3900,()=>{
    console.log("server listin in the port")
})