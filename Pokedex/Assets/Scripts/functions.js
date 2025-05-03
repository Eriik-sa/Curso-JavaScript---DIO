async function fetchPokemonData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await response.json();
    return data.results;
}

function createPokemonCard(pokemon) {
    const li = document.createElement('li');
    li.className = pokemon.types[0].type.name;

    li.innerHTML = `
    <span class="number"> ${pokemon.id.toString().padStart(3, '0')}</span> 
    <span class="name"> ${pokemon.charAt(0).toUpper() + pokemon.name.slice(1)}</span> 
    <div class="details">
        <ol class = "types">
        ${pokemon.types}
    `

}

