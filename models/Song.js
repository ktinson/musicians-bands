const {sequelize} = require('../db')
const {Sequelize} = require('sequelize')

// TODO - define the Song model
let Song= sequelize.define("Band", {
    name: Sequelize.STRING,
    year: Sequelize.INTEGER,
    length: Sequelize.INTEGER,
})

module.exports = {
    Song
};