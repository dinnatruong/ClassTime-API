const mySQL = require('../database/mySQL')
const Student = require('../queries/students')

exports.createStudent = function(req, res) {

    mySQL.beginTransaction( function(err) {
        if (err) {
            res.status(400).json({result: 'Error. Please try again.'})
        }
      
        mySQL.query(Student.createStudent(), [req.body.firstname, req.body.lastname, req.body.phonenumber, new Date()], (err, result) => {
            if (err) {
                res.status(400).json({result: 'Error. Please try again.'})
            }

            mySQL.commit((err) => {
                if (err) {
                    mySQL.rollback(() => {
                        res.status(400).json({result: 'Error. Please try again.'});
                    })
                }
                
                res.status(200).json({result: "Success. Student created."})
            });
        });
    })
};

exports.getStudent = function(req, res) {
    mySQL.query(Student.getStudentByPhone(), req.body.phonenumber, (err, result) => {
        if (err) {
            res.status(400).json({result: 'Error. Please try again.'})
        }
        
        res.status(200).json(result)
    });
};