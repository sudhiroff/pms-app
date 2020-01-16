const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Item',
    new Schema({
        itemName: String,
        itemCategory: String,
        otherCategory: String,
        brandName: String,
        unit: String,
        unitByPrice: String,
        storageRemark: String,
        remark: String,
        createdOn: {
            type: Date,
            default: Date.now
        }
    }));