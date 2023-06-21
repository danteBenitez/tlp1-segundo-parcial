// TODO: Crear modelo de datos de Reserva
const sequelize = require('../database.js');
const { DataTypes } = sequelize;

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
    id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Cliente',
            key: 'id'
        }
    }
}, {
    timestamps: true, // Almacenar datos sobre la creación y actualización de registros
    /* Almacenar datos sobre la eliminación de registros de forma lógica. Permitiendo soft delete */
    paranoid: true,
    tableName: 'reservas'
})