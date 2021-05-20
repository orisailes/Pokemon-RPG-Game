import React, { useState } from 'react'
import attributeList from '../../utils/classes/Pokemon/attributesList'

const PokemonsDisplayer = ({ initialPokemonChoose }) => {

    const pokemonsNames = Object.keys(attributeList)

    const [hoveredPokemon, setHoveredPokemon] = useState(null)

    console.log(hoveredPokemon);

    return (
        <>
            <div className="pokemons-desplayer">

                <div className="heading">
                    <img
                        className="pokemons-desplayer-pokeball"
                        src={require('../../img/home/pokeball.png').default}
                        alt="pokeball"
                    >

                    </img>
                    <h2 style={{ color: "white" }}>CHOOSE POKEMON</h2>
                </div>
                {
                    hoveredPokemon &&
                    <div className="hovered-pokemon">
                        <img src={require(`../../img/pokemon-front/${hoveredPokemon.name}.png`).default} alt="hovered-pokemon" />
                        <div>
                            <p>ATK:{hoveredPokemon.power}</p>
                            <p>DEF:{hoveredPokemon.defense}</p>
                        </div>
                        <div>
                            <p>ACC:{hoveredPokemon.accurate}</p>
                            <p>DODGE:{hoveredPokemon.dodge}</p>
                        </div>
                        <div className="attacks">
                            <span>ATTACKS AVAILABLE:<br></br>{hoveredPokemon.attacks[3].map(atc=><span>{atc.replace("_","  ")},</span>)}</span>
                       </div>
                    </div>
                }
                <div className="content">
                    <>
                        {
                            pokemonsNames.map((pokemon) => {
                                return (
                                    <div
                                        onClick={() => initialPokemonChoose(pokemon)}
                                        onMouseEnter={() => setHoveredPokemon({ ...attributeList[pokemon], name: pokemon })
                                        }
                                        onMouseLeave={() => setHoveredPokemon(null)}
                                        className="pokemon-gif"
                                        key={pokemon} >
                                        <img
                                            src={require(`../../img/pokemon-front/gif/${pokemon}.gif`).default}
                                            alt={pokemon}
                                        >
                                        </img>
                                        <small
                                            style={{ color: "white" }}>
                                            {pokemon}
                                            <br></br>
                                    Lv.5
                                    </small>
                                    </div>
                                )
                            })
                        }
                    </>
                </div>
            </div>
        </>
    )

}

export default PokemonsDisplayer