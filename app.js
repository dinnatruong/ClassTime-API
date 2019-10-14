const express = require('express')
const bodyParser = require('body-parser')
      
const app = express()             
    .use(bodyParser.json())        
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .use('/students', require('./routes/studentsRouter'))
    .use('/courses', require('./routes/coursesRouter'))
    .use('/attendance', require('./routes/attendanceRouter'))
    .use((req, res, next) => {
        res.status(404).send('PAGE NOT FOUND.')
    })

app.listen(3000, () => console.log('API server running on port 3000.'))

module.exports = app
