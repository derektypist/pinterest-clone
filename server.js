// Set Up Constants
const express = require("express");
const helmet = require("helmet");
const passport = require("passport");
require("./config/passport-setup");
const mongoose = require("mongoose");
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


