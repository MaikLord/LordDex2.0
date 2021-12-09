var Arrays = [];

let buttonValue = document.querySelector(".inputnext");

let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/`;

buttonValue.addEventListener("click", () => {
  buttonValue.dataset.value++;
  fetchPokemon();
});
var pokemonimg = buttonValue.dataset.value;

const fetchPokemon = (name) => {
  const pokeName = document.getElementById("name");
  const pokeID = document.getElementById("pokemonid");
  const pokeType = document.getElementById("ty1");
  const pokeAbility1 = document.getElementById("ab1");
  const pokeAbility2 = document.getElementById("ab2");
  const pokeStatus1 = document.getElementById("st1");
  const pokeStatus2 = document.getElementById("st2");
  const pokeStatus3 = document.getElementById("st3");
  const pokeStatus4 = document.getElementById("st4");
  const pokeStatus5 = document.getElementById("st5");
  const pokeStatus6 = document.getElementById("st6");
  const pokeSprint1 = document.getElementById("sp1");
  const pokeSprint2 = document.getElementById("sp2");
  const pokeSprint3 = document.getElementById("sp3");
  const pokeSprint4 = document.getElementById("sp4");

  let param = name || buttonValue.dataset.value;
  fetch(pokemonUrl + param)
    .then((response) => response.json())
    .then((pokemon) => {
      document.getElementById("poke1").src = getImage(pokemon.id);
      pokeName.innerHTML = pokemon.name.toUpperCase();
      pokeID.innerHTML = pokemon.id;
      pokeType.innerHTML = pokemon.types[0].type.name.toUpperCase();
      pokeAbility1.innerHTML = pokemon.moves[0].move.name.toUpperCase();
      pokeAbility2.innerHTML = pokemon.moves[1].move.name.toUpperCase();
      pokeStatus1.innerHTML = pokemon.stats[0].base_stat;
      pokeStatus2.innerHTML = pokemon.stats[1].base_stat;
      pokeStatus3.innerHTML = pokemon.stats[2].base_stat;
      pokeStatus4.innerHTML = pokemon.stats[3].base_stat;
      pokeStatus5.innerHTML = pokemon.stats[4].base_stat;
      pokeStatus6.innerHTML = pokemon.stats[5].base_stat;
      pokeSprint1.src = pokemon.sprites.front_default;
      pokeSprint2.src = pokemon.sprites.back_default;
      pokeSprint3.src = pokemon.sprites.front_shiny;
      pokeSprint4.src = pokemon.sprites.back_shiny;

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

/* Function modified */
function next() {
  fetchPokemon();
}
function getImage(id) {
  const url = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

  const idStr = String(id).padStart(3, "0");
  return url + idStr + ".png";
}
/* funtion called in search input on index.html */
async function search(text) {
  fetchPokemon(text);
}
