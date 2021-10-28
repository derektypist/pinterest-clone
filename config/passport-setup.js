// Set Up Variables
const passport = require('passport');
const LocalStrategy = require('passport-local');
const GithubStrategy = require('passport-github');
const randombytes = require('randombytes');
const User = require('../models').User;

// Serialize and Deserialize 