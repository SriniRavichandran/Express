const express=require('express');
const app=express();

const port=3000

// app.get('/',(req,res)=>{
   
//     res.send("Today is your day because you learn more concept");
// })


// app.all('/',(req,res)=>{
//     console.log('/api called with method: ', req.method);
//     res.send("Today is your day because you learn more concept");
   
// })


//Routing 

app.get('/', (req, res) => {
    res.send('root')
  })

//   app.get('/about', (req, res) => {
//     res.send('about')
//   })

app.get('/random.text', (req, res) => {
    res.send('random.text')
  })
  


app.listen(port,()=>{
    console.log('http://localhost:'+port);
})
