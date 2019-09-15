'use strict';
const express = require('express');
const ctrl = require('./api/login/login.controller')

module.exports = (function () {
  const router = express.Router();
  router.post('/api/login',ctrl.login)
  router.use('/api/user', require('./api/user'));
  router.use('/api/customer', require('./api/customer'));

  return router;
})();