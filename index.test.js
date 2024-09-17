const {db} = require('./db')
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

    test('can create a Band', async function() {
        // TODO - test creating a band
        await Band.create({name: "TestBand", genre: "TestGenre" })
        const newBand = await Band.findByPk(1)
        expect(newBand.id).toBe(1);
    })
    test('can create a Band Bulk', async function() {
        // TODO - test creating a band
        await Band.bulkCreate([{name: "TestBand", genre: "TestGenre" },
             {name: "TestBand1", genre: "TestGenre1" }, 
             {name: "TestBand2", genre: "TestGenre2" },
             {name: "TestBand3", genre: "TestGenre3" },
             {name: "TestBand4", genre: "TestGenre4" },
             {name: "TestBand5", genre: "TestGenre5" }])
        const newBand = await Band.findByPk(5)
        expect(newBand.id).toBe(5);
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        await Musician.create({name: "TestMusician", instrument: "TestPerson" })
        const newMusician = await Musician.findByPk(1)
        expect(newMusician.id).toBe(1);
    })
    test('can create a Musician Bulk', async function() {
        // TODO - test creating a band
        await Musician.bulkCreate([{name: "TestMusician", instrument: "TestGenre" },
             {name: "TestMusician1", instrument: "TestPerson1" }, 
             {name: "TestMusician2", instrument: "TestPerson2" },
             {name: "TestMusician3", instrument: "TestPerson3" },
             {name: "TestMusician4", instrument: "TestPerson4" },
             {name: "TestMusician5", instrument: "TestPerson5" }])
        const newMusician = await Musician.findByPk(5)
        expect(newMusician.id).toBe(5);
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        await Band.update({name: "TestBandUpdate" }, {where: {id: 1}})
        const newBandUp = await Band.findByPk(1)
        expect(newBandUp.id).toBe(1);
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        await Musician.update({name: "TestMusicianUpdate" }, {where: {id: 1}})
        const newMusicianUp = await Musician.findByPk(1)
        expect(newMusicianUp.id).toBe(1);
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        const createdBand = await Band.findByPk(1)
        const deleteBand = await Band.destroy({where: {id: createdBand}})
        expect(deleteBand).toEqual(0);
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        const createdMusician = await Musician.findByPk(1)
        const deleteMusician = await Musician.destroy({where: {id: createdMusician}})
        expect(deleteMusician).toEqual(0);
    })
})