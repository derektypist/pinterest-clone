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

// Apply uses of passport
passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({username}, (err,user) => {
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false, { message: "Authentication failed.  Try again later."});
    }

    if (user.password != password) {
      return done(null, false, { message: "Authentication failed.  Try again later."});
    }

    return done(null, user);
  });
});

passport.use(new GithubStrategy({
  clientID: process.env.GITHUB_CURRENT_ID,
  clientSecret: process.env.GITHUB_CURRENT_SECRET,
  callbackURL: 'https://pinterest-clone.ddxps46.repl.co/auth/github/redirect'
}, (accessToken,refreshToken,profile,done) => {
  User.findOne({githubId: profile.id}).then((currentUser) => {
    if (currentUser) {
      done(null, currentUser);
    } else {
      new User({
        githubId: profile.id,
        username: profile.username,
        link: randombytes(3).toString("hex")
      }).save().then((theNewUser) => {
        done(null, theNewUser);
      });
    }
  });
}));