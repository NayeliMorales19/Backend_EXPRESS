const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "mysql-5eec0ff-moralesnayeli120217-9a72.g.aivencloud.com",
  user: process.env.DB_USER || "avnadmin",
  password: process.env.DB_PASSWORD || "AVNS_6zWIvQyWkIcXPnPSttK",
  database: process.env.DB_NAME || "defaultdb",
  port: process.env.DB_PORT || 10600,

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,

  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool.promise();