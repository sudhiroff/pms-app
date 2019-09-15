const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Customer',
    new Schema({        
        firstName: String,
        lastName: String,
        email: String,
        mobileNo: String,
        address:String,
        city:String,
        State:String,
        createdOn: {
            type: Date,
            default: Date.now
        }
}));