const express = require('express')
const router = express.Router()
const studentsController = require('../controllers/studentsController');

router.route('/')
    .post(studentsController.createStudent)
    .get(studentsController.getStudent)

module.exports = router