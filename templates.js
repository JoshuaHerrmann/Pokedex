function templatePokemonCard(index) {
    return `
    <div class="pokemoncard">
    <div class="cardcontentfront" id="front">
        <div class="cardHeader">
            <h1 class="pokemonname">Pokemonname</h1>
            <div class="pokedexID">PokemonID</div>
        </div>
        <div class="pokemonImg"><img src="img/bulbasaur.jpg" alt="pic von pokemon"></div>
        <div class="pokemonTypes"><img src="" alt="type1"><img src="" alt="type2"></div>
        <div class="arrowdown" onclick="dropdown()"><img src="img/arrow-32-down.png" alt="" id="arrowimg"></div>
    </div>
    <div class="cardcontentback" id="back">
        <h1 class="pokemonname">Pokemonname</h1>
        <div class="pokedexID">PokemonID</div>
    </div>
</div>
    `
}