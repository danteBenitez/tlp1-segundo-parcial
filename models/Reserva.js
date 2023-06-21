// TODO: Crear modelo de datos de Reserva
const { DataTypes, sequelize } = require('../database.js');

const Reserva = sequelize.define('Reserva', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    codigo_reserva: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_reserva: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    apellido_autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre_autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo_electronico_autor: {
        type: DataTypes.STRING,
        allowNull: false
    } 
}, {
    timestamps: true, // Almacenar datos sobre la creación y actualización de registros
    /* Almacenar datos sobre la eliminación de registros de forma lógica. Permitiendo soft delete */
    paranoid: true,
    tableName: 'reservas'
})