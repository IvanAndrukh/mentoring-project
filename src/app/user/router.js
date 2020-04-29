const router = require('express').Router();

const validator = require('./validator');
const controller = require('./controller');


router.post('/:db/users', validator.create, validator.userExists, controller.create);
router.get('/:db/users/:id', validator.get, controller.get);
router.get('/:db/users', validator.list, controller.list);
router.put('/:db/users/:id', validator.update, controller.update);
router.delete('/:db/users/:id', validator.remove, controller.remove);

module.exports = router;
