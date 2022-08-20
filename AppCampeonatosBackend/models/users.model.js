const { DataTypes } = require('sequelize');
const { sequelize } = require('../util/database');

const User = sequelize.define('User', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
});


module.exports = { User };