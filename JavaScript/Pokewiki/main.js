const pokemonApi = "http://localhost:3000/pokemons";

function start() {
  getPokemons();
  handleCreate();
  handleUpdate();
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
        <li id = "pokedex-${pokemon.id}">
          <h4>${pokemon.id}</h4>
          <h4>${pokemon.name}</h4>
          <h4>${pokemon.type}</h4>
          <button onclick = "deletePokemon(${pokemon.id})">Delete</button>
        </li>
        `;
  });
  pokemonListBlock.innerHTML = htmls.join("");
}
// Using API with POST
function createPokemon(newPoke) {
  var options = {
    method: "POST",
    body: JSON.stringify(newPoke),
    headers: {
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
      var pokeItemList = document.querySelector("#pokemons-list");
      pokeItemList.innerHTML = `<li id = "pokedex-${newPoke.id}">
        <h4>${newPoke.id}</h4>
        <h4>${newPoke.name}</h4>
        <h4>${newPoke.type}</h4>
        <button onclick = "deletePokemon(${newPoke.id})">Delete</button>
      </li>`;
    })
    .catch(function (error) {
      console.error(error);
    });
}

function handleCreate() {
  var createButtonBlock = document.querySelector("#create");
  createButtonBlock.onclick = function () {
    var nameInputBlock = document.querySelector('input[name = "name"]').value;
    var typeInputBlock = document.querySelector('input[name = "type"]').value;
    if (nameInputBlock === "" || typeInputBlock === "") {
      alert("Empty input!");
    } else {
      var newPoke = {
        name: nameInputBlock,
        type: typeInputBlock,
      };
      console.log(newPoke);
      createPokemon(newPoke);
    }
  };
}

function updatePokemon(updatePoke) {
  var options = {
    method: "PUT",
    body: JSON.stringify(updatePoke),
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(options);
  fetch(pokemonApi + "/" + updatePoke.id, options)
    .then(function (response) {
      return response.json();
    })
    .then(function () {
      var pokeItemList = document.querySelector("#pokemons-list");
      var pokeItem = document.querySelector(`#pokedex-${updatePoke.id}`);
      if (pokeItem) {
        pokeItem.remove();
        pokeItemList.innerHTML = `<li id = "pokedex-${updatePoke.id}">
        <h4>${updatePoke.id}</h4>
        <h4>${updatePoke.name}</h4>
        <h4>${updatePoke.type}</h4>
        <button onclick = "deletePokemon(${updatePoke.id})">Delete</button>
      </li>`;
      }
    })
    .catch(function (error) {
      console.log("Error: ", error);
    });
}

function handleUpdate() {
  var createButtonBlock = document.querySelector("#update");
  createButtonBlock.onclick = function () {
    var nameInputBlock = document.querySelector('input[name = "name"]').value;
    var typeInputBlock = document.querySelector('input[name = "type"]').value;
    var idInputBlock = document.querySelector('input[name = "id"]').value;

    if (nameInputBlock === "" || typeInputBlock === "" || idInputBlock === "") {
      alert("Empty update input!");
    } else {
      var updatePoke = {
        name: nameInputBlock,
        type: typeInputBlock,
        id: idInputBlock,
      };
      console.log(updatePoke);
      updatePokemon(updatePoke);
    }
  };
}

function deletePokemon(pokeId) {
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(options);
  fetch(pokemonApi + "/" + pokeId, options)
    .then(function (response) {
      return response.json();
    })
    .then(function () {
      var pokeItem = document.querySelector(`#poke-${pokeId}`);
      if (pokeItem) {
        pokeItem.remove();
      }
    })
    .catch(function (error) {
      console.log("Error: ", error);
    });
}

start();
