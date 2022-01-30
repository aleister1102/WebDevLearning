const pokemonApi = "http://localhost:3000/pokemons";

function start() {
  getPokemons();
  handleCreate();
}
// Using API with GET
function getPokemons() {
  fetch(pokemonApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      renderPokemons(json);
    });
}

function renderPokemons(json) {
  var pokemonListBlock = document.querySelector("#pokemons-list");
  var htmls = json.map(function (pokemon) {
    return `
        <li>
          <h4>${pokemon.id}</h4>
          <h4>${pokemon.name}</h4>
          <h4>${pokemon.type}</h4>
        </li>
        `;
  });
  pokemonListBlock.innerHTML = htmls.join("");
}
// Using API with POST
function createPokemon(newPoke, callback) {
  var options = {
    method: "POST",
    body: JSON.stringify(newPoke),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  };
  console.log(options);
  // Receive new object after creating.
  fetch(pokemonApi, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
    });
}

function handleCreate() {
  var createButtonBlock = document.querySelector("#create");
  createButtonBlock.onclick = function () {
    var nameInputBlock = document.querySelector('input[name = "name"]').value;
    var typeInputBlock = document.querySelector('input[name = "type"]').value;
    var newPoke = {
      name: nameInputBlock,
      type: typeInputBlock,
    };
    console.log(newPoke);
    createPokemon(newPoke);
  };
}

start();
