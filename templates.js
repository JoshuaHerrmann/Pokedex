function templatePokemonCard(index) {
    return `
    <div class="pokemoncard" id="pokemoncard${index}">
    <div class="cardcontentfront" id="front">
        <div class="cardHeader">
            <h1 class="pokemonname" id="pokemonname${index}">Pokemonname</h1>
            <div class="pokedexID" id="pokedexID${index}">PokemonID</div>
        </div>
        <div class="pokemonImg" ><img id="pokemonImg${index}" src="img/bulbasaur.jpg" alt="pic von pokemon"></div>
        <div class="pokemonTypes" id="pokemonTypes${index}"></div>
    </div>
    <div class="cardcontentback" id="back">
        <h1 class="pokemonname" id="pokemonnameBack${index}">Pokemonname</h1>
        <div class="pokedexID" id="pokedexIDBack${index}">PokemonID</div>
    </div>
</div>
    `
}

function templatePokemonTypes(typename) {
    return `
    <div class="typediv, farbe${typename}">${typename}</div>
    `
}