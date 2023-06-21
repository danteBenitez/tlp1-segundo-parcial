const { DataTypes, sequelize } = require('../database.js');

const Cliente = sequelize.define('Cliente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo_electronico: {
        type: DataTypes.STRING,
        allowNull: false
    } 
},{
    timestamps: true, // Almacenar datos sobre la creación y actualización de registros
    /* Almacenar datos sobre la eliminación de registros de forma lógica. Permitiendo soft delete */
    paranoid: true,
    tableName: 'clientes'
})