const fetch = require('node-fetch');

const url = "https://rickandmortyapi.com/api/character/";

const manyCharacters = async () => {

    try{
        const url = `"https://rickandmortyapi.com/api/character/"`;
        const res = await fetch(url);
        const json = await res.json();

    } catch(err) {

    }
};

module.exports = { manyCharacters };

