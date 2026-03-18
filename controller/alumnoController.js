'use strict';

const Alumno = require('../model/alumno');

// ===== CREAR =====
exports.create = function(req,res){

const alumno = new Alumno({
num_control:req.body.num_control,
nombre:req.body.nombre,
primer_ap:req.body.primer_ap,
segundo_ap:req.body.segundo_ap,
fecha_nac:req.body.fecha_nac,
semestre:req.body.semestre,
carrera:req.body.carrera
});

Alumno.create(alumno,function(err,data){

if(err){
console.log("ERROR CREATE:", err);
return res.status(500).json(err);
}

res.redirect("/");

});

};

// ===== CONSULTA ID =====
exports.findById = function(req,res){

Alumno.findById(req.params.id,function(err,alumno){

if(err){
console.log("ERROR FINDID:", err);
return res.status(500).json(err);
}

res.json(alumno); // 🔥 YA ES OBJETO

});

};