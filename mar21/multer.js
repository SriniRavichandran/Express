const express=require('express');
const app=express();
const path=require('path');
const multer=require('multer');

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'Imagefile');
    },
    filename:(req,file,cb)=>{
        console.log(file);
        cb(null,Date.now()+path.extname(file.originalname));
    }
});

const upload=multer({storage:storage})

app.set("view engine","ejs");

app.get('/upload',(req,res)=>{
    res.render("upload.ejs");
});

app.post('/uploads',upload.single('image'),(req,res)=>{
    res.send("image Upload");
});

app.listen(3000,()=>{
    console.log("http://localhost:3000");
});


