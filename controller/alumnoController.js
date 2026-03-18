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

// ===== CONSULTA ID =====
exports.findById = function(req,res){

Alumno.findById(req.params.id,function(err,alumno){

if(err){
console.log("ERROR FINDID:", err);
return res.status(500).json(err);
}

// 🔥 IMPORTANTE (SI VIENE COMO ARRAY)
res.json(alumno[0]);

});
};


// ===== UPDATE =====
exports.update = function(req, res){

Alumno.update(req.params.id, req.body, function(err, data){

if(err){
console.log("ERROR UPDATE:", err);
return res.status(500).json(err);
}

res.json({ mensaje: "Alumno actualizado" });

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