// const express =require('express');
// const app=express();
// const uuid=require('uuid').v4;

// app.use(express.json());

// const session={};

// app.post('/login',(req,res)=>{
//     const {username,password}= res.body;
//     if(username !=="admin" && password !=="admin"){
//         return res.status(401).send('invalid username or password');
//     }

//     const sessionId=uuid();
//     session[sessionId]={username,userId:1};
//     res.set('Set-Cookie',session=`${sessionId}`);
//     res.send('success');
// });



// app.get('/todo',(req,res)=>{
//     const sessionId=req.headers.cookie?.split('=')[1];
//     const userSession=session[sessionId];
// })

// app.listen(3030,()=>{
//     console.log("server connected")
// })


const express = require('express');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const morgan=require("morgan");



const app=express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({secret:'secretkey',saveUninitialized:true,resave:true,cookie:{maxAge:10000}}));

app.get('/',function(req,res){
if(req.session.num){
    req.session.num++;
    res.setHeader('Content-Type','text/html');
    res.write('<p>'+req.session.num+'</p>');
    res.write('<p>'+(req.session.cookie.maxAge / 1000)+'</p>');
    console.log(session({secret:'secretkey',saveUninitialized:true,resave:true,cookie:{maxAge:10000}}));
    res.end();
}
else{
    req.session.num=1;
    res.end("refresh page");
}
})

app.listen(1234,function(){
console.log("server started ...");
console.log('http://localhost:1234')
})