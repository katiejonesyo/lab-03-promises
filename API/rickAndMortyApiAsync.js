const fetch = require("node-fetch");
const url = "https://rickandmortyapi.com/api/character/";
////get character
const rickAndMortyApiAsync = async (id) => {
  try {
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    const res = await fetch(url);
    const json = await res.json();
    const results = `Name: ${json.name}, Status: ${json.status}, Species: ${json.species}`;
    return results;
  
  } catch (err) {
    console.log("Error: ", err);
  }  console.log(results);
};

module.exports = { rickAndMortyApiAsync };

rickAndMortyApiAsync(1);