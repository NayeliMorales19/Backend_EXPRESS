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


// CREAR
Alumno.create = function(alumno,result){

db.query(
`INSERT INTO alumnos
(NumControl,Nombre,PrimerAp,SegundoAp,FechaNac,Semestre,Carrera)
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


// CONSULTAR
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


module.exports = Alumno;