import React from 'react';

import './PokemonList.css';

const PokemonList = ({image, name, type}) => {
    const style = type + " list-container "

return (
    <div className={style}>
        <img src={image} alt='name' />
            <div>
                <h3>{name}</h3>
                <small><i>Type: {type}</i></small>
            </div>
    </div>
  );
};

export default PokemonList;