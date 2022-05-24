let currentPokemon;
async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let response = await fetch(url);
    let allPokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    allPokemonsjson = await allPokemons.json();
    currentPokemon = await response.json();
    console.log(allPokemonsjson);
    console.log(currentPokemon);

    // renderPokemonInfo(currentPokemon);
    renderAllPokemon();
}

function renderPokemonInfo(currentPokemon) {
    let name = document.getElementById('name');
    let img = document.getElementById('img');
    name.innerHTML = currentPokemon['name'];
    img.src = currentPokemon['sprites']['front_default'];

}

async function renderAllPokemon() {
    let content = document.getElementById('allpokemon');
    let allPokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    allPokemonsjson = await allPokemons.json();
    for (let i = 0; i < allPokemonsjson['count']; i++) {
        let urlsingle = allPokemonsjson['results'][i]['url']
        let urlsinglejson = await fetch(urlsingle)
        content.innerHTML += `${i+1}. ${allPokemonsjson['results'][i]['name']}<br>`
        singlepokemon = await urlsinglejson.json();
        content.innerHTML += `<img src="${singlepokemon[`sprites`]['front_default']}" alt=""><br>`
    }
}
// design functions
function dropdown(index){ //mit get elementbyid jeweils id
    let content = document.getElementById(`dropdowncontent${index}`);
    let arrow = document.getElementById(`arrowimg${index}`);
    if(content.classList.contains("d-none")){
        content.classList.remove("d-none")
        arrow.src = "img/arrow-32-up.png"
    }else{
        content.classList.add("d-none")
        arrow.src = "img/arrow-32-down.png"
    }
}

function renderPokemon(){
    let allPokemon = document.getElementById('mainContent');
    for (let i = 0; i < 15; i++) {
        allPokemon.innerHTML += templatePokemonCard(i);
        
    }
}