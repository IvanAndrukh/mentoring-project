const router = require('express').Router();

const responseWarapper = require('../../common/responseWrapper');

const validator = require('./validator');
const controller = require('./controller');


router.post('/:db/users', validator.create, validator.userExists, responseWarapper(controller.create, 201));
router.get('/:db/users/:id', validator.get, responseWarapper(controller.get));

module.exports = router;
