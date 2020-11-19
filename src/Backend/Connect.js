const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

const connection = mysql.createConnection({
	host: "Your Host Name",
	user: "your user name",
	password: "your password",
	port: "3306",
	database: "your db name"
});

connection.connect(function (err) {
	if (err) throw err;
	//console.log("Connected RDS");
});

app.post('/registeruser', (req, res) => {

	let firstName = req.body.firstName;
	let lastName = req.body.lastName;
	let phoneNumber = req.body.phoneNumber;
	let Email = req.body.Email;
	let date = req.body.date;
	let tourpackage = req.body.tourpackage;

	
	connection.query(`insert into Users values ('${firstName}','${lastName}',${phoneNumber},'${Email}','${date}','${tourpackage}')`, function (err, result) {
		if (err) {
			res.status(500).json({msg:'Error Occurred'});
			throw err;
		}
		else{
			res.status(200).json({msg:'Successful'});
		}
		
	});
});

app.listen(3001);

// use toursandtravelsagency;
// create table Users(
// FirstName varchar(30),
// LastName varchar(30),
// ContactNumber bigint,
// email varchar(30),
// Sdate varchar(8),
// packageID varchar(6)
// );
