const mySQL = require('../database/mySQL')
const Course = require('../queries/course')

exports.getCourse = function(req, res) {
    mySQL.query(Course.getCourseById(), req.query.id, (err, result) => {
        if (err) {
            res.status(400).json({result: 'Error. Please try again.'})
        }
        
        res.status(200).json(result)
    });
};