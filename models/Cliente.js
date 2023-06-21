const sequelize = require('sequelize');

const Cliente = sequelize.define('Cliente', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    apellido: {
        type: sequelize.STRING,
        allowNull: false
    },
    nombre: {
        type: sequelize.STRING,
        allowNull: false
    },
    correo_electronico: {
        type: sequelize.STRING,
        allowNull: false
    } 
},{
    timestamps: true, // Almacenar datos sobre la creación y actualización de registros
    /* Almacenar datos sobre la eliminación de registros de forma lógica. Permitiendo soft delete */
    paranoid: true,
    tableName: 'clientes'
})