const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  githubId: {type: String},
  password: {type: String},
  link: {type: String, required: true, unique: true},
  imagelinks: [Schema.Types.ObjectId]
});

const User = mongoose.model("pinterest-clone-users", userSchema);

// Pin Schema
const pinSchema = new Schema({
  owner: {type: String, required: true},
  ownerid: {type: Schema.Types.ObjectId, required: true},
  ownerlink: {type: String, required: true},
  link: {type: String, required: true, unique: true},
  title: {type: String, required: true}
});

const Pin = mongoose.model("pinterest-clone-pins", pinSchema);

// Export Modules
module.exports.User = User;
module.exports.Pin = Pin;