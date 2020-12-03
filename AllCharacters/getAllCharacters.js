const fetch = require('node-fetch');

function getAllCharacters() {
    Promise.all([fetch('https://rickandmortyapi.com/api/character/')
    ])
        .then(([resRickAndMorty]) => {
    })

};

module.exports = { getAllCharacters }

