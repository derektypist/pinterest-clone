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
    return res.send("Title is too long");
  }

  // Check if the string is an URL
  if (validator.isURL(link)) {
    link = link.match(/https/gm) ? link : "https://" + link;
    new Pin({
      owner: req.user.username,
      ownerid: req.user.id,
      ownerlink: req.user.link,
      link,
      title     
    }).save((err, pin) => {
      if (err) {
        return res.send("Error occurred.  Please check fields and try again.");
      }
      User.updateOne({_id: req.user.id}, {$push: {imagelinks: pin.id}}, (err) => {
        if (err) {
          return res.send("Error occurred, please try again.");
        }
        return res.send(pin);
      });
    });
  } else {
    return res.send("Please check the image url and try again");
  }

});

app.post("/remove", authCheck, urlencodedParser, (req, res, next) => {
  let pin_id = req.body.pin_id;
  let isOWn = false;
  req.user.imagelinks.forEach(e => {
    if (e == pin_id) {
      isOwn = true;
      return;
    }
  });
  if (!isOwn) {
    return res.send("Auth error");
  }

  // Not good if the operation partially succeeds
  Promise.all([
    Pin.deleteOne({_id:pin_id}),
    User.updateOne({_id:req.user.id}, {$pull: {imagelinks: pin_id}})
  ]).then(() => {
    return res.redirect("/");
  }).catch((err) => {
    next(err);
  });
});

app.get("/user/:link", (req, res, next) => {
  let username;
  User.findOne({link: req.params.link}).then((user) => {
    username = user.username;
    let pins = user.imagelinks;
    return Pin.find({_id: {$in: pins}});
  }).then((pins) => {
    res.render("index", {user: req.user, items: pins, username});
  }).catch((err) => {
    next(err);
  });
});


// Start Server
app.listen(process.env.PORT || 3000, function() {
  console.log(`Listening on port ${process.env.PORT}`);
});

// Function to Authentication Check
function authCheck(req,res,next) {
  if (!req.user) {
    return res.redirect("/auth");
  } else {
    return next();
  }
}