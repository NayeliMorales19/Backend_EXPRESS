'use strict';

const db = require('../config/database');

let Alumno = function(alumno){

this.NumControl = alumno.NumControl;
this.Nombre = alumno.Nombre;
this.PrimerAp = alumno.PrimerAp;
this.SegundoAp = alumno.SegundoAp;
this.FechaNac = alumno.FechaNac;
this.Semestre = alumno.Semestre;
this.Carrera = alumno.Carrera;

};


// ================= CREAR =================

Alumno.create = function(alumno,result){

db.query(
`INSERT INTO alumnos 
(num_control,nombre,primer_ap,segundo_ap,fecha_nac,semestre,carrera)
VALUES (?,?,?,?,?,?,?)`,
[
alumno.NumControl,
alumno.Nombre,
alumno.PrimerAp,
alumno.SegundoAp,
alumno.FechaNac,
alumno.Semestre,
alumno.Carrera
],
function(err,res){

if(err){
console.log(err);
result(err,null);
}else{
result(null,res);
}

});

};


// ================= CONSULTA TODOS =================

Alumno.findAll = function(result){

db.query(
"SELECT * FROM alumnos",
function(err,res){

if(err){
console.log(err);
result(err,null);
}else{
result(null,res);
}

});

};


// ================= CONSULTA POR ID =================

Alumno.findById = function(id,result){

db.query(
"SELECT * FROM alumnos WHERE NumControl=?",
[id],
function(err,res){

if(err){
console.log(err);
result(err,null);
}else{
result(null,res);
}

});

};


// ================= ELIMINAR =================

Alumno.delete = function(id,result){

db.query(
"DELETE FROM alumnos WHERE NumControl=?",
[id],
function(err,res){

if(err){
console.log(err);
result(err,null);
}else{
result(null,res);
}

});

};


// ================= ACTUALIZAR =================

Alumno.update = function(id,alumno,result){

db.query(
`UPDATE alumnos 
SET Nombre=?,PrimerAp=?,SegundoAp=?,FechaNac=?,Semestre=?,Carrera=? 
WHERE NumControl=?`,
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

if(err){
console.log(err);
result(err,null);
}else{
result(null,res);
}

});

};


module.exports = Alumno;