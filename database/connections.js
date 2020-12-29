const Sequelize = require('sequelize')

// Criando o Banco de Dados 

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/app.db'
});

module.exports = sequelize;