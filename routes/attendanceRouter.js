const express = require('express')
const router = express.Router()
const attendanceController = require('../controllers/attendanceController');

router.route('/')
    .post(attendanceController.createCourseAttendance)
    .get(attendanceController.getAttendance)
    .patch(attendanceController.updateAttendance)
    .delete(attendanceController.deleteAttendance)

module.exports = router