const router = require('express').Router();
const todos = require('../Todos/controller');


router.use(todos);

module.exports = router;
