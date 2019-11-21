const Sequelize = require('sequelize')
const sequelize = new Sequelize('bancocrud', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
}