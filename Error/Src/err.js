const { CustomError } = require("./custom_error");

const error= new Error("something error");
//const {CustomError}=require('./custom_error');

//console.log(error);
//console.log(error.stack);
//console.log(error.message);

//throw new Error("i am error")

 

// throw new CustomError("This a Custom error");


// try{
//     ErrorFunction();
// }catch (e){
//     console.log("error Occurred")
//     console.log(e)
// }
// function ErrorFunction(){
//    // console.log("i am a error function");
   
// }


//uncaught Exception

// function ErrorFunction(){
//    const data=fetch("localhost:300/api");
    
// }

// process.on("uncaughtException",(err)=>{
//     console.log("there is the uncaught error");
//     process.exit(1);
// })

// ErrorFunction();




//Exception with promise function

// function ErrorFunction(){
//    const data=fetch("localhost:300/api");
//  //console.log("hello")
//     const value=6;
//     return value;
// }



// const promise=new Promise((resolve,reject)=>{
//     if(false){
//         resolve(ErrorFunction());
//     }
//     else{
//         reject(ErrorFunction());
//     }
// });

// promise
// .then((val)=>{
//     console.log(val)
// })
// .catch((err)=>{
//     console.log("error occured")
//     console.log(err)
// })

//




//Exception with Async and Await


function ErrorFunction(){
   const data=fetch("localhost:300/api");
 //console.log("hello")
  
}

const doSomething = async()=>{
    try{
        await ErrorFunction();
    }catch(err){
        throw new CustomError (err.message);
    }
}

doSomething();