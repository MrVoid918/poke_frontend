import React, { useEffect, useState } from "react";
import Pokecard from "../components/Pokecard";
import useAuthentication from "../util/useAuthentication";

const Pokemons = ({ url, title, getter, setter }) => {
  const auth = useAuthentication()[0];
  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: "JWT " + auth.access,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => setter(data));
  }, []);

  return (
    <div>
      <h3>{title}</h3>

      {/*  Safety code to prevent empty object from exploding in our faces */}
      <div className="container">
        {Object.keys(getter).length !== 0 &&
          getter &&
          getter.map((pokemon, index) => (
            // <li key={index}>{pokemon.name}</li>
            <Pokecard key={index} props={pokemon} title={title} />
          ))}
      </div>
    </div>
  );
};

export default Pokemons;
