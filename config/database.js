// database.js

const mysql = require("mysql2");

// 🔧 Crear pool de conexiones
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: false // necesario para Aiven
  }
});

// 🔥 Verificar conexión al iniciar
pool.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Error conectando a la base de datos:");
    console.error(err.message);
  } else {
    console.log("✅ Conectado a la base de datos correctamente");
    connection.release();
  }
});

// 🔄 Función para mantener viva la conexión (anti sleep)
const keepAlive = async () => {
  try {
    await pool.promise().query("SELECT 1");
    console.log("🔄 Ping a la BD exitoso");
  } catch (error) {
    console.error("⚠️ Error en ping de la BD:", error.message);
  }
};

// ⏱ Ejecutar ping cada 5 minutos
setInterval(keepAlive, 300000);

// 📦 Exportar pool con promesas (async/await)
module.exports = pool.promise();

// 🧪 Debug (opcional)
console.log("📡 HOST:", process.env.DB_HOST);