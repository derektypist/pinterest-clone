const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  githubId: {type: String},
  password: {type: String},
  link: {type: String, required: true, unique: true},
  image_links = [Schema.Types.ObjectId]
});

const User = mongoose.model("pinterest-clone-users", userSchema);