import React, { useState } from 'react';
import axios from 'axios';

import './PokemonSearch.css';

const PokemonSearch = () => {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonName, setPokemonName] = useState("");

   
    const getPokemon = async () => {
    const toArray = []
       
      try {
          const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
          const res = await axios.get(url)

          toArray.push(res.data);
          setPokemonName(res.data.name)
          setPokemonData(toArray)      
      } catch (error) {
          alert("Incorrect name!")
      };
   };

   const handleChange = (e) => {
      setPokemon(e.target.value.toLowerCase());
   };
 
   const handleSubmit = (e) => {
      e.preventDefault();
      getPokemon();
   };





    return (
        <div className='search'>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        className='search__input'
                        type="text"
                        onChange={handleChange}
                        placeholder="Enter pokemon name..."
                        required
                    />           
                </label>
              <button type="submit" className='search__btn'>Search</button>     
            </form>

            {pokemonData.map((data ,index)=> { 
              return ( 
                <section key={index}>
                    <div>                    
                        <img className="search__img" src={data.sprites.other.dream_world.front_default} alt="name"/>  
                        <div className='search__name'> Hello, i'm <span className='search__name--color'>{pokemonName}</span> </div>   
                    </div>
                </section> 
              )
            })}
        </div>
    );
};

export default PokemonSearch;