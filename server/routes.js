'use strict';
const express = require('express');
const ctrl = require('./api/login/login.controller')

module.exports = (function () {
  const router = express.Router();
  router.post('/api/login', ctrl.login)
  router.use('/api/user', require('./api/user'));
  router.use('/api/customer', require('./api/customer'));
  router.use('/api/item', require('./api/item'));

  return router;
})();