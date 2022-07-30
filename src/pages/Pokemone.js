import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Pokemone() {
  const [pokemons, setPokemons] = useState({});
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then(function (response) {
        // handle success
        setPokemons(response.data.results);
      })
      .catch(function (error) {
        // handle error
      });
  }, []);

  return (
    <div>
      {Object.values(pokemons).map((element, id) => {
        return (
          <Link to={`/pokemones/${id + 1}`}>
            <div className="bg-blue-300 mt-8 h-10 flex items-center text-slate-100 container mx-auto hover:bg-red-300">
              <span className="mx-20 text-lg font-bold">{element.name}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
