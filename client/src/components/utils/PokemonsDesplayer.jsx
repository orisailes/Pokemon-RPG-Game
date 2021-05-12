import React from 'react'

const PokemonsDisplayer = ({ initialPokemonChoose }) => {

    const pokemonsNames = [
        "scyther",
        "hitmonlee",
        "bulbasaur",
        "caterpie",
        "charmander",
        "eevee",
        "ekans",
        "geodude",
        "metapod",
        "pidgey",
        "pikachu",
        "ponyta",
        "psyduck",
        "raticate",
        "rattata",
        "spearow",
        "squirtle",
        "voltorb",
        "vulpix",
        "weedle"
    ]

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
                <div className="content">
                    {
                        pokemonsNames.map((pokemon) => {
                            return (
                                <div
                                    onClick={() => initialPokemonChoose(pokemon)}
                                    className="pokemon-gif"
                                    key={pokemon}>
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
                </div>
            </div>
        </>
    )

}

export default PokemonsDisplayer