const {db} = require('../db')
const {Sequelize} = require('sequelize')

// TODO - define the Song model
let Song = db.define("Song", {
    name: Sequelize.STRING,
    year: Sequelize.INTEGER,
    length: Sequelize.INTEGER,
})

module.exports = {
    Song
};