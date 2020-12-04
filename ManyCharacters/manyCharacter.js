const fetch = require('node-fetch');
const { fetchRickAndMorty } = require('../API/rickAndMortyApi');

function manyCharacters(idArray) {
    return Promise.all(idArray.map(id => {
        return fetchRickAndMorty(id);
    }))

};



module.exports = { manyCharacters }

