const mySQL = require('../database/mySQL')
const Attendance = require('../queries/attendance')
const Course = require('../queries/course')

exports.createCourseAttendance = function(req, res) {
    mySQL.beginTransaction( function(err) {
        if (err) {
            res.status(400).json({result: 'Error. Please try again.'})
        }
      
        // Create course entry
        mySQL.query(Course.createCourse(), [req.body.title, req.body.code, new Date()], (err, result) => {
            if (err) {
                res.status(400).json({result: 'Error. Please try again.'})
            }

            // Create attendance entry
            mySQL.query(Attendance.createAttendance(), [req.body.id_student, result.insertId, new Date()], (err, result) => {
                if (err) {
                    res.status(400).json({result: 'Error. Please try again.'})
                }

                mySQL.commit((err) => {
                    if (err) {
                        mySQL.rollback(() => {
                            res.status(400).json({result: 'Error. Please try again.'});
                        })
                    }
                    
                    res.status(200).json({result: "Success. Course attendance created."})
                });
            });
        });
    })
};

exports.getAttendance = function(req, res) {
    mySQL.query(Attendance.getAttendanceByPhone(), req.query.phone_number, (err, result) => {
        if (err) {
            res.status(400).json({result: 'Error. Please try again.'})
        }
        
        res.status(200).json(result)
    });
};

exports.updateAttendance = function(req, res) {
    mySQL.beginTransaction( function(err) {
        if (err) {
            res.status(400).json({result: 'Error. Please try again.'})
        }
      
        mySQL.query(Attendance.updateAttendance(), [req.body.attended, req.body.missed, req.query.id], (err, result) => {
            if (err) {
                res.status(400).json({result: 'Error. Please try again.'})
            }

            mySQL.commit((err) => {
                if (err) {
                    mySQL.rollback(() => {
                        res.status(400).json({result: 'Error. Please try again.'});
                    })
                }
                
                res.status(200).json({result: "Success. Attendance updated."})
            });
        });
    })
};

exports.deleteAttendance = function(req, res) {
    mySQL.query(Attendance.deleteAttendanceById(), req.query.id_attendance, (err, result) => {
        if (err) {
            res.status(400).json({result: 'Error. Please try again.'})
        }
        
        res.status(200).json({result: "Success. Attendance deleted."})
    });
};