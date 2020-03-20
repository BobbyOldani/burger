// Set up MySQL connection.
const mysql = require("mysql");
const connection ;

  if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
  host: process.env.JAWS_HOST,
  port: process.env.JAWS_PORT,
  user: process.env.JAWS_USERNAME,
  password:process.env.JAWS_PASSWORD,
  database: process.env.JAWS_DATABASE
});
}

 


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;