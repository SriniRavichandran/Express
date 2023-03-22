//Connecting database
mongoose.connect("mongodb://localhost/auth_demo");

app.use(session({
    secret:"Any normal Word",       //decode or encode session
    resave: false,          
    saveUninitialized:false,
    cookie:{
        maxAge: 2*60*1000 
    }    
}));

passport.serializeUser(User.serializeUser());       //session encoding
passport.deserializeUser(User.deserializeUser());   //session decoding
passport.use(new LocalStrategy(User.authenticate()));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded(
      { extended:true }
))
app.use(passport.initialize());
app.use(passport.session());

//current User
app.use(function (req, res,next){
    res.locals.currentUser = req.user;
    next();
})
//MIDDLEWARE
function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}