const express = require('express');

// const validator = require('./validator');
const controller = require('./controller');

const router = express.Router();


// router.post('/api/user', validator.create, controller.create);
router.post('/api/user', controller.create);

module.exports = router;
