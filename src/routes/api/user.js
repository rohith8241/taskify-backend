const express = require('express');
const router = express.Router();
const request = require('request');
const userController = require('../../controllers/userController');

router.get('/', userController.getUser)

module.exports = router