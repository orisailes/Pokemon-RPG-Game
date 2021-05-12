import React from 'react';
import HPBar from './HPBar'
import ExpBar from './ExpBar'

import '../../css/stats.css';

function Stats({ pokemon, isUserPokemon }) {
    return (

        <div className={`stats-container ${isUserPokemon?"user-stats-container":"enemy-stats-container"}`}>

            <div className="stats-heading">
                <h3>{pokemon.name.toUpperCase()}</h3>
                <h3>Lv.{pokemon.level}</h3>
                <img src={require(`../../img/utils/types/${pokemon.type}.png`).default} className="type-img"
                alt={pokemon.name}
                >
                </img>
            </div>

            <div className="hp-container">
                <HPBar hp={pokemon.hp} maxHp={pokemon.maxHp} />
            </div>

            <div className="exp-container">
                {isUserPokemon && <ExpBar pokemon={pokemon} />}
            </div>

        </div>

    )
}

export default Stats