'use strict';
let model = require('./user.model')

exports.index = function (req, res) {
    // logger.debug('inside getUserList controller');
    model.find((err, result) => {
        if (err) {
            res.send('errrr');
        } else {
            res.send(result);
        }
    })
};

exports.save = function (req, res) {
    //  logger.debug('inside getUserList controller');
    const user = new model(req.body);
    user.save((err, result) => {
        if (err) {
            res.send('errrr');
        } else {
            res.send(result);
        }
    })
};