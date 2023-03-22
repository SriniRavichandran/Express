var express=require('express');
var http=express();
var Cookies = require('cookies')
 

var keys = ['keyboard cat']
 
var server = http.get("/",function (req, res) {
 
  var cookies = new Cookies(req, res, { keys: keys });
 
 
  var lastVisit = cookies.get('LastVisit', { signed: true });
 
 
  cookies.set('LastVisit', new Date().toISOString(), { signed: true });
 
  if (!lastVisit) {
   
    res.send('Welcome, first time visitor!')
  } else {
    
    res.send('Welcome back! Nothing much changed since your last visit at ' + lastVisit + '.')
  }
});
 
server.listen(3000, function () {
  console.log('Visit us at http://127.0.0.1:3000/')
});

