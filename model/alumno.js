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

// ===== CREAR =====
Alumno.create = async function(alumno, result){
  try {
    const [res] = await db.query(
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
      ]
    );
    result(null, res);
  } catch(err) {
    console.log(err);
    result(err, null);
  }
};

// ===== CONSULTA TODOS =====
Alumno.findAll = async function(result){
  try {
    const [rows] = await db.query("SELECT * FROM alumnos");
    result(null, rows);
  } catch(err) {
    console.log(err);
    result(err, null);
  }
};

// ===== CONSULTA POR ID =====
Alumno.findById = async function(id,result){
  try {
    const [rows] = await db.query("SELECT * FROM alumnos WHERE NumControl=?", [id]);
    result(null, rows);
  } catch(err) {
    console.log(err);
    result(err, null);
  }
};

// ===== ELIMINAR =====
Alumno.delete = async function(id,result){
  try {
    const [res] = await db.query("DELETE FROM alumnos WHERE NumControl=?", [id]);
    result(null, res);
  } catch(err) {
    console.log(err);
    result(err, null);
  }
};

// ===== ACTUALIZAR =====
Alumno.update = async function(id, alumno, result){
  try {
    const [res] = await db.query(
      `UPDATE alumnos 
       SET Nombre=?, PrimerAp=?, SegundoAp=?, FechaNac=?, Semestre=?, Carrera=? 
       WHERE NumControl=?`,
      [
        alumno.Nombre,
        alumno.PrimerAp,
        alumno.SegundoAp,
        alumno.FechaNac,
        alumno.Semestre,
        alumno.Carrera,
        id
      ]
    );
    result(null, res);
  } catch(err) {
    console.log(err);
    result(err, null);
  }
};

module.exports = Alumno;