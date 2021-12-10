const fetchPokemon = (name) => {
  // Method Fetch to GET Data and Status of Any Pokemons and Print into HTML Using DOM //

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
  const pokeSprint3 = document.getElementById("sp3");

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

      console.log(pokemon);

      // Conditionals  Pokemon Icon Type//

      const image1 = document.createElement("img");
      const image2 = document.createElement("img");
      const image3 = document.createElement("img");
      const image4 = document.createElement("img");
      const image5 = document.createElement("img");
      const image6 = document.createElement("img");
      const image7 = document.createElement("img");
      const image8 = document.createElement("img");
      const image9 = document.createElement("img");
      const image10 = document.createElement("img");
      const image11 = document.createElement("img");
      const image12 = document.createElement("img");
      const image13 = document.createElement("img");
      const image14 = document.createElement("img");
      const image15 = document.createElement("img");
      const image16 = document.createElement("img");
      const image17 = document.createElement("img");
      const image18 = document.createElement("img");
      const image19 = document.createElement("img");

      image1.src = "./img/120px-Pokémon_Fire_Type_Icon.svg.png";
      image2.src = "./img/120px-Pokémon_Water_Type_Icon.svg.png";
      image3.src = "./img/120px-Pokémon_Bug_Type_Icon.svg.png";
      image4.src = "./img/120px-Pokémon_Dark_Type_Icon.svg.png";
      image5.src = "./img/120px-Pokémon_Dragon_Type_Icon.svg.png";
      image6.src = "./img/120px-Pokémon_Electric_Type_Icon.svg.png";
      image7.src = "./img/120px-Pokémon_Fairy_Type_Icon.svg.png";
      image8.src = "./img/120px-Pokémon_Fighting_Type_Icon.svg.png";
      image9.src = "./img/120px-Pokémon_Flying_Type_Icon.svg.png";
      image10.src = "./img/120px-Pokémon_Ghost_Type_Icon.svg.png";
      image11.src = "./img/120px-Pokémon_Grass_Type_Icon.svg.png";
      image12.src = "./img/120px-Pokémon_Ground_Type_Icon.svg.png";
      image13.src = "./img/120px-Pokémon_Ice_Type_Icon.svg.png";
      image14.src = "./img/120px-Pokémon_Normal_Type_Icon.svg.png";
      image15.src = "./img/120px-Pokémon_Poison_Type_Icon.svg.png";
      image17.src = "./img/120px-Pokémon_Rock_Type_Icon.svg.png";
      image18.src = "./img/120px-Pokémon_Steel_Type_Icon.svg.png";
      image19.src = "./img/120px-Pokémon_psychic_Type_Icon.svg.png";

      const typeOf = document.getElementById("typeOf");

      if (pokemon.types[0].type.name == "fire") {
        document.getElementById("typeOfIcon").src = image1.src;
        typeOf.style.backgroundColor = "#FF983F";
        pokeType.style.backgroundColor = "#FF983F";
        // pokeType.style.color = "#FFF";
      }
      if (pokemon.types[0].type.name == "water") {
        document.getElementById("typeOfIcon").src = image2.src;
        typeOf.style.backgroundColor = "#3393DD";
        pokeType.style.backgroundColor = "#3393DD";
      }
      if (pokemon.types[0].type.name == "bug") {
        document.getElementById("typeOfIcon").src = image3.src;
        typeOf.style.backgroundColor = "#84C400";
        pokeType.style.backgroundColor = "#84C400";
      }
      if (pokemon.types[0].type.name == "dark") {
        document.getElementById("typeOfIcon").src = image4.src;
        typeOf.style.backgroundColor = "#5B5366";
        pokeType.style.backgroundColor = "#5B5366";
      }
      if (pokemon.types[0].type.name == "dragon") {
        document.getElementById("typeOfIcon").src = image5.src;
        typeOf.style.backgroundColor = "#0070CA";
        pokeType.style.backgroundColor = "#0070CA";
      }
      if (pokemon.types[0].type.name == "electric") {
        document.getElementById("typeOfIcon").src = image6.src;
        typeOf.style.backgroundColor = "#FBD200";
        pokeType.style.backgroundColor = "#FBD200";
      }
      if (pokemon.types[0].type.name == "fairy") {
        document.getElementById("typeOfIcon").src = image7.src;
        typeOf.style.backgroundColor = "#FB8AEC";
        pokeType.style.backgroundColor = "#FB8AEC";
      }
      if (pokemon.types[0].type.name == "fighting") {
        document.getElementById("typeOfIcon").src = image8.src;
        typeOf.style.backgroundColor = "#E12C6A";
        pokeType.style.backgroundColor = "#E12C6A";
      }
      if (pokemon.types[0].type.name == "flying") {
        document.getElementById("typeOfIcon").src = image9.src;
        typeOf.style.backgroundColor = "#8AABE4";
        pokeType.style.backgroundColor = "#8AABE4";
      }
      if (pokemon.types[0].type.name == "ghost") {
        document.getElementById("typeOfIcon").src = image10.src;
        typeOf.style.backgroundColor = "#4B6AB3";
        pokeType.style.backgroundColor = "#4B6AB3";
      }
      if (pokemon.types[0].type.name == "grass") {
        document.getElementById("typeOfIcon").src = image11.src;
        typeOf.style.backgroundColor = "#35C04A";
        pokeType.style.backgroundColor = "#35C04A";
      }
      if (pokemon.types[0].type.name == "ground") {
        document.getElementById("typeOfIcon").src = image12.src;
        typeOf.style.backgroundColor = "#E97333";
        pokeType.style.backgroundColor = "#E97333";
      }
      if (pokemon.types[0].type.name == "ice") {
        document.getElementById("typeOfIcon").src = image13.src;
        typeOf.style.backgroundColor = "#4BD2C1";
        pokeType.style.backgroundColor = "#4BD2C1";
      }
      if (pokemon.types[0].type.name == "normal") {
        document.getElementById("typeOfIcon").src = image14.src;
        typeOf.style.backgroundColor = "#929BA3";
        pokeType.style.backgroundColor = "#929BA3";
      }
      if (pokemon.types[0].type.name == "poison") {
        document.getElementById("typeOfIcon").src = image15.src;
        typeOf.style.backgroundColor = "#B667CF";
        pokeType.style.backgroundColor = "#B667CF";
      }
      if (pokemon.types[0].type.name == "psychic") {
        document.getElementById("typeOfIcon").src = image19.src;
        typeOf.style.backgroundColor = "#FF6676";
        pokeType.style.backgroundColor = "#FF6676";
      }
      if (pokemon.types[0].type.name == "rock") {
        document.getElementById("typeOfIcon").src = image17.src;
        typeOf.style.backgroundColor = "#C9B787";
        pokeType.style.backgroundColor = "#C9B787";
      }
      if (pokemon.types[0].type.name == "steel") {
        document.getElementById("typeOfIcon").src = image18.src;
        typeOf.style.backgroundColor = "#598FA3";
        pokeType.style.backgroundColor = "#598FA3";
      }

      // Conditionals Status Base Bar //

      const HP = document.getElementById("st1").innerHTML;
      const ATK = document.getElementById("st2").innerHTML;
      const DEF = document.getElementById("st3").innerHTML;
      const SPA = document.getElementById("st4").innerHTML;
      const SPD = document.getElementById("st5").innerHTML;
      const Speed = document.getElementById("st6").innerHTML;
      const down = `<i id="caret-down" class="fas fa-caret-down"></i>`;
      const up = `<i id="caret-up" class="fas fa-caret-up"></i>`;

      switch (true) {
        case HP >= 0 && HP <= 40:
          document.getElementById("st1").style.backgroundColor = "#a02b2b";
          document.getElementById("st1").style.transition = "0.5s";
          document.getElementById("st1").style.color = "white";
          document.getElementById("st1").style.width = "60%";
          document.getElementById("HP").innerHTML = "HP   " + `${down}`;
        default:
          switch (true) {
            case HP >= 41 && HP <= 104:
              document.getElementById("st1").style.backgroundColor = "#FFF";
              document.getElementById("st1").style.transition = "0.5s";
              document.getElementById("st1").style.color = "#202020";
              document.getElementById("st1").style.width = "80%";
              document.getElementById("HP").innerHTML = "HP";
            default:
              switch (true) {
                case HP >= 105:
                  document.getElementById("st1").style.backgroundColor =
                    "#0FC659";
                  document.getElementById("st1").style.transition = "0.5s";
                  document.getElementById("st1").style.color = "#FFF";
                  document.getElementById("st1").style.width = "100%";
                  document.getElementById("HP").innerHTML = "HP   " + `${up}`;

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
          document.getElementById("ATK").innerHTML = "ATK   " + `${down}`;

        default:
          switch (true) {
            case ATK >= 41 && ATK <= 90:
              document.getElementById("st2").style.backgroundColor = "#FFF";
              document.getElementById("st2").style.transition = "0.5s";
              document.getElementById("st2").style.color = "#202020";
              document.getElementById("st2").style.width = "80%";
              document.getElementById("ATK").innerHTML = "ATK";
            default:
              switch (true) {
                case ATK >= 91:
                  document.getElementById("st2").style.backgroundColor =
                    "#0FC659";
                  document.getElementById("st2").style.transition = "0.5s";
                  document.getElementById("st2").style.color = "#FFF";
                  document.getElementById("st2").style.width = "100%";
                  document.getElementById("ATK").innerHTML = "ATK   " + `${up}`;

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
          document.getElementById("DEF").innerHTML = "DEF   " + `${down}`;
        default:
          switch (true) {
            case DEF >= 41 && DEF <= 80:
              document.getElementById("st3").style.backgroundColor = "#FFF";
              document.getElementById("st3").style.transition = "0.5s";
              document.getElementById("st3").style.color = "#202020";
              document.getElementById("st3").style.width = "80%";
              document.getElementById("DEF").innerHTML = "DEF";

            default:
              switch (true) {
                case DEF >= 81:
                  document.getElementById("st3").style.backgroundColor =
                    "#0FC659";
                  document.getElementById("st3").style.transition = "0.5s";
                  document.getElementById("st3").style.color = "#FFF";
                  document.getElementById("st3").style.width = "100%";
                  document.getElementById("DEF").innerHTML = "DEF   " + `${up}`;

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
          document.getElementById("SPA").innerHTML = "SPATK   " + `${down}`;
        default:
          switch (true) {
            case SPA >= 41 && SPA <= 80:
              document.getElementById("st4").style.backgroundColor = "#FFF";
              document.getElementById("st4").style.transition = "0.5s";
              document.getElementById("st4").style.color = "#202020";
              document.getElementById("st4").style.width = "80%";
              document.getElementById("SPA").innerHTML = "SPATK";

            default:
              switch (true) {
                case SPA >= 81:
                  document.getElementById("st4").style.backgroundColor =
                    "#0FC659";
                  document.getElementById("st4").style.transition = "0.5s";
                  document.getElementById("st4").style.color = "#FFF";
                  document.getElementById("st4").style.width = "100%";
                  document.getElementById("SPA").innerHTML =
                    "SPATK   " + `${up}`;

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
          document.getElementById("SPD").innerHTML = "SPDEF   " + `${down}`;

        default:
          switch (true) {
            case SPD >= 41 && SPD <= 80:
              document.getElementById("st5").style.backgroundColor = "#FFF";
              document.getElementById("st5").style.transition = "0.5s";
              document.getElementById("st5").style.color = "#202020";
              document.getElementById("st5").style.width = "80%";
              document.getElementById("SPD").innerHTML = "SPDEF";

            default:
              switch (true) {
                case SPD >= 81:
                  document.getElementById("st5").style.backgroundColor =
                    "#0FC659";
                  document.getElementById("st5").style.transition = "0.5s";
                  document.getElementById("st5").style.color = "#FFF";
                  document.getElementById("st5").style.width = "100%";
                  document.getElementById("SPD").innerHTML =
                    "SPDEF   " + `${up}`;

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
          document.getElementById("Speed").innerHTML = "SPD   " + `${down}`;

        default:
          switch (true) {
            case Speed >= 36 && Speed <= 85:
              document.getElementById("st6").style.backgroundColor = "#FFF";
              document.getElementById("st6").style.transition = "0.5s";
              document.getElementById("st6").style.color = "#202020";
              document.getElementById("st6").style.width = "80%";
              document.getElementById("Speed").innerHTML = "SPD";

            default:
              switch (true) {
                case Speed >= 86:
                  document.getElementById("st6").style.backgroundColor =
                    "#0FC659";
                  document.getElementById("st6").style.transition = "0.5s";
                  document.getElementById("st6").style.color = "#FFF";
                  document.getElementById("st6").style.width = "100%";
                  document.getElementById("Speed").innerHTML =
                    "SPD   " + `${up}`;

                default:
              }
          }
      }
    });
};
fetchPokemon();
