const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
// Define associations here

Band.hasMany(Musician)
Musician.belongsTo(Band)

Band.hasMany(Song)
Song.belongsTo(Band)
// User.belongsToMany(Like, {through: "User-Like"})
// Song.belongsToMany(User, {through: "User-Like"})


module.exports = {
    Band,
    Musician,
    Song
};
