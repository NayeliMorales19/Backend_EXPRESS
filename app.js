const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const flash = require('express-flash');

const app = express();

app.use(session({
secret:'mi_secreto_express',
resave:false,
saveUninitialized:false
}));

app.use(flash());

app.use('/public', express.static(__dirname + '/public'));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// ===== VISTAS =====

app.get('/',(req,res)=>{
res.render('index',{data:req.flash('message')});
});

app.get('/altas',(req,res)=>{
res.render('altas');
});

app.get('/consulta',(req,res)=>{
res.render('consulta');
});

// ===== RUTAS =====

const alumno_rutas = require('./routes/alumnos_routes');

app.use('/alumnos',alumno_rutas);

app.listen(port,function(){

console.log("Servidor ejecutandose en puerto 3000");

});


// ====== EDITAR ======
app.get('/editar',(req,res)=>{
res.render('editar');
});