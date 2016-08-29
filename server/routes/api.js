const express = require('express');
const router = express.Router();
router.use('/librarys', require('./librarys'));


module.exports = router;
