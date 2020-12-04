const fs= require('fs').promises
const { manyCharacters } = require('./manyCharacter.js');




describe('manyCharacters function', () => {

    it('returns a list of characters', async () => {
        const characters = await manyCharacters([1, 3, 5]);
        const expected = [ `Name: Rick Sanchez, Status: Alive, Species: Human`,
        `Name: Summer Smith, Status: Alive, Species: Human`,
        `Name: Jerry Smith, Status: Alive, Species: Human` ]
        expect(characters).toEqual(expected);
    })
})