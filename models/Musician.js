const {sequelize} = require('../db')
const {Sequelize} = require('sequelize')

// TODO - define the Musician model
let Musician = sequelize.define("Band", {
    name: Sequelize.STRING,
    instrument: Sequelize.STRING,
})

module.exports = {
    Musician
};