// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require('express').Router();
const {
    obtenerReservas,
    obtenerReserva,
    actualizarReserva,
    eliminarReserva,
    renderizarIndex,
    renderizarActualizarReserva,
    renderizarCrearReserva,
    crearReserva
} = require('../controllers/reserva.controllers');

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas

// Formulario para crear una reserva

// Formulario para actualizar una reserva

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/', obtenerReservas);
 
// Crear una reserva
router.post('/api/', crearReserva);
 
// Actualizar una reserva
router.put('/api/:id', actualizarReserva);

// Eliminar una reserva de forma lógica
router.delete('/api/:id', eliminarReserva);

// Renderizar vista principal de reservas
router.get('/', renderizarIndex);

// Renderizar formulario de creación de reservas
router.get('/crear', renderizarCrearReserva);

// Renderizar formulario de actualización de reservas
router.get('/actualizar/:id', renderizarActualizarReserva);
 
module.exports = router;