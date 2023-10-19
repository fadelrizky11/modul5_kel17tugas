import React from 'react';
import { usePokemon } from './PokemonContext';
import { Link } from "react-router-dom";

function PageOne() {
  const { pokemonData, loading } = usePokemon();

  return (
    <div>
      <h1>Kelompok 17</h1>
      <h2>Halaman 1 (Pokémon 1-10)</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {pokemonData.slice(0, 10).map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      )}
      <Link to="/page2" className="custom-button">
            Next Page
          </Link>
    </div>
  );
}

export default PageOne;
