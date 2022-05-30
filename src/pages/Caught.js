import React, { useEffect, useState } from "react";
import { caughtPokemon } from "../util/endpoints";
import Pokemons from "./Pokemons";

const Caught = () => {
  const [userPokemons, setUserPokemons] = useState([]);
  return (
    <>
      <Pokemons
        url={caughtPokemon}
        title={"Your Pokemon"}
        getter={userPokemons}
        setter={setUserPokemons}
      />
    </>
  );
};

export default Caught;
