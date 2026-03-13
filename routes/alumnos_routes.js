const express = require('express');
const router = express.Router();

const alumno_controller = require('../controller/alumnoController');
// ALTAS
router.post('/', alumno_controller.create);
// BAJAS
router.post('/eliminar/:id', alumno_controller.delete);
// CAMBIOS
router.post('/:id', alumno_controller.update);

router.get('/', alumno_controller.findAll);
// CONSULTAS
router.get('/buscar', alumno_controller.search);

router.get('/:id', alumno_controller.findById);

module.exports = router;