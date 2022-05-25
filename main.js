let currentPokemon;
let max_pokemon = 10;
let allPokemonArray = [];
let searchPokemonArray = [];
async function renderAllPokemon() {
    let content = document.getElementById('mainContent');
    content.innerHTML = ``;
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
    renderInfoBack(index, currentPokemon);
}

function renderInfoFront(index, currentPokemon) {
    let name = document.getElementById(`pokemonname${index}`);
    let pokeid = document.getElementById(`pokedexID${index}`)
    let img = document.getElementById(`pokemonImg${index}`);
    name.innerHTML = capitalizeFirstLetter(currentPokemon['name']);
    pokeid.innerHTML = `Pokemon ID #${currentPokemon['id']}`;
    img.src = currentPokemon['sprites']['front_default'];
    renderPokemonTypes(index, currentPokemon);
}

function renderPokemonTypes(index, currentPokemon) {
    let types = currentPokemon['types'];
    // console.log(types) //deleted soon
    // console.log(currentPokemon) //deleted soon
    types.innerHTML = '';
    for (let i = 0; i < types.length; i++) {
        let back = document.getElementById(`back${index}`)
        let typename = types[i]['type']['name'];
        let imgbg = document.getElementById(`imgdiv${index}`);
        let showTypes = document.getElementById(`pokemonTypes${index}`);
        // console.log(typename)
        showTypes.innerHTML += templatePokemonTypes(typename);
        back.classList.add(`type${types[0]['type']['name']}`);
        imgbg.classList.add(`type${types[0]['type']['name']}`);
    }
}

function renderInfoBack(index, currentPokemon) {
    let name = document.getElementById(`pokemonnameBack${index}`);
    let pokeid = document.getElementById(`pokedexIDBack${index}`);
    name.innerHTML = capitalizeFirstLetter(currentPokemon['name']);
    pokeid.innerHTML = `Pokemon ID #${currentPokemon['id']}`;

}

async function howManyPokemons() {
    let input = document.getElementById('hmpsinput');
    if (!input || input.value < 10) {
        alert("Mindestens 10 Pokemons!")
    } else {
        let max = input.value;
        max_pokemon = max;
        renderAllPokemon();
    }
}

async function searchPokemon() {
    let input = document.getElementById('inputsearch');
    if (input.value == '') {
        console.log("leer")
        renderAllPokemon();
    } else {
        await searchPokemonInJson();
    }
}
async function searchPokemonInJson() {
    let input = document.getElementById('inputsearch');
    searchPokemonArray = [];
    for (let i = 0; i < allPokemonArray.length; i++) {
        let pokemonname = allPokemonArray[i];
        if (pokemonname.toLowerCase().includes(input.value)) {
            searchPokemonArray.push(pokemonname)
        }
    }
    for (let j = 0; j < 10; j++) {
        let pokemonname = searchPokemonArray[j];
        renderSinglePokemon(j, pokemonname);
    }
}
async function renderSinglePokemon(i, pokemonname) {
    let content = document.getElementById('mainContent');
    content.innerHTML = ``;
    let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
    pokemonjson = await pokemon.json();
    content.innerHTML += templatePokemonCard(i);
    renderPokemonInfo(i, pokemonjson);

}

async function loadAllPokemon() {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0"
    let response = await fetch(url);
    let pokemonjson = await response.json();
    for (let i = 0; i < pokemonjson['count']; i++) {
        let singlepokemon = pokemonjson['results'][i]['name'];
        allPokemonArray.push(singlepokemon);
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}