function templatePokemonCard(index) {
    return `
    <div class="pokenonWhole" id="pokemonWhole${index}">
            <div class="pokemoncard">
                <div class="cardcontent">
                    <div class="cardHeader">
                        <h1 class="pokemonname">Pokemonname</h1>
                        <div class="pokedexID">PokemonID</div>
                    </div>
                    <div class="pokemonImg"><img src="img/bulbasaur.jpg" alt="pic von pokemon"></div>
                    <div class="pokemonTypes"><img src="" alt="type1"><img src="" alt="type2"></div>
                    <div class="arrowdown" onclick="dropdown(${index})"><img src="img/arrow-32-down.png" alt="" id="arrowimg${index}"></div>
                </div>
            </div>
            <div class="dropdown d-none" id="dropdowncontent${index}">
                <div>TEST</div>
            </div>
        </div>
    `
}