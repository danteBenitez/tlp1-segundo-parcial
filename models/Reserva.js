// TODO: Crear modelo de datos de Reserva
const sequelize = require('sequelize');
const { DataType } = sequelize

const Reserva = sequelize.define('Reserva', {
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    codigo_reserva: {
        type: DataType.STRING,
        allowNull: false
    },
    fecha_reserva: {
        type: DataType.DATEONLY,
        allowNull: false
    },
    id_cliente: {
        type: DataType.INTEGER,
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