var Arrays = [];

let buttonValue = document.querySelector(".inputnext");

buttonValue.addEventListener("click", () => {
  buttonValue.dataset.value++;
  fetchPokemon();
});
var pokemonimg = buttonValue.dataset.value;

const fetchPokemon = () => {
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${buttonValue.dataset.value}`;

  fetch(pokemonUrl)
    .then((response) => response.json())
    .then((pokemon) => {
      document.getElementById("name").innerHTML = pokemon.name.toUpperCase();
      document.getElementById("pokemonid").innerHTML = pokemon.id;
      document.getElementById("ty1").innerHTML =
        pokemon.types[0].type.name.toUpperCase();
      document.getElementById("ab1").innerHTML =
        pokemon.moves[0].move.name.toUpperCase();
      document.getElementById("ab2").innerHTML =
        pokemon.moves[1].move.name.toUpperCase();
      document.getElementById("st1").innerHTML = pokemon.stats[0].base_stat;
      document.getElementById("st2").innerHTML = pokemon.stats[1].base_stat;
      document.getElementById("st3").innerHTML = pokemon.stats[2].base_stat;
      document.getElementById("st4").innerHTML = pokemon.stats[3].base_stat;
      document.getElementById("st5").innerHTML = pokemon.stats[4].base_stat;
      document.getElementById("st6").innerHTML = pokemon.stats[5].base_stat;
      document.getElementById("sp1").src = pokemon.sprites.front_default;
      document.getElementById("sp2").src = pokemon.sprites.back_default;
      document.getElementById("sp3").src = pokemon.sprites.front_shiny;
      document.getElementById("sp4").src = pokemon.sprites.back_shiny;

      function pokemonNames() {
        fetch(pokemonUrl).then(function (res) {
          return res.name;
        });
      }

      const HP = document.getElementById("st1").innerHTML;
      const ATK = document.getElementById("st2").innerHTML;
      const DEF = document.getElementById("st3").innerHTML;
      const SPA = document.getElementById("st4").innerHTML;
      const SPD = document.getElementById("st5").innerHTML;
      const Speed = document.getElementById("st6").innerHTML;

      switch (true) {
        case HP >= 0 && HP <= 40:
          document.getElementById("st1").style.color = "#E84443";
          document.getElementById("st1").style.width = "60%";
          document.getElementById("st1").style.transition = "0.5s";
        default:
          switch (true) {
            case HP >= 51 && HP <= 119:
              document.getElementById("st1").style.color = "#202020";
              document.getElementById("st1").style.width = "80%";
              document.getElementById("st1").style.transition = "0.5s";
            default:
              switch (true) {
                case HP >= 41 && HP >= 120:
                  document.getElementById("st1").style.color = "#8abf8a";
                  document.getElementById("st1").style.width = "100%";
                  document.getElementById("st1").style.transition = "0.5s";
                default:
                  switch (true) {
                    case ATK >= 0 && ATK <= 40:
                      document.getElementById("st2").style.color = "#E84443";
                      document.getElementById("st2").style.width = "60%";
                      document.getElementById("st2").style.transition = "0.5s";
                    default:
                      switch (true) {
                        case ATK >= 41 && ATK <= 100:
                          document.getElementById("st2").style.color =
                            "#202020";
                          document.getElementById("st2").style.width = "80%";
                          document.getElementById("st2").style.transition =
                            "0.5s";
                        default:
                          switch (true) {
                            case ATK >= 101 && ATK <= 500:
                              document.getElementById("st2").style.color =
                                "#8abf8a";
                              document.getElementById("st2").style.width =
                                "100%";
                              document.getElementById("st2").style.transition =
                                "0.5s";
                            default:
                              switch (true) {
                                case DEF >= 75 && DEF >= 75:
                                  document.getElementById("st3").style.color =
                                    "#8abf8a";
                                  document.getElementById("st3").style.width =
                                    "100%";
                                  document.getElementById(
                                    "st3"
                                  ).style.transition = "0.5s";
                                default:
                                  switch (true) {
                                    case DEF <= 74 && DEF <= 74:
                                      document.getElementById(
                                        "st3"
                                      ).style.color = "#202020";
                                      document.getElementById(
                                        "st3"
                                      ).style.width = "80%";
                                      document.getElementById(
                                        "st4"
                                      ).style.transition = "0.5s";

                                    default:
                                      switch (true) {
                                        case SPA >= 75 && SPA >= 75:
                                          document.getElementById(
                                            "st4"
                                          ).style.color = "#8abf8a";
                                          document.getElementById(
                                            "st4"
                                          ).style.width = "100%";
                                          document.getElementById(
                                            "st4"
                                          ).style.transition = "0.5s";

                                        default:
                                          switch (true) {
                                            case SPA <= 74 && SPA <= 74:
                                              document.getElementById(
                                                "st4"
                                              ).style.color = "#202020";
                                              document.getElementById(
                                                "st4"
                                              ).style.width = "80%";
                                              document.getElementById(
                                                "st4"
                                              ).style.transition = "0.5s";
                                            default:
                                              switch (true) {
                                                case SPD >= 80 && SPD >= 80:
                                                  document.getElementById(
                                                    "st5"
                                                  ).style.color = "#8abf8a";
                                                  document.getElementById(
                                                    "st5"
                                                  ).style.width = "100%";
                                                  document.getElementById(
                                                    "st5"
                                                  ).style.transition = "0.5s";

                                                default:
                                                  switch (true) {
                                                    case SPD <= 79 && SPD <= 79:
                                                      document.getElementById(
                                                        "st5"
                                                      ).style.color = "#202020";
                                                      document.getElementById(
                                                        "st5"
                                                      ).style.width = "80%";
                                                      document.getElementById(
                                                        "st5"
                                                      ).style.transition =
                                                        "0.5s";

                                                    default:
                                                      switch (true) {
                                                        case Speed >= 83 &&
                                                          Speed >= 83:
                                                          document.getElementById(
                                                            "st6"
                                                          ).style.color =
                                                            "#8abf8a";
                                                          document.getElementById(
                                                            "st6"
                                                          ).style.width =
                                                            "100%";
                                                          document.getElementById(
                                                            "st6"
                                                          ).style.transition =
                                                            "0.5s";

                                                        default:
                                                          switch (true) {
                                                            case Speed <= 82 &&
                                                              Speed <= 82:
                                                              document.getElementById(
                                                                "st6"
                                                              ).style.color =
                                                                "#202020";
                                                              document.getElementById(
                                                                "st6"
                                                              ).style.width =
                                                                "80%";
                                                              document.getElementById(
                                                                "st6"
                                                              ).style.transition =
                                                                "0.5s";

                                                            default:
                                                          }
                                                      }
                                                  }
                                              }
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }
    });
};
fetchPokemon();

const url = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

for (var i = 1; i <= 898; i++) {
  var id = "00" + i;
  Arrays.push(url + id.substring(id.length, id.length - 3) + ".png");
}
/* Function modified */
function next() {
  if (pokemonimg == Arrays.length) {
    pokemonimg = 0;
  }
  document.getElementById("poke1").src = Arrays[pokemonimg];
  pokemonimg++;
  let pokemon = getPokemons().filter((item) => {
    return item.img + 1 === pokemonimg;
  })[0];
}
/* funtion called in search input on index.html */
function search(text) {
  let pokemon = getPokemons().filter((item) => {
    return item.name.toLowerCase().indexOf(text.toLowerCase()) === 0;
  })[0];
}
/* List of pokemons */
function getPokemons() {
  return [Array.from(Array(898).keys())];
}
