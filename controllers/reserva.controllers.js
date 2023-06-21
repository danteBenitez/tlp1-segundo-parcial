const ctrlReservas = {};
const Reservas = require('../models/Reserva');

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrlReservas.obtenerReservas = async (req, res) => {
    try {
        // Con paranoid: true, 
        const reservas = await Reservas.findAll({});

        if (!reservas || reservas.length === 0) {
            throw ({
                status: 404,
                message: 'No se encontraron reservas'
            })
        }
        return res.json(reservas);
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

// Obtener una reserva
ctrlReservas.obtenerReserva = async (req, res) => {
    const { id } = req.params;

    try {
        const reserva = await Reservas.findOne({
            where: {
                id,
            }
        });

        if (!reserva) {
            throw ({
                status: 404,
                message: 'No existe la reserva'
            })
        }
    
        return res.json(reserva);

    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}
// Crear una reserva
ctrlReservas.crearReserva = async (req, res) => {
    const { 
        codigo_reserva: codigo,
        fecha_reserva,
        apellido_autor,
        nombre_autor,
        correo_electronico_autor
     } = req.body;

    try {
        const reservaCreada = await Reservas.create({
           codigo_reserva: codigo,
           fecha_reserva,
            apellido_autor,
            nombre_autor,
            correo_electronico_autor
        });

        if (!reservaCreada) {
            throw ({
                status: 400,
                message: 'No se pudo crear la reserva'
            })
        }

        return res.json(reservaCreada);
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

// Actualizar una reserva
ctrlReservas.actualizarReserva = async (req, res) => {
    const { id } = req.params;
    const { 
        codigo_reserva: codigo,
        fecha_reserva,
        apellido_autor,
        nombre_autor,
        correo_electronico_autor
     } = req.body;;
    
    try {
        const reservaActualizada = await Reservas.update({
            codigo_reserva: codigo,
            fecha_reserva,
            apellido_autor,
            nombre_autor,
            correo_electronico_autor
        }, {
            where: {
                id,
            }
        });

        if (!reservaActualizada) {
            throw ({
                status: 400,
                message: 'No se pudo actualizar la reserva'
            })
        }

        return res.json({
            message: 'Reserva actualizada correctamente',
            reservaActualizada
        });
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

// Eliminar una reserva de forma lógica
ctrlReservas.eliminarReserva = async (req, res) => {
    const { id } = req.params;

    try {
        const reservaAEliminar = await Reservas.findOne({ id });

        if (!reservaAEliminar) {
            throw ({
                status: 400,
                message: 'No se pudo eliminar la reserva'
            })
        }
        /* Con paranoid: true, Sequelize hace una elminación lógica del registro
            Actualizando deletedAt
        */

        reservaAEliminar.destroy();

        return res.json({reservaEliminada: reservaAEliminar, message: 'Reserva eliminada correctamente' });
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

// ==========================================
//         Rutas para VISTAS de reservas
// ==========================================

ctrlReservas.renderizarIndex = function(req, res) {
    res.render('index.ejs');
}

ctrlReservas.renderizarActualizarReserva = function(req, res) {
    res.render('reservas/actualizar.ejs', {
        id: req.params.id
    });
}

ctrlReservas.renderizarCrearReserva = function(req, res) {
    res.render('reservas/crear.ejs');
}

module.exports = ctrlReservas;