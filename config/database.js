const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'NayeliMorales',
    password: 'morales2001',
    database: 'BD_Express_2026',
});

conexion.connect(function(err){
    if (err)
        throw err;
    console.log("Conexion a BD exitosa!!!");

});

module.exports = conexion;