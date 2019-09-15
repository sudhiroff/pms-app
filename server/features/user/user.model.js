const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    firstName:{type:String},
    lastName:String,
    email:String,
    password:String,
    MobileNo:String,
    dateOfBirth:String
});
let model=mongoose.model("User",userSchema);
export default model;
