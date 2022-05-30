import React, { useEffect, useState } from "react";
import { mysteryPokemon } from "../util/endpoints";
import Pokemons from "./Pokemons";

const Mystery = () => {
  const [mysteryPokemons, setMysteryPokemons] = useState([]);

  return (
    <Pokemons
      url={mysteryPokemon}
      title={"Unknown Pokemon"}
      getter={mysteryPokemons}
      setter={setMysteryPokemons}
    />
  );
};

export default Mystery;
