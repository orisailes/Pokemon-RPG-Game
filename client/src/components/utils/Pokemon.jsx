import React from 'react';
import StatsContainer from './StatsContainer'

function Pokemon({ isUserPokemon, pokemon, forwardedRef, enemyClassName }) {

    return (
        <div className={`pokemon  ${isUserPokemon ? "user-pokemon" : "enemy-pokemon"}`}>
            <img
                className={` ${isUserPokemon ? "user-pokemon-img" : enemyClassName}`}
                src={require(`../../img/pokemon-${isUserPokemon ? "back" : "front"}/${pokemon.name}.png`).default}
                alt={pokemon.name}
                ref={forwardedRef}
            >
            </img>
            <StatsContainer pokemon={pokemon} isUserPokemon={isUserPokemon} />
        </div >


    )
}

export default Pokemon