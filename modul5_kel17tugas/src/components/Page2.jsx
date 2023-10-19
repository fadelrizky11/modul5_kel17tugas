import React from 'react';
import { usePokemon } from './PokemonContext';
import { Link } from "react-router-dom";

function PageTwo() {
  const { pokemonData, loading } = usePokemon();

  return (
    <div>
      <h1>Kelompok 17</h1>
      <h2>Halaman 2 (Pokémon 11-20)</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {pokemonData.slice(10, 20).map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      )}
       <Link to="/" className="custom-button">
            Previous Page
          </Link>
    </div>
  );
}

export default PageTwo;
