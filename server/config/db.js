const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sandu30",
  database: "citizen_service_portal",
});

db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed");
    console.log(err);
  } else {
    console.log("✅ Database Connected Successfully");
  }
});

module.exports = db;