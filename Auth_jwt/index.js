const express=require('express');
const app=express();
const authRoutes=require('./routes/auth_routes');



app.use(authRoutes);


app.listen("6000",()=>{
    console.log("server runing : "+" http://localhost:5000");
})