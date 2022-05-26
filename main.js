let currentPokemon;
let max_pokemon = 10;
let allPokemonArray = [];
let allPokemonImgArray = [];
let searchPokemonArray = [];

//functions
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
    pokeid.innerHTML = `Pokedex ID #${currentPokemon['id']}`;
    img.src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    renderPokemonTypes(index, currentPokemon);
}

function renderPokemonTypes(index, currentPokemon) {
    let types = currentPokemon['types'];
    types.innerHTML = '';
    for (let i = 0; i < types.length; i++) {
        let back = document.getElementById(`back${index}`)
        let typename = types[i]['type']['name'];
        let imgbg = document.getElementById(`imgdiv${index}`);
        let showTypes = document.getElementById(`pokemonTypes${index}`);
        let typesarray = types[0]['type']['name']
        showTypes.innerHTML += templatePokemonTypes(typename);
        back.classList.add(`type${typesarray}`);
        imgbg.classList.add(`type${typesarray}`, `type${typesarray}bg`);
    }
}

function renderInfoBack(index, currentPokemon) {
    let name = document.getElementById(`pokemonnameBack${index}`);
    let pokeid = document.getElementById(`pokedexIDBack${index}`);
    name.innerHTML = capitalizeFirstLetter(currentPokemon['name']);
    pokeid.innerHTML = `Pokemon ID #${currentPokemon['id']}`;
    renderInfoBackStats(index, currentPokemon);
    renderInfoBackInfos(index, currentPokemon);

}

function renderInfoBackInfos(index, currentPokemon) {
    let weight = document.getElementById(`infoweight${index}`);
    let height = document.getElementById(`infoheight${index}`);
    let type = document.getElementById(`infotype${index}`);
    weight.innerHTML = `${currentPokemon['weight']} Kg`
    height.innerHTML = `${currentPokemon['height']}0 cm`
    type.innerHTML = ``;
    for (let j = 0; j < currentPokemon['types'].length; j++) {
        type.innerHTML += `${currentPokemon['types'][j]['type']['name']} `
    }
}

function renderInfoBackStats(index, currentPokemon) {
    let hp = document.getElementById(`statshp${index}`);
    let attack = document.getElementById(`statsattack${index}`);
    let defense = document.getElementById(`statsdefense${index}`);
    let spec_attack = document.getElementById(`statsspec_attack${index}`);
    let spec_defense = document.getElementById(`statsspec_defense${index}`);
    let initiative = document.getElementById(`statsinitiative${index}`);
    hp.innerHTML = `${currentPokemon['stats'][0]['base_stat']}`
    attack.innerHTML = `${currentPokemon['stats'][1]['base_stat']}`
    defense.innerHTML = `${currentPokemon['stats'][2]['base_stat']}`
    spec_attack.innerHTML = `${currentPokemon['stats'][3]['base_stat']}`
    spec_defense.innerHTML = `${currentPokemon['stats'][4]['base_stat']}`
    initiative.innerHTML = `${currentPokemon['stats'][5]['base_stat']}`
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
        max_pokemon = 10;
        await renderAllPokemon();
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
    if (pokemonname == undefined) {
        return
    }
    let content = document.getElementById('mainContent');
    content.innerHTML = ``;
    let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
    pokemonjson = await pokemon.json();
    content.innerHTML += templatePokemonCard(i);
    renderPokemonInfo(i, pokemonjson);

}

async function loadAllPokemon() {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
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