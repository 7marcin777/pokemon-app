import React, { useState, useEffect, useCallback } from "react";

import PokemonSearch from "./components/PokemonSearch";
import PokemonList from "./components/PokemonList";


//API
const url = "https://pokeapi.co/api/v2/pokemon?limit=20";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(url);

  
  const getPokemons = useCallback(async () => {
    const res  = await fetch(loading)
    const data = await res.json()

    setLoading(data.next)

    function createPokemonObject(results) {
      results.forEach(async pokemon => {
        const res  =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setPokemons ( currentList => [...currentList, data]) 
      }); 
    };
  createPokemonObject(data.results)
  } ,[loading]);


  useEffect(() => {
    getPokemons();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[]);
  

  return (
    <div className="container">
      <span className="container__title"><h1>Pokemon world</h1></span>
        <PokemonSearch />
          <div className="container__pokemon">
            <div className="container__list">
              {pokemons.map((pokemonStats, index) => 
                <PokemonList 
                  key={index}
                  image={pokemonStats.sprites.other.dream_world.front_default}
                  name={pokemonStats.name}
                  type={pokemonStats.types[0].type.name}
                />
              )}
            </div>
              <button className="container__pokemon--btn" onClick={() => getPokemons()}>Load more</button>
          </div>
    </div>
  );
};

export default App;
