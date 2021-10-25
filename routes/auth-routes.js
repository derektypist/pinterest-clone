// Set Up Constants
const router = require('express').Router();
const passport = require('passport');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});