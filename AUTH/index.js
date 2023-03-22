const express =require('express');

const app=express();

const authRoutes=require('./AuthRoutes/authroutes')

app.use("/api/user",authRoutes)



app.listen(5001,()=>{
    console.log("http://localhost:"+5001);
})