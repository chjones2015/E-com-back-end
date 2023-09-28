const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password'
});

// drop the database if it exists
connection.query('DROP DATABASE IF EXISTS ecommerce_db', (err, results) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Dropped database if it existed');
});

// create the database
connection.query('CREATE DATABASE ecommerce_db', (err, results) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Created database');
});

// close the connection
connection.end();