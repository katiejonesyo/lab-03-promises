const url = "https://rickandmortyapi.com/api/character/";


const fetch = require('node-fetch');

const fetchRickAndMorty = (id) =>  {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    return fetch(url)
    .then((res) => res.json())
    .then(
        (data) =>
        `Name: ${data.name}, Status: ${data.status}, Species: ${data.species}`
    );
    console.log(name);
};
module.exports = { fetchRickAndMorty };