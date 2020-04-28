const router = require('express').Router();

const responseWarapper = require('../../common/responseWrapper');

const validator = require('./validator');
const controller = require('./controller');


router.post('/:db/users', validator.create, validator.userExists, responseWarapper(controller.create, 201));
router.get('/:db/users/:id', validator.get, responseWarapper(controller.get));
router.get('/:db/users', validator.list, responseWarapper(controller.list));
router.put('/:db/users/:id', validator.update, responseWarapper(controller.update));

module.exports = router;
