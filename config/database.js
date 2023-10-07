const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('express', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
