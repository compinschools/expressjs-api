const express = require('express')
const router = express.Router();
const todos = require('./todoController')

router.get('/todo',todos.index)
router.get('/todo/:id',todos.show)
router.post('/todo/create',todos.create)
router.delete('/todo/:id',todos.delete)
router.put('/todo/:id',todos.update)


module.exports = router;
