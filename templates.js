function templatePokemonCard(index) {
    return `
    <div class="pokemoncard" id="pokemoncard${index}">
    <div class="cardcontentfront" id="front">
        <div class="cardHeader">
            <h1 class="pokemonname" id="pokemonname${index}">Pokemonname</h1>
            <div class="pokedexID" id="pokedexID${index}">PokemonID</div>
        </div>
        <div class="pokemonImg" ><img id="pokemonImg${index}" src="img/bulbasaur.jpg" alt="pic von pokemon"></div>
        <div class="pokemonTypes" id="pokemonTypes${index}"><img src="" alt="type1"><img src="" alt="type2"></div>
    </div>
    <div class="cardcontentback" id="back">
        <h1 class="pokemonname">Pokemonname</h1>
        <div class="pokedexID">PokemonID</div>
    </div>
</div>
    `
}