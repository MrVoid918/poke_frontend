import React, { useEffect, useState } from "react";
import { allPokemon } from "../util/endpoints";

import Pokemons from "./Pokemons";

const Homepage = () => {
  const [pokemons, setPokemons] = useState([]);

  return (
    <>
      <Pokemons
        url={allPokemon}
        title={"All Pokemons"}
        getter={pokemons}
        setter={setPokemons}
      />
    </>
  );
};

export default Homepage;
