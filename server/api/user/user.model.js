const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('User', 
new Schema({
  email: String,
  firstName: String,
  lastName: String,
  userName: String,
  mobileNo: String,
  password:String,
  createdOn: {
    type: Date,
    default: Date.now
  }
}));
