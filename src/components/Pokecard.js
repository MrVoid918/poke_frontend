import React from "react";
import { deletePokemon } from "../util/endpoints";
import useAuthentication from "../util/useAuthentication";

const Pokecard = ({ props, title }) => {
  console.log(props);
  const auth = useAuthentication()[0];
  const handleDelete = () => {
    fetch(deletePokemon, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "JWT " + auth.access,
      },
      body: JSON.stringify({ release_pokemon_id: props.id }),
    }).then((res) => window.location.reload());
  };
  return (
    <div>
      <div className="card w-50">
        <div className="card-body">
          {title === "Your Pokemon" ? (
            <div>
            <h2 className="card-title">{props.pokemon.name}</h2>             
            <h5 className="card-title">Type: {props.pokemon.type}</h5>     
              <h5 className="card-title">HP: {props.pokemon.hp}</h5>                                                       
              <h5 className="card-title">Attack: {props.pokemon.attack}</h5>                        
              <h5 className="card-title">Defense: {props.pokemon.defense}</h5>                        
            </div>                       
          ) : (
            <h2 className="card-title">{props.name}</h2>
          )}          
          <p className="card-text"></p>
          {title === "Your Pokemon" ? (
            <button className="btn btn-primary" onClick={handleDelete}>
              Delete
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Pokecard;
