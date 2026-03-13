'use strict';

const conexion = require('../config/database');

let Alumno = function(alumno){

this.NumControl = alumno.NumControl;
this.Nombre = alumno.Nombre;
this.PrimerAp = alumno.PrimerAp;
this.SegundoAp = alumno.SegundoAp;
this.FechaNac = alumno.FechaNac;
this.Semestre = alumno.Semestre;
this.Carrera = alumno.Carrera;

};


// ====================== CREAR ======================

Alumno.create = function(alumno,result){

conexion.query(
"INSERT INTO alumnos SET ?",
alumno,
function(err,res){

if(err)
result(err,null)
else
result(null,res)

});

};


// ====================== ELIMINAR ======================

Alumno.delete = function(id,result){

conexion.query(
"DELETE FROM alumnos WHERE NumControl=?",
[id],
function(err,res){

if(err)
result(err,null)
else
result(null,res)

});

};


// ====================== ACTUALIZAR ======================

Alumno.update = function(id,alumno,result){

conexion.query(

"UPDATE alumnos SET Nombre=?,PrimerAp=?,SegundoAp=?,FechaNac=?,Semestre=?,Carrera=? WHERE NumControl=?",

[
alumno.Nombre,
alumno.PrimerAp,
alumno.SegundoAp,
alumno.FechaNac,
alumno.Semestre,
alumno.Carrera,
id
],

function(err,res){

if(err)
result(err,null)
else
result(null,res)

});

};


// ====================== CONSULTA TODOS ======================

Alumno.findAll = function(result){

conexion.query(

"SELECT * FROM alumnos",

function(err,res){

if(err)
result(err,null)
else
result(null,res)

});

};


// ====================== CONSULTA POR ID ======================

Alumno.findById = function(id,result){

conexion.query(

"SELECT * FROM alumnos WHERE NumControl=?",

[id],

function(err,res){

if(err)
result(err,null)
else
result(null,res)

});

};


// ====================== BUSQUEDA ======================

Alumno.search = function(texto,result){

conexion.query(

"SELECT * FROM alumnos WHERE NumControl LIKE ? OR Nombre LIKE ?",

['%'+texto+'%','%'+texto+'%'],

function(err,res){

if(err)
result(err,null)
else
result(null,res)

});

};


module.exports = Alumno;