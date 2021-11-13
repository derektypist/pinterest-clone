// Set Up Constants
const express = require("express");
const helmet = require("helmet");
const passport = require("passport");
require("./config/passport-setup");
const mongoose = require("mongoose");
const url = require("./config/db.js").url;
mongoose.connect(url);
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth-routes");
const User = require("./models").User;
const Pin = require("./models").Pin;
const bodyParser = require("body-parser");
const validator = require("validator");
const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});

// Set Up Template Engine
app.set('view engine','pug');
app.set('views','./views');

app.use(express.static("public"));
app.use(cookieParser);

app.use(passport.initialize());
app.use(passport.session());

// Routes and DB
let db = mongoose.connection;
db.on('error', function(err) {
  console.log(err);
});

db.on('open',function() {
  console.log("Connected to DB");
  let InitializeTestData = require("./utils/testdata.js");
  InitializeTestData();
});

app.get("/",(req,res,next) => {
  Pin.find({}, (err,items) => {
    if (err) {
      return next(err);
    }
    res.render("index",{user: req.user, items});
  });
});

app.post("/add", authCheck, urlencodedParser, (req,res) => {
  let link = req.body.link + "";
  let title = req.body.title + "";
  // If length of title is not greater than 0
  if (!title.length > 0) {
    return res.send("Title cannot be empty, please try again.");
  }

  // If length of title is more than 90 characters
  if (title.length > 90) {
    return res.send("Title is too long")
  }

  // Check if the string is an URL
  
});