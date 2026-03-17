'use strict';

const Alumno = require('../model/alumno');

// ===== CREAR =====
exports.create = function(req,res){

const alumno = new Alumno({
NumControl:req.body.num_control,
Nombre:req.body.nombre,
PrimerAp:req.body.primer_ap,
SegundoAp:req.body.segundo_ap,
FechaNac:req.body.fecha_nac,
Semestre:req.body.semestre,
Carrera:req.body.carrera
});

Alumno.create(alumno,function(err,data){

if(err){
console.log("ERROR CREATE:", err);
return res.status(500).json(err);
}

// 🔥 REDIRECCION (IMPORTANTE)
res.redirect("/");

});

};


// ===== ELIMINAR =====
exports.delete = function(req,res){

Alumno.delete(req.params.id,function(err){

if(err){
console.log("ERROR DELETE:", err);
return res.status(500).json(err);
}

res.json({mensaje:"eliminado"});

});

};


// ===== ACTUALIZAR =====
exports.update = function(req,res){

const alumno = new Alumno({
NumControl:req.body.num_control,
Nombre:req.body.nombre,
PrimerAp:req.body.primer_ap,
SegundoAp:req.body.segundo_ap,
FechaNac:req.body.fecha_nac,
Semestre:req.body.semestre,
Carrera:req.body.carrera
});

Alumno.update(req.params.id,alumno,function(err){

if(err){
console.log("ERROR UPDATE:", err);
return res.status(500).json(err);
}

res.json({mensaje:"actualizado"});

});

};


// ===== CONSULTA TODOS =====
exports.findAll = function(req,res){

Alumno.findAll(function(err,alumnos){

if(err){
console.log("ERROR FINDALL:", err);
return res.status(500).json(err);
}

res.json(alumnos);

});

};


// ===== CONSULTA ID =====
exports.findById = function(req,res){

Alumno.findById(req.params.id,function(err,alumno){

if(err){
console.log("ERROR FINDID:", err);
return res.status(500).json(err);
}

res.json(alumno);

});

};


// ===== BUSQUEDA =====
exports.search = function(req,res){

let texto = req.query.q;

Alumno.search(texto,function(err,alumnos){

if(err){
console.log("ERROR SEARCH:", err);
return res.status(500).json(err);
}

res.json(alumnos);

});

};