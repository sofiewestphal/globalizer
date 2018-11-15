var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'baprototype'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('connected');
});

var queryString = 'SELECT * FROM users';

connection.query(queryString, function(err, rows) {
	if (err) throw err;
    console.log(rows);
});