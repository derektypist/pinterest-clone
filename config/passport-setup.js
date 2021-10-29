// Set Up Variables
const passport = require('passport');
const LocalStrategy = require('passport-local');
const GithubStrategy = require('passport-github');
const randombytes = require('randombytes');
const User = require('../models').User;

// Serialize and Deserialize 
passport.serializeUser((user,done) => {
  done(null,user._id);
});

passport.deserializeUser((id,done) => {
  User.findById(id).then((user) => {
    done(null,user);
  });
});