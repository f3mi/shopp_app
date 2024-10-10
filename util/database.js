const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Adedamola@97', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;