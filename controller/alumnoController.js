'use strict';

const Alumno = require('../model/alumno');

// ===== CREAR =====
exports.create = (req,res)=>{

const alumno = new Alumno(req.body);

Alumno.create(alumno,(err,data)=>{
if(err){
console.log("ERROR CREATE:", err);
return res.status(500).json(err);
}
res.redirect("/");
});

};

// ===== LISTAR =====
exports.findAll = (req,res)=>{

Alumno.findAll((err,data)=>{
if(err){
console.log("ERROR FINDALL:", err);
return res.status(500).json(err);
}
res.json(data);
});

};

// ===== CONSULTAR =====
exports.findById = (req,res)=>{

Alumno.findById(req.params.id,(err,data)=>{
if(err){
console.log("ERROR FINDID:", err);
return res.status(500).json(err);
}
res.json(data || {});
});

};

// ===== ACTUALIZAR =====
exports.update = (req,res)=>{

const alumno = new Alumno(req.body);

Alumno.update(req.params.id, alumno,(err,data)=>{
if(err){
console.log("ERROR UPDATE:", err);
return res.status(500).json(err);
}
res.json({mensaje:"Actualizado correctamente"});
});

};

// ===== ELIMINAR =====
exports.delete = (req,res)=>{

Alumno.delete(req.params.id,(err,data)=>{
if(err){
console.log("ERROR DELETE:", err);
return res.status(500).json(err);
}
res.json({mensaje:"Eliminado correctamente"});
});

};

// ===== BUSCAR =====
exports.search = (req,res)=>{

const texto = req.query.q || "";

Alumno.search(texto,(err,data)=>{
if(err){
console.log("ERROR SEARCH:", err);
return res.status(500).json(err);
}
res.json(data);
});

};