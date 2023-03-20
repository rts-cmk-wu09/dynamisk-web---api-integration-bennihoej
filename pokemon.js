const params = new URLSearchParams(document.location.search);
const name = params.get("name");

fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((pokemondata) => {
        document.querySelector("body").innerHTML += `
        <div class="pokemondetails">
        <h2>${pokemondata.forms[0].name}</h2>
        <img src="${pokemondata.sprites.front_default}" alt="${pokemondata.name}"/>
        </div>
        `
    });