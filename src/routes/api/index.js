const express = require('express');
const router = express.Router();



router.use('/user', require('./user'));

router.use('/tasks',require('./tasks'));



module.exports = router;