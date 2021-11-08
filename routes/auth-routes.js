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
    res.render('signin.pug',{message: req.flash('error')});
  }
});

// Auth Logout
router.get("/signout", (req,res) => {
  req.logout();
  res.redirect("/");
});

router.post("/local", urlencodedParser, 
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth",
    failureFlash: true
  })
);

// GitHub
router.get("/github",passport.authenticate("github"));

router.get("/github/redirect", passport.authenticate("github"), (req,res) => {
  res.redirect("/");
});

module.exports = router;