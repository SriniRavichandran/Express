var express = require("express"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  LocalStrategy = require("passport-local");
const session=require('express-session');
const User = require("./model/User");

const jsonwebtoken = require("jsonwebtoken");
var app = express();
mongoose.connect("mongodb://localhost/27017");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/secret", isLoggedIn, function (req, res) {
  res.render("secret");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
  });

  let token = await jsonwebtoken.sign({ user }, "sakkara", {
    expiresIn: "10",
  });

  return res.status(200).json(token);
});

app.get("/login", function (req, res) {
  res.render("login");
});

// function set(title, value) {
//   return sessionStorage.setItem(title, value);
// }
app.post("/login", async function (req, res) {
  try {
    const user = await User.findOne({ username: req.body.username });
    

    // if (user) {
    //   const result = req.body.password === user.password;
    //   const role=user.role;
    //   if (result) {
        
    //    res.cookie("role",user.role);
    //    console.log(user.role);
    //    if(role=='user'){
    //     console.log(user.role);
    //     res.render("secret");
    //    }
      
    if(user){
      const result = req.body.password === user.password;
       if(result){
        
          //res.cookie("role",user.role);
          //res.render("secret");
          const role=user.role;

          let token =jsonwebtoken.sign({ role }, "sakkara")

          res.cookie("role",token);
         
          console.log("login " +role); 

          if(role==="user"){
            console.log(role);
          
            
            let message=cookie.get('role');
            res.render('secret',{message});
          }else{
            console.log(role);
           
            res.render('admin');
          }
       
        
       }else {
        res.status(400).json({ error: "password doesn't match" });
      }
    
       
      
      } 
    else {
      res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
});

app.get("/logout", function (req, res) {
  res.clearCookie('role');
  res.clearCookie('connect.sid');
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Server Has Started!");
  console.log("http://localhost:5000");
});
