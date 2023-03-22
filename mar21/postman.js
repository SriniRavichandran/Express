const express=require('express');
const app=express();
const bodyParser=require('body-parser');


//app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get('/',function(req,res){
    res.send("hello postman ");
});

app.get('/getuser',function(req,res){
    var jsonObj={
         name:"postman",
         code:"39"
    }
    res.send(jsonObj);
});


app.post('/post',function(req,res){

    var array=[];
    var list=req.body;
    console.log(list);
    array.push(list);
    res.send(list);   
});



app.listen(3900,()=>{
    console.log("http://localhost:3900/")
});
