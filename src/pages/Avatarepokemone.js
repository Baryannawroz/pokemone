import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Avatarepokemone() {
  const { id } = useParams();
  const [pokemons, setPokemons] = useState({});
  let images;
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(function (response) {
        console.log(response.data.sprites.back_default);
        setPokemons(response.data);
      });
  }, []);

  if (!pokemons) {
    return <div>loding page</div>;
  }
console.log(pokemons.sprites);
  return (
    <div className="flex justify-center mt-20">
      <h1>{pokemons.name}</h1>
      {/* <img src={pokemons.sprites.back_default} /> */}
    </div>
  );
}
