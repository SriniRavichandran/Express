const express=require('express');
const bodyparser=require('body-parser');
const mangodb=require('mongodb');

const dbo=require('./db')

const app=express();

app.get('/', (req, res) => {  res.sendFile(__dirname + '/create.html')})

app.post('/store_book', (req, res) =>
 {  res.sendFile(__dirname + '/create.html')})

app.listen(8090,()=>{
    console.log("http://"+"localhost:"+8090)
})