'use strict';

const express = require('express');
const controller = require('./user.controller');

const router = express.Router();

router.get('/', controller.index);
// router.get('/list/:role', controller.showByRole);
// router.get('/:ldapid/:role?/:email?', controller.show);
 router.post('/', controller.save);
// router.put('/', controller.upsert);
// router.patch('/', controller.patch);
// router.delete('/', controller.destroy);
module.exports = router;