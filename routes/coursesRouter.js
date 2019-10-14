const express = require('express')
const router = express.Router()
const coursesController = require('../controllers/coursesController');

router.route('/')
    .get(coursesController.getCourse)

module.exports = router