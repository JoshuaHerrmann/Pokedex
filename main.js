let currentPokemon;
let max_pokemon = 10;
async function loadPokemon() {
    /* let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let response = await fetch(url);
    let allPokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    allPokemonsjson = await allPokemons.json();
    currentPokemon = await response.json();
    console.log(allPokemonsjson);
    console.log(currentPokemon); */
    renderAllPokemon();


}

async function renderAllPokemon() {
    let content = document.getElementById('mainContent');
    let allPokemons = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${max_pokemon}&offset=0`)
    allPokemonsjson = await allPokemons.json();
    for (let i = 0; i < allPokemonsjson['count']; i++) {
        let urlsingle = allPokemonsjson['results'][i]['url']
        let urlsingleresponse = await fetch(urlsingle)
        let urlsinglejson = await urlsingleresponse.json();
        content.innerHTML += templatePokemonCard(i);
        renderPokemonInfo(i, urlsinglejson);
    }
}

async function renderPokemonInfo(index, currentPokemon) {
    renderInfoFront(index, currentPokemon);
    // renderInfoBack();
}

function renderInfoFront(index, currentPokemon) {
    let name = document.getElementById(`pokemonname${index}`);
    let pokeid = document.getElementById(`pokedexID${index}`)
    let img = document.getElementById(`pokemonImg${index}`);
    let types = document.getElementById(`pokemonTypes${index}`);
    name.innerHTML = capitalizeFirstLetter(currentPokemon['name']);
    pokeid.innerHTML = `Pokemon ID #${currentPokemon['id']}`;
    img.src = currentPokemon['sprites']['front_default'];
    // types.innerHTML = renderPokemonTypes();
}

function renderPokemonTypes() {
    // for (each type ein img)
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}