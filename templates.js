function templatePokemonCard(index) {
    return `
    <div class="pokemoncard" id="pokemoncard${index}">
    <div class="cardcontentfront" id="front">
        <div class="cardHeader">
            <h1 class="pokemonname" id="pokemonname${index}">Pokemonname</h1>
            <div class="pokedexID" id="pokedexID${index}">PokemonID</div>
        </div>
        <div class="pokemonImg" id="imgdiv${index}"><img id="pokemonImg${index}" src="#" alt="pic von pokemon" class="imgbg"></div>
        <div class="pokemonTypes" id="pokemonTypes${index}"></div>
    </div>
    <div class="cardcontentback" id="back${index}">
        <h1 class="pokemonname" id="pokemonnameBack${index}">Pokemonname</h1>
        <div class="pokedexID" id="pokedexIDBack${index}">PokemonID</div>
        <div>
        <table class="tableInfo">
            <tr>
                <td>Weight:</td>
                <td>123</td>
            </tr>
            <tr>
                <td>Height:</td>
                <td>200m</td>
            </tr>
            <tr>
                <td>Sex:</td>
                <td>Female/Both</td>
            </tr>
            <tr>
                <td>Type:</td>
                <td>Poisen, Grass</td>
            </tr>
        </table>
    </div>
    <div>
        <table class="tableStats">
            <tr>
                <td>HP:</td>
                <td><b>100</b></td>
            </tr>
            <tr>
                <td>Attack:</td>
                <td><b>57</b></td>
            </tr>
            <tr>
                <td>Defense:</td>
                <td><b>23</b></td>
            </tr>
            <tr>
                <td>Spec-Attack:</td>
                <td><b>25</b></td>
            </tr>
            <tr>
                <td>Spec-Defense:</td>
                <td><b>25</b></td>
            </tr>
            <tr>
                <td>Initiative:</td>
                <td><b>68</b></td>
            </tr>
        </table>
    </div>
</div>
    `
}

function templatePokemonTypes(typename) {
    return `
    <div class="typediv type${typename}"><p>${(capitalizeFirstLetter(typename))}</p></div>
    `
}