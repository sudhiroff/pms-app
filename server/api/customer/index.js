'use strict'

const express = require('express');
const router = express.Router();
const ctrl = require('./controller')

router.get('/',ctrl.index);
router.get('/:id',ctrl.findById);
router.post('/',ctrl.save);

module.exports=router;