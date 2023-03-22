const express=require('express');
const app = express();
const bodyparse=require('body-parser');
const exhbs=require('express-handlebars');


app.engine('hbs',exhbs.engine({layoutsDir:'views/',defaultLayout:"main",extname:".hbs"}));

app.set('veiw engine','.hbs');

app.set('views','./views');



app.get('/',(req,res)=>{
    let msg="srinivasan";
    res.rendres.sendFile(__dirname + "/view/main.hbs");

})

app.get('/',(req,res)=>{
    let msg="srinivasan";
    res.render('main',{msg})
})

const host='localhost'

app.listen(3690,()=>{
    console.log(`running server : http://${host}:${3690}`);
})



