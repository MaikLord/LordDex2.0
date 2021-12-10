var Arrays = [];

let buttonValue = document.querySelector(".inputnext");

let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/`;

// Button Next Function auto increment //

buttonValue.addEventListener("click", () => {
  buttonValue.dataset.value++;
  fetchPokemon();
});
var pokemonimg = buttonValue.dataset.value;

function next(src) {
  fetchPokemon();
}

// Function that GET Image Files into Pokemon.com and Edit URL using Padstart to increment with "0" on front //
function getImage(id) {
  const url = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

  const idStr = String(id).padStart(3, "0");
  return url + idStr + ".png";
}
async function search(text) {
  fetchPokemon(text);
}
