import React from 'react'
import pokemonsAttributes from '../../utils/classes/Pokemon/attributesList'
import '../../css/store.css'
const Store = ({ closeStore, storeBuying, user }) => {

    const pokemonsNames = Object.keys(pokemonsAttributes)

    const buy = (e) => {
        const pokemon = e.currentTarget.children[1].innerText
        let level = e.currentTarget.children[2].innerText.split('')
        level = Number(level.slice(level.length - 1).join(''))
        let price = e.currentTarget.children[3].innerText.split('')
        price.splice(price.length - 1)
        price = Number(price.join(''))
        const pokemonToBuy = { pokemon, level, price }
        storeBuying(pokemonToBuy)
    }

    const handlePokeballBuy = () => {
        if (user) {
            storeBuying("pokeball")
        }
    }

    return (
        <div className="store-wrapper">
            {!user && <strong style={{ color: "red" }}>You have to login in order to buy</strong>}
            <h1>Pokemons Store</h1>

            <div className="content">
                {
                    pokemonsNames.map((pokemon) => {
                        return (
                            <div
                                onClick={(e) => buy(e)}
                                className="pokemon-gif"
                                key={pokemon}>
                                <img
                                    src={require(`../../img/pokemon-front/gif/${pokemon}.gif`)}
                                    alt={pokemon}
                                >
                                </img>
                                <small>
                                    {pokemon}
                                </small>
                                <small>
                                    Lv.5
                                    </small>
                                <span className="pokemon-price">
                                    {
                                        Math.floor(
                                            Math.pow(200, pokemonsAttributes[pokemon].quality))
                                    }
                                    <span className="dollar-sign">
                                        $
                                    </span>
                                </span>
                            </div>
                        )
                    })
                }
            </div>
            <div
                className="pokeball"
                onClick={handlePokeballBuy}
            >
                <img
                    className="pokemons-desplayer-pokeball"
                    src={require('../../img/home/pokeball.png')}
                    alt="pokeball"
                >
                </img>
                <p>
                    Pokeball<br></br>400
                <span className="dollar-sign">
                        $
                 </span>
                </p>
            </div>

            {user &&
                <div className="user-funds">
                    <p>You got: {user.money}<span className="dollar-sign">$</span></p>
                </div>
            }

            <button className="exit-store-btn" onClick={() => closeStore()}>X</button>
        </div>
    )
}

export default Store