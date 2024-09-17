const {sequelize} = require('../db')
const {Sequelize} = require('sequelize')
// TODO - define the Band model
let Band = sequelize.define("Band", {
    name: Sequelize.STRING,
    genre: Sequelize.STRING,
})

module.exports = {
    Band
};