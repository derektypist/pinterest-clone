// Set Up Constants
const router = require('express').Router();
const passport = require('passport');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});

router.use(flash);

// Router Sign In
router.get("/", (req,res) => {
  if (req.user) {
    res.redirect("/");
  } else {
    res.render('signin',req.flash('error'));
  }
});