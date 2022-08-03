/**
 *  This function returns a template for a single content card
 * 
 * @param {number} index - the index number of PokeAPI array 
 * @returns 
 */
function templatePokemonCard(index) {
    return `
    <div class="pokemoncardWHOLE">
    <div class="pokemoncard" id="pokemoncard${index}">
    <div class="cardcontentfront" id="front">
        <div class="cardHeader">
            <h1 class="pokemonname" id="pokemonname${index}">Pokemonname</h1>
            <div class="pokedexID" id="pokedexID${index}">PokemonID</div>
        </div>
        <div class="pokemonImg" id="imgdiv${index}"><img id="pokemonImg${index}" src="#" alt="No alternative Artdesign available" class="imgbg"></div>
        <div class="pokemonTypes" id="pokemonTypes${index}"></div>
    </div>
    <div class="cardcontentback" id="back${index}">
        <div class="cardHeader">
            <h1 class="pokemonname" id="pokemonnameBack${index}">Pokemonname</h1>
            <div class="pokedexID" id="pokedexIDBack${index}">PokemonID</div>
        </div>
        <div>
        <table class="tableInfo">
            <tr>
                <td>Weight:</td>
                <td id="infoweight${index}">123</td>
            </tr>
            <tr>
                <td>Height:</td>
                <td id="infoheight${index}">200m</td>
            </tr>
            <tr>
                <td>Type:</td>
                <td id="infotype${index}">Poisen, Grass</td>
            </tr>
        </table>
    </div>
    <div>
        <table class="tableStats">
            <tr>
                <td>HP:</td>
                <td><b id="statshp${index}">100</b></td>
            </tr>
            <tr>
                <td>Attack:</td>
                <td><b id="statsattack${index}">57</b></td>
            </tr>
            <tr>
                <td>Defense:</td>
                <td><b id="statsdefense${index}">23</b></td>
            </tr>
            <tr>
                <td>Spec-Attack:</td>
                <td><b id="statsspec_attack${index}">25</b></td>
            </tr>
            <tr>
                <td>Spec-Defense:</td>
                <td><b id="statsspec_defense${index}">25</b></td>
            </tr>
            <tr>
                <td>Initiative:</td>
                <td><b id="statsinitiative${index}">68</b></td>
            </tr>
        </table>
    </div>
</div>
</div>
    `
}

function templatePokemonTypes(typename) {
    return `
    <div class="typediv type${typename}"><p>${(capitalizeFirstLetter(typename))}</p></div>
    `
}