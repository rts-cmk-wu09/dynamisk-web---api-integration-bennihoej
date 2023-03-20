fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    .then((response) => response.json())
    .then((data) => {
            data.results.forEach((pokemon) => {
                        fetch(pokemon.url)
                            .then((response) => response.json())
                            .then((pokemondata) => {
                                    pokemoncontainer.innerHTML += `
<div class="pokemoncontainer">
<a href="pokemon.html?name=${pokemondata.name}">
<h2>${pokemondata.name}</h2>
<img src="${pokemondata.sprites.front_default}" alt="${pokemondata.name}"/>
</a>
<ul>
${pokemondata.stats.map((stat) =>`<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
</ul>
</div>
            `;
        });
    });
});