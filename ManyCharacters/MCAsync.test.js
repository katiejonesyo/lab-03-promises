const fs= require('fs').promises
const { manyCharacters } = require('./MCAsync.js');




describe('manyCharacters function', () => {

    it('returns a list of characters', async () => {
        const characters = await manyCharacters([1, 3, 5]);
        const expected =  await [{ name: 'Rick Sanchez', species: 'Human', status: 'Alive' },
        { name: 'Summer Smith', species: 'Human', status: 'Alive' },
        { name: 'Jerry Smith', species: 'Human', status: 'Alive' },]
        expect(expected).toEqual([
            { name: 'Rick Sanchez', species: 'Human', status: 'Alive' },
            { name: 'Summer Smith', species: 'Human', status: 'Alive' },
            { name: 'Jerry Smith', species: 'Human', status: 'Alive' },

        ]);
    })
})