import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { catchPokemon } from "../util/endpoints";
import useAuthentication from "../util/useAuthentication";

const NUMBER_OF_POKEMONS = 12;
const CatchPokemon = () => {
  const navigate = useNavigate();
  const [remainingTries, setRemainingTries] = useState(3);
  // We guess the number here to get the pokemon
  const [randNum] = useState(Math.floor(Math.random() * 10));
  //  from 0 to 12 correlates to 12 pokemon possible
  const [randPokemonNum] = useState(
    Math.floor(Math.random() * NUMBER_OF_POKEMONS + 1) + 1
  );

  
  const [guessUpdate, setGuessUpdate] = useState("");
  const [currentGuess, setCurrentGuess] = useState("");
  const auth = useAuthentication()[0];

  useEffect(() => {
    if (remainingTries <= 0) {
      alert("Try again next time");
      navigate("/caught");
    }
    const inputInt = parseInt(currentGuess);
    // If remaining Tries isnt 3 then we output the state of last guess
    remainingTries === 3
      ? setGuessUpdate("3 chance(s) left")
      : inputInt < randNum
      ? setGuessUpdate(
          "Guess higher, " + remainingTries + " chance(s) left"
        )
      : setGuessUpdate(
          "Guess lower, " + remainingTries + " chance(s) left"
        );
  }, [remainingTries]);

  const addPokemon = () => {
    fetch(catchPokemon, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT " + auth.access,
      },
      body: JSON.stringify({ rand_pokemon: randPokemonNum }),
    });
  };

  const handleCurrentGuess = (event) => {
    event.preventDefault();
    var inputInt = parseInt(currentGuess);
    if (randNum === inputInt) {
      addPokemon();
      alert("You caught the pokemon!");
      navigate("/caught");
    } else {
      setRemainingTries((prev) => prev - 1);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "40rem" }}
    >
      <div className="card pt-5" style={{ width: "20rem", height: "auto" }}>
        <div className="card-body">
          <h5 className="card-title text-center">Guess the Number!</h5>
          <p className="card-text text-center">{guessUpdate}</p>
          <form onSubmit={handleCurrentGuess}>
            <input
              type="number"
              min="0"
              max="10"
              pattern="[0-9]*"
              value={currentGuess}
              onChange={(event) =>
                setCurrentGuess(
                  event.target.validity.valid
                    ? event.target.value
                    : currentGuess
                )
              }
            />
            <button className="btn btn-primary my-2" type="submit">
              Guess
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CatchPokemon;
