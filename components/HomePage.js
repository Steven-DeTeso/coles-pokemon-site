import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const HomePage = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        setPokemonList(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <Link href={`/pokemon/${index + 1}`}>
              <p>
                {index + 1}. {pokemon.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
