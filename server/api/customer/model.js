const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Customer',
    new Schema({
        projectName: String,
        companyName: String,
        natureBusiness: String,
        gstNo: String,
        remark: String,
        siteContactPerName: String,
        siteMobileNo: String,
        siteEmailId: String,
        officeContactPerName: String,
        officeMobileNo: String,
        officeEmailId: String,
        createdOn: {
            type: Date,
            default: Date.now
        }
    }));