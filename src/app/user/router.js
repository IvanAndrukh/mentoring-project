const express = require('express');

const validator = require('./validator');
const controller = require('./controller');

const router = express.Router();


router.post('/:db/users', validator.create, controller.create);

module.exports = router;
