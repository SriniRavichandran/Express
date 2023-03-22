const express=require("express");
const mongoose=require('mongoose');
const morgan=require('morgan');
const userroute=require('./userroute');
const app=express();

app.use(express.json);
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/usermode',{
    useNewUrlParser:true,
    useUnifiedTopology:true
 }).then((res)=>{
    console.log("database is connect successfull");
}).catch((err)=>{
    console.log(err)
});

app.use('/user',userroute);
app.listen(8090,()=>{
    console.log("server is running");
});

