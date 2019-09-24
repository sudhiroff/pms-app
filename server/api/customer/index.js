'use strict'

const express = require('express');
const router = express.Router();
const ctrl = require('./controller')

router.get('/',ctrl.index);
router.get('/:id',ctrl.findById);
router.post('/',ctrl.save);
router.put('/:id',ctrl.update);
router.delete('/:id',ctrl.remove);

module.exports=router;