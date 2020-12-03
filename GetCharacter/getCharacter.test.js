const { getCharacter } = require('./getCharacter.js');
const fetch = require('node-fetch')

describe('return name,status,and species by id', () => {
    it('does the thing', async () => {
        const rick = ({
        name:"Rick Sanchez",
        status:"Alive",
        species:"Human"
    })

    paramId = 1
    return getCharacter(paramId)
    .then(output => {
        expect(output).toEqual(rick)
    });
})
})

