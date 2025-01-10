const express = require('express');
const router = express.Router();
const request = require('request');
const taskController = require('../../controllers/taskController');

router.post('/', taskController.createTask)

router.get('/', taskController.getTasks)

router.get('/:id', taskController.getTaskById)

router.put('/:id', taskController.updateTask)

router.delete('/:id', taskController.deleteTask)

module.exports = router