const fs = require('fs').promises;
const { transform } = require('./Transform.js');

describe('transform fn', () => {
    it('reads a file and removes all capital letters then it makes remaining letters capital. THEN reverse the string', async () => {
        return await transform('/Merpderp.txt')
        .then( 
            transformedFile => expect(transformedFile)
            .toEqual('NAM AT EHT NAD NAD'))
    })
})