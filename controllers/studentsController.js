const mySQL = require('../database/mySQL')
const Student = require('../queries/students')

exports.createStudent = function(req, res) {

    mySQL.beginTransaction( function(err) {
        if (err) {
            res.status(400).json({result: 'Error. Please try again.'})
        }

        const firstName = req.body.first_name ? req.body.first_name : null;
        const lastName = req.body.last_name ? req.body.last_name : null;
      
        mySQL.query(Student.createStudent(), [firstName, lastName, req.body.phone_number, new Date()], (err, result) => {
            if (err) {
                res.status(400).json({result: 'Error. Please try again.'})
            }

            mySQL.commit((err) => {
                if (err) {
                    mySQL.rollback(() => {
                        res.status(400).json({result: 'Error. Please try again.'});
                    })
                }
                
                // Return created Student entry
                mySQL.query(Student.getStudentByPhone(), req.body.phone_number, (err, result) => {
                    if (err) {
                        res.status(400).json({result: 'Error. Please try again.'})
                    }
                    
                    res.status(200).json(result)
                });
            });
        });
    })
};

exports.getStudent = function(req, res) {
    mySQL.query(Student.getStudentByPhone(), req.query.phone_number, (err, result) => {
        if (err) {
            res.status(400).json({result: 'Error. Please try again.'})
        }
        
        res.status(200).json(result)
    });
};