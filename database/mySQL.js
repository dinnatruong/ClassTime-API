var mySQL = require('mysql');

var connection = mySQL.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'classtime',
    port: 3306
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection