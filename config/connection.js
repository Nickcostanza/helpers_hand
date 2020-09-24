// Set up MySQL connection.
const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "employee",
  database: "services_db"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Connected to the database!");
});

// Export connection for ORM use.
module.exports = connection;
