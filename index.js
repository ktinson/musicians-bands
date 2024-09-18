const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
// Define associations here

Band.hasMany(Musician, {
    as: 'musician',
  })
Musician.belongsTo(Band,  {
    foreignKey: "BandId",
    as: "band"
})


Band.belongsToMany(Song, {through: "Band-Song"})
Song.belongsToMany(Band, {through: "Band-Song"})


module.exports = {
    Band,
    Musician,
    Song
};
