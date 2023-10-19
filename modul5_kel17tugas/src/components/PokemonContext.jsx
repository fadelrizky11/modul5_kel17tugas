import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const PokemonContext = createContext();

export function usePokemon() {
  return useContext(PokemonContext);
}

export function PokemonProvider({ children }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(response => {
        const data = response.data.results.map(pokemon => pokemon.name);
        setPokemonData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemonData, loading }}>
      {children}
    </PokemonContext.Provider>
  );
}
