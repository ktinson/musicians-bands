const {db} = require('../db')
const {Sequelize} = require('sequelize')

// TODO - define the Musician model
let Musician = db.define("Musician", {
    name: Sequelize.STRING,
    instrument: Sequelize.STRING,
})

module.exports = {
    Musician
};