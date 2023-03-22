const express=require('express');
const app=express();
const hbs=require('hbs');
const path=require('path');


const collection=require('./mongodb');
const tempelatepath=path.join(__dirname,'../Tempelate');


app.use(express.json());
app.set("view engine","hbs");
app.set("views",tempelatepath);
app.set(express.urlencoded({extended:false}));


app.get('/',(req,res)=>{
    res.render("login");
})




app.get('/signup',(req,res)=>{
    res.render("signup");
})


app.post("/signup",async(req,res)=>{

const data={
    name:req.body.name,
    password:req.body.password
}
// const data = new collection({
//     name: req.body.name,
//     password:req.body.password
// });
// await collection.save();
// res.send(data);

await collection.insertMany([data]);

res.render("home");

})


app.post("/login",async(req,res)=>{
   
    try{
     const check = await collection.findOne({name:req.body.name});
     if(check.password === res.body.password){
        res.render("home");
     }
     else{
        res.write("wrong password");
     }
    }
    catch(err){
            res.write("error page");

    }

    res.render("home");
    
    })


app.listen(3690,()=>{
    console.log("server running ");
    console.log("http://localhost:"+3690);
})
