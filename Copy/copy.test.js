const fsPromises = require('fs').promises;
const { copyAFile } = require('./Copy.js');

describe('copyAFile', () => {
    it('copy the data from a file and create a new file with the copied data', () => {

        return copyAFile('/texttexttext.txt', './newertexttexttext.txt')
        .then(() => {

            return fsPromises.readFile('./newertexttexttext.txt', 'utf-8')
        })
        .then(newFile => {
            expect(newFile).toEqual('This is TEXT')

        })
    })
});

