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
  const pokeName1 = document.getElementById("name1");
  const pokeName2 = document.getElementById("name2");
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
      pokeSprint3.src = pokemon.sprites.front_shiny;

      const HP = document.getElementById("st1").innerHTML;
      const ATK = document.getElementById("st2").innerHTML;
      const DEF = document.getElementById("st3").innerHTML;
      const SPA = document.getElementById("st4").innerHTML;
      const SPD = document.getElementById("st5").innerHTML;
      const Speed = document.getElementById("st6").innerHTML;

      switch (true) {
        case HP >= 0 && HP <= 40:
          document.getElementById("st1").style.backgroundColor = "#a02b2b";
          document.getElementById("st1").style.transition = "0.5s";
          document.getElementById("st1").style.color = "white";
          document.getElementById("st1").style.width = "60%";
        default:
          switch (true) {
            case HP >= 41 && HP <= 104:
              document.getElementById("st1").style.backgroundColor = "#FFF";
              document.getElementById("st1").style.transition = "0.5s";
              document.getElementById("st1").style.color = "#202020";
              document.getElementById("st1").style.width = "80%";
            default:
              switch (true) {
                case HP >= 105:
                  document.getElementById("st1").style.backgroundColor =
                    "#0FC659";
                  document.getElementById("st1").style.transition = "0.5s";
                  document.getElementById("st1").style.color = "#FFF";
                  document.getElementById("st1").style.width = "100%";
                default:
              }
          }
      }
      switch (true) {
        case ATK >= 0 && ATK <= 40:
          document.getElementById("st2").style.backgroundColor = "#a02b2b";
          document.getElementById("st2").style.transition = "0.5s";
          document.getElementById("st2").style.color = "white";
          document.getElementById("st2").style.width = "60%";
        default:
          switch (true) {
            case ATK >= 41 && ATK <= 90:
              document.getElementById("st2").style.backgroundColor = "#FFF";
              document.getElementById("st2").style.transition = "0.5s";
              document.getElementById("st2").style.color = "#202020";
              document.getElementById("st2").style.width = "80%";
            default:
              switch (true) {
                case ATK >= 91:
                  document.getElementById("st2").style.backgroundColor =
                    "#0FC659";
                  document.getElementById("st2").style.transition = "0.5s";
                  document.getElementById("st2").style.color = "#FFF";
                  document.getElementById("st2").style.width = "100%";
                default:
              }
          }
      }
      switch (true) {
        case DEF >= 0 && DEF <= 40:
          document.getElementById("st3").style.backgroundColor = "#a02b2b";
          document.getElementById("st3").style.transition = "0.5s";
          document.getElementById("st3").style.color = "white";
          document.getElementById("st3").style.width = "60%";
        default:
          switch (true) {
            case DEF >= 41 && DEF <= 80:
              document.getElementById("st3").style.backgroundColor = "#FFF";
              document.getElementById("st3").style.transition = "0.5s";
              document.getElementById("st3").style.color = "#202020";
              document.getElementById("st3").style.width = "80%";
            default:
              switch (true) {
                case DEF >= 81:
                  document.getElementById("st3").style.backgroundColor =
                    "#0FC659";
                  document.getElementById("st3").style.transition = "0.5s";
                  document.getElementById("st3").style.color = "#FFF";
                  document.getElementById("st3").style.width = "100%";
                default:
              }
          }
      }
      switch (true) {
        case SPA >= 0 && SPA <= 40:
          document.getElementById("st4").style.backgroundColor = "#a02b2b";
          document.getElementById("st4").style.transition = "0.5s";
          document.getElementById("st4").style.color = "white";
          document.getElementById("st4").style.width = "60%";
        default:
          switch (true) {
            case SPA >= 41 && SPA <= 80:
              document.getElementById("st4").style.backgroundColor = "#FFF";
              document.getElementById("st4").style.transition = "0.5s";
              document.getElementById("st4").style.color = "#202020";
              document.getElementById("st4").style.width = "80%";
            default:
              switch (true) {
                case SPA >= 81:
                  document.getElementById("st4").style.backgroundColor =
                    "#0FC659";
                  document.getElementById("st4").style.transition = "0.5s";
                  document.getElementById("st4").style.color = "#FFF";
                  document.getElementById("st4").style.width = "100%";
                default:
              }
          }
      }
      switch (true) {
        case SPD >= 0 && SPD <= 40:
          document.getElementById("st5").style.backgroundColor = "#a02b2b";
          document.getElementById("st5").style.transition = "0.5s";
          document.getElementById("st5").style.color = "white";
          document.getElementById("st5").style.width = "60%";
        default:
          switch (true) {
            case SPD >= 41 && SPD <= 80:
              document.getElementById("st5").style.backgroundColor = "#FFF";
              document.getElementById("st5").style.transition = "0.5s";
              document.getElementById("st5").style.color = "#202020";
              document.getElementById("st5").style.width = "80%";
            default:
              switch (true) {
                case SPD >= 81:
                  document.getElementById("st5").style.backgroundColor =
                    "#0FC659";
                  document.getElementById("st5").style.transition = "0.5s";
                  document.getElementById("st5").style.color = "#FFF";
                  document.getElementById("st5").style.width = "100%";
                default:
              }
          }
      }
      switch (true) {
        case Speed >= 0 && Speed <= 35:
          document.getElementById("st6").style.backgroundColor = "#a02b2b";
          document.getElementById("st6").style.transition = "0.5s";
          document.getElementById("st6").style.color = "white";
          document.getElementById("st6").style.width = "60%";
        default:
          switch (true) {
            case Speed >= 36 && Speed <= 85:
              document.getElementById("st6").style.backgroundColor = "#FFF";
              document.getElementById("st6").style.transition = "0.5s";
              document.getElementById("st6").style.color = "#202020";
              document.getElementById("st6").style.width = "80%";
            default:
              switch (true) {
                case Speed >= 86:
                  document.getElementById("st6").style.backgroundColor =
                    "#0FC659";
                  document.getElementById("st6").style.transition = "0.5s";
                  document.getElementById("st6").style.color = "#FFF";
                  document.getElementById("st6").style.width = "100%";
                default:
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
